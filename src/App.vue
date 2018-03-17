<!--suppress ALL -->
<template>
    <div id="app">
        <my-aside></my-aside>
        <my-main></my-main>
        <my-dialog></my-dialog>
    </div>
</template>
<script>
    import MyAside from "./views/MyAside";
    import MyMain from "./views/MyMain.vue";
    import MyDialog from "./views/MyDialog"

    export default {
        name: "app",
        components: {
            MyAside,
            MyMain,
            MyDialog
        }

    };
</script>
<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul,
    ol {
        list-style: none;
    }

    body {
        font-size: 18px;
    }

    button {
        font: inherit;
    }
    .el-dialog__headerbtn .el-dialog__close {
        color: #909399;
        position: relative;
        z-index: 10;
    }
</style>
