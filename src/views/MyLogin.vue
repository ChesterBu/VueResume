<template>
    <el-dialog :visible.sync="dialogVisible" width="35%">
        <el-tabs v-model="activeName" type="card" style="margin-top: -40px">
            <el-tab-pane label="登录" name="first">
                <el-form :model="signIn" :label-position="labelPosition" >
                    <el-form-item label="email" :label-width="formLabelWidth">
                        <el-input v-model="signIn.email" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="password" :label-width="formLabelWidth">
                        <el-input v-model="signIn.password" auto-complete="off"></el-input>
                    </el-form-item>
                    <div class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary"   @click.prevent="onSignIn">登录</el-button>
                    </div>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="注册" name="second">
                <el-form :model="signUp" :label-position="labelPosition" >
                    <el-form-item label="email" :label-width="formLabelWidth">
                        <el-input v-model="signUp.email" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="password" :label-width="formLabelWidth">
                        <el-input v-model="signUp.password" auto-complete="off"></el-input>
                    </el-form-item>
                    <div class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="onSignUp">注册</el-button>
                    </div>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </el-dialog>
</template>

<script>
import {signUp,signIn} from '../leanCloud';
import { bus } from "../bus";
export default {
  name: "MyDialog",
  created() {
    bus.$on("sign", this.open);
  },
  data() {
    return {
      labelPosition: "left",
      activeName: "first",
      dialogVisible: false,
      formLabelWidth: "100px",
      signIn: {
        email: "",
        password: ""
      },
      signUp: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    open() {
      this.dialogVisible = true;
    },
    onSignIn() {
        signIn(this.signIn,()=>{
            bus.$emit('signInSuccess')
            this.dialogVisible = false
        },()=>{
            
        })
    },
    onSignUp() {
        signUp(this.signUp,()=>{
            this.dialogVisible = false
        },()=>{

        })
    }
  }
};
</script>

<style scoped>
.dialog-footer {
  text-align: right;
}
</style>