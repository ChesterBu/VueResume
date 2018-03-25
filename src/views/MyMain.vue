<template>
    <div class="resume">
        <section class="profile">
            <h1>
                <editable-span :value="resume.name" @edit="onEdit('name', $event)"></editable-span>
            </h1>
            <p>应聘职位：
                <editable-span :value="resume.jobTitle" @edit="onEdit('jobTitle', $event)"></editable-span>
            </p>
            <p class="profile">
                <editable-span :value="resume.birthday" @edit="onEdit('birthday', $event)"></editable-span>
                |
                <editable-span :value="resume.gender" @edit="onEdit('gender', $event)"></editable-span>
                |
                <editable-span :value="resume.email" @edit="onEdit('email', $event)"></editable-span>
                |
                <editable-span :value="resume.phone" @edit="onEdit('phone', $event)"></editable-span>
            </p>
        </section>
        <section class="skills">
            <h2>技能</h2>
            <ul>
                <li v-for="skill,index in resume.skills">
                    <editable-span :value='skill.name' @edit="onEdit(`skills[${index}].name`,$event)"></editable-span>
                    <div class="description">
                        <editable-span :value="skill.description" @edit="onEdit(`skills[${index}].description`,$event)">
                        </editable-span>
                    </div>
                    <span v-show="resume.skills.length > 2" @click="removeSkill(index)">X</span>
                </li>
                <li @click="addSkill">添加</li>
            </ul>
        </section>
        <section class="projects">
            <h2>项目经历</h2>
        	<ol>
          		<li v-for="project,index in resume.projects">
					<header>
						<div class="start">
							<h3 class="name">
								<editable-span  :value="project.name" @edit="onEdit(`projects[${index}].name`, $event)"></editable-span>
							</h3>
							<span class="link">
								<editable-span :value="project.link" @edit="onEdit(`projects[${index}].link`, $event)"></editable-span>
							</span>
						</div>
						<div class="end">
							<span class="keywords">
								<editable-span :value="project.keywords" @edit="onEdit(`projects[${index}].keywords`, $event)"></editable-span>
							</span>
						</div>
					</header>
					<p class="description">
						<editable-span :value="project.description" @edit="onEdit(`projects[${index}].description`, $event)"></editable-span>
					</p>
					<span class="remove" @click="removeProject(index)" v-show="resume.projects.length>2">x</span>
          		</li>
          		<li>
            		<span @click="addProject">添加</span>
          		</li>
        	</ol>
        </section>
    </div>
</template>

<script>
    import editableSpan from "../components/EditableSpan";
    import {bus} from '../bus';
    import {saveUser} from '../leanCloud';

    export default {
        name: "MyMain",
        created() {
            bus.$on('save', saveUser.bind(null, this.resume))
        },
        data() {
            return {
                resume: {
                    name: "姓名",
                    gender: "女",
                    birthday: "1990年1月",
                    jobTitle: "前端工程师",
                    phone: "138111111111",
                    email: "example@example.com",
                    skills:[{name:'请填写技能名称',description:'请填写技能描述'},{name:'请填写技能名称',description:'请填写技能描述'},],
					projects:[{name: '请填写项目名称', link: 'http://...', keywords: '请填写关键词', description: '请详细描述'},{name: '请填写项目名称', link: 'http://...', keywords: '请填写关键词', description: '请详细描述'}]
                },
            };
        },
        components: {
            editableSpan
        },
        methods: {
            onEdit(key, value) {
                let keys = key.replace(/\[(\d+)\]/g,(match,number)=>`.${number}`).split('.')
                let result = this.resume
                for (let i = 0; i < keys.length; i++) {
                    if (i === keys.length - 1) {
                        result[keys[i]] = value
                    } else {
                        result = result[keys[i]]
                    }
                }
            },
            removeSkill(index){
                this.resume.skills.splice(index,1)
            },
            addSkill(){
                this.resume.skills.push({name:'请填写技能名称',description:'请填写技能描述'})
            },
			addProject () {
      			this.resume.projects.push(
        			{name: '请填写项目名称', link: 'http://...', keywords: '请填写关键词', description: '请详细描述'},
      			)
    		},
    		removeProject (index) {
      			this.resume.projects.splice(index, 1)
    		},
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

.resume .skills > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.resume .skills > ul > li {
  width: 48%;
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 10px;
}

.resume .projects > ol > li {
  margin: 30px 0;
  border: 1px solid #ddd;
  padding: 10px;
}

.resume .projects header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.resume .projects header .name {
  margin-right: 1em;
}

.resume .projects header .start {
  display: flex;
}
</style>