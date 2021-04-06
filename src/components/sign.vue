<template>
  <div>
    <el-alert v-if="message" :title="message" type="success" effect="dark"></el-alert>
    <el-alert v-if="msg" :title="msg" type="error" effect="dark"></el-alert>
    <el-input placeholder="请输入手机号" v-model="tel" clearable></el-input>
    <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
    <el-input placeholder="请再次输入密码" v-model="pwd_confirmation" show-password></el-input>
    <el-button @click="sign">注册</el-button>
  </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: "sign",
      data(){
        return {
          tel:'',
          pwd:'',
          pwd_confirmation:'',
          msg:'',
          message:''
        }
      },
      methods:{
          sign () {
            axios.post('/api/Sign', {tel:this.tel,pwd:this.pwd,pwd_confirmation:this.pwd_confirmation}).then(response => {
              if (response.data.code == 1){
                this.msg = response.data.msg;
              }else {
                this.message = response.data.message;
                setTimeout(() => {
                  this.$router.push('/login');
                },2000)
              }
            })
          }
      }
    }
</script>

<style scoped>
  div{
    margin: 0 auto;
    width: 500px;
  }
</style>
