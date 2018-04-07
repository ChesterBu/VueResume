<template>
    <div class="resume">
        <section class="profile">
            <h1>
                <editable-span 
                    :value="resume.name" 
                    @edit="onEdit('name', $event)"
                >
                </editable-span>
            </h1>
            <p>
                应聘职位：
                <editable-span 
                    :value="resume.jobTitle" 
                    @edit="onEdit('jobTitle', $event)"
                >
                </editable-span>
            </p>
            <p class="profile-border">
                <editable-span 
                    :value="resume.gender" 
                    @edit="onEdit('gender', $event)"
                >
                </editable-span>
                |
                <editable-span 
                    :value="resume.email" 
                    @edit="onEdit('email', $event)">
                </editable-span>
                |
                <editable-span 
                    :value="resume.phone" 
                    @edit="onEdit('phone', $event)"
                >
                </editable-span>
            </p>
        </section>
        <section class="skills">
            <h2>技能</h2>
            <ul>
                <li v-for="skill,index in resume.skills">
                    <div class="skillname">
                        <editable-span 
                        :value='skill.name' 
                        @edit="onEdit(`skills[${index}].name`,$event)"
                    >
                    </editable-span>
                    </div>
                    <div class="skill-description">
                        <editable-span 
                            :value="skill.description" 
                            @edit="onEdit(`skills[${index}].description`,$event)"
                        >
                        </editable-span>
                    </div>
                    <span 
                        class="close"
                        v-show="resume.skills.length > 2" 
                        @click="removeSkill(index)"
                    >
                        X
                    </span>
                </li>
                <button class='add' v-if='!preview' @click="addSkill">添加</button>
            </ul>       
        </section>
        <section class="projects">
            <h2>项目经历</h2>
        	<ol>
          		<li  class="projectCard" v-for="project,index in resume.projects">
					<header>
						<div class="start">
							<h3 class="name">
								<editable-span  
                                    :value="project.name" 
                                    @edit="onEdit(`projects[${index}].name`, $event)"
                                >
                                </editable-span>
							</h3>
							<span class="link">
								<editable-span 
                                    :value="project.link" 
                                    @edit="onEdit(`projects[${index}].link`, $event)"
                                >
                                </editable-span>
							</span>
						</div>
						<div class="end">
							<span class="keywords">
								<editable-span :value="project.keywords" @edit="onEdit(`projects[${index}].keywords`, $event)"></editable-span>
							</span>
						</div>
					</header>
					<p class="project-description">
						<editable-span 
                            :value="project.description" 
                            @edit="onEdit(`projects[${index}].description`, $event)"
                        >
                        </editable-span>
					</p>
					<span 
                        class="close" 
                        @click="removeProject(index)" 
                        v-show="resume.projects.length>2"
                    >
                        x
                    </span>
          		</li>
                <button class="add" v-if="!preview" @click="addProject">添加</button>
        	</ol>
        </section>
    </div>
</template>

<script>
import editableSpan from "../components/EditableSpan";
import { bus } from "../bus";
import { saveUser } from "../leanCloud";

export default {
  name: "MyMain",
  created() {
    bus.$on("save", saveUser.bind(null, this.resume));
    bus.$on("preview", this.handlePreview);
  },
  data() {
    return {
      resume: {
        name: "姓名",
        gender: "女",
        jobTitle: "前端工程师",
        phone: "138111111111",
        email: "example@example.com",
        skills: [
          { name: "请填写技能名称", description: "请填写技能描述" },
          { name: "请填写技能名称", description: "请填写技能描述" }
        ],
        projects: [
          {
            name: "请填写项目名称",
            link: "http://...",
            keywords: "请填写关键词",
            description: "请详细描述"
          },
          {
            name: "请填写项目名称",
            link: "http://...",
            keywords: "请填写关键词",
            description: "请详细描述"
          }
        ]
      },
      preview: false
    };
  },
  components: {
    editableSpan
  },
  methods: {
    onEdit(key, value) {
      let keys = key
        .replace(/\[(\d+)\]/g, (match, number) => `.${number}`)
        .split(".");
      let result = this.resume;
      for (let i = 0; i < keys.length; i++) {
        if (i === keys.length - 1) {
          result[keys[i]] = value;
        } else {
          result = result[keys[i]];
        }
      }
    },
    removeSkill(index) {
      this.resume.skills.splice(index, 1);
    },
    addSkill() {
      this.resume.skills.push({
        name: "请填写技能名称",
        description: "请填写技能描述"
      });
    },
    addProject() {
      this.resume.projects.push({
        name: "请填写项目名称",
        link: "http://...",
        keywords: "请填写关键词",
        description: "请详细描述"
      });
    },
    removeProject(index) {
      this.resume.projects.splice(index, 1);
    },
    handlePreview(payload) {
      this.preview = true;
      console.log(1);
      this.resume = { ...payload, ...this.resume };
    }
  }
};
</script>

<style scoped>
.resume {
  width: 800px;
  margin: 0 auto;
  padding: 0 70px;
}

.resume > section {
  margin: 50px 0;
}

.resume > section > h1 {
  text-align: center;
  margin: 20px;
}

.resume > section > h2 {
  text-align: center;
  margin: 20px;
}

.resume .profile {
  text-align: center;
}
.profile-body{
    flex: 1 1 auto;
    padding: 1.25rem;
}
h2 {
  font-size: 2rem;
}

.resume .skills > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.resume .skills > ul > li {
    position: relative;
  width: 48%;
  border: 1px solid #ddd;
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-sizing: border-box;
  border-radius: 0.25rem;
  border-color: #007bff;
}

.skillname {
  background: rgb(227, 242, 253);
  padding: 20px;
  color: #007bff;
  font-weight: 700;
}
.skill-description {
  flex: 1 1 auto;
  padding: 1.25rem;
}

.resume .projects > ol > li {
  position: relative;
  margin: 30px 0;
  border: 1px solid #ddd;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.resume .projects header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  background: rgb(227, 242, 253);
  color: #007bff;
  font-weight: 700;
  padding: 20px;
}

.resume .projects header .name {
  margin-right: 1em;
}

.resume .projects header .start {
  display: flex;
}
.project-description {
  flex: 1 1 auto;
  padding: 1.25rem;
}
.add {
  display: block;
  width: 100%;
  color: #007bff;
  background-color: transparent;
  background-image: none;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  user-select: none;
  user-select: none;
  border: 1px solid #007bff;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  margin: 10px 0;
}
.add:hover {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.close {
  position: absolute;
  top: 1px;
  right: 3px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  color: #ff1e00;
  cursor: pointer;
}
</style>