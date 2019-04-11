<template>
  <div class="login">
    <div>
      <span class="login-button pointer">登录</span>
      <span class="register-button pointer">注册</span>
    </div>
    <template v-show="signUp">

    </template>
    <template v-show="!signUp">
      <el-form :model="signUpForm" ref="signUpForm" status-icon :rules="signUpRule" label-position="left">
        <el-form-item label="账号" prop="username">
          <el-input v-model.number="signUpForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="signUpForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
          <el-input type="password" v-model="signUpForm.password2" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('signUpForm')">提交</el-button>
          <el-button @click="resetForm('signUpForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </template>
  </div>
</template>
<script>
  import {
    post
  } from '../../service/axios'
  export default {
    data() {
      var checkAccount = (rule, value, callback) => {
        if (!value) {
          callback(new Error('账号不能为空'));
        } else {
          const pattern = /^[_A-Za-z0-9]{8,16}$/;
          if (!pattern.test(value)) {
            callback(new Error('账号必须为下划线字母数字的8到16位组合'));
          } else {
            callback();
          }
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          const pattern = /^[_A-Za-z0-9]{8,16}$/;
          if (!pattern.test(value)) {
            callback(new Error('密码必须为下划线字母数字的8到16位组合'))
          } else if (this.signUpForm.password2 !== '') {
            this.$refs.signUpForm.validateField('password2');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value !== this.signUpForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        signUpForm: {
          password: '',
          password2: '',
          username: ''
        },
        signInForm: {
          password: '',
          username: ''
        },
        signUpRule: {
          password: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          password2: [{
            validator: validatePass2,
            trigger: 'blur'
          }],
          username: [{
            validator: checkAccount,
            trigger: 'blur'
          }]
        },
        signInRule: {
          password: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          username: [{
            validator: checkAccount,
            trigger: 'blur'
          }]
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (formName === 'signUpForm') {
              this.signUp()
            } else {
              this.signIn()
            }
          } else {
            this.$message.error('请正确填写信息');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      signUp() {
        post('http://localhost:8888/article/register', {
          password: this.signUpForm.password,
          username: this.signUpForm.username
        }).then(ret => {
            this.$message.success(ret.msg);
        }).catch(err => {
            this.$message.error(err.message);
        })
      },
      signIn() {
        post('http://www.lujiajian.xyz/article/login', this.signInForm)
      }
    }
  }

</script>
<style lang="less" scoped>
  .login {
    position: fixed;
    z-index: 9990;
    top: 50%;
    left: 50%;
    width: 300px;
    padding: 10px 50px;
    transform: translate3d(-50%, -50%, 0);
    background: white;
    border: 3px solid #dfdfdf;
    border-radius: 5px;

    /deep/ .el-form-item__content {
      margin-left: 0 !important;
    }

    .login-button {
      margin-right: 20px;
      font-size: 20px;
    }

    .register-button {
      font-size: 20px;
    }
  }

</style>
