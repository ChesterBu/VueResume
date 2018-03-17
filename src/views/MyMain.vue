<!--suppress ALL -->
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
                <li>
                    <span class="name"> 静态页面制作 </span>
                    <div class="description">完美实现设计稿</div>
                </li>
                <li>
                    <span class="name"> 静态页面制作 </span>
                    <div class="description">完美实现设计稿</div>
                </li>
                <li>
                    <span class="name"> 静态页面制作 </span>
                    <div class="description">完美实现设计稿</div>
                </li>
                <li>
                    <span class="name"> 静态页面制作 </span>
                    <div class="description">完美实现设计稿</div>
                </li>
            </ul>
        </section>
        <section class="projects">
            <h2>项目经历</h2>
            <ol>
                <li>
                    <header>
                        <div class="start">
                            <h3 class="name">我的简历</h3>
                            <span class="link">http://xxxx/xxx</span>
                        </div>
                        <div class="end">
                            <span class="keywords">CSS3、jQuery、响应式</span>
                        </div>
                    </header>
                    <p class="description">我是怎么做这个项目的我是怎么做这个项目的我是怎么做这个项目的我是怎么做这个项目的我是怎么做这个项目的</p>
                </li>
                <li>
                    <header>
                        <div class="start">
                            <h3 class="name">我的简历</h3>
                            <span class="link">http://xxxx/xxx</span>
                        </div>
                        <div class="end">
                            <span class="keywords">CSS3、jQuery、响应式</span>
                        </div>
                    </header>
                    <p class="description">我是怎么做这个项目的我是怎么做这个项目的我是怎么做这个项目的我是怎么做这个项目的我是怎么做这个项目的</p>
                </li>
                <li>
                    <header>
                        <div class="start">
                            <h3 class="name">我的简历</h3>
                            <span class="link">http://xxxx/xxx</span>
                        </div>
                        <div class="end">
                            <span class="keywords">CSS3、jQuery、响应式</span>
                        </div>
                    </header>
                    <p class="description">我是怎么做这个项目的我是怎么做这个项目的我是怎么做这个项目的我是怎么做这个项目的我是怎么做这个项目的</p>
                </li>
                <li>
                    <header>
                        <div class="start">
                            <h3 class="name">我的简历</h3>
                            <span class="link">http://xxxx/xxx</span>
                        </div>
                        <div class="end">
                            <span class="keywords">CSS3、jQuery、响应式</span>
                        </div>
                    </header>
                    <p class="description">我是怎么做这个项目的我是怎么做这个项目的我是怎么做这个项目的我是怎么做这个项目的我是怎么做这个项目的</p>
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
                    email: "example@example.com"
                },
            };
        },
        components: {
            editableSpan
        },
        methods: {
            onEdit(key, value) {
                this.resume[key] = value;
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