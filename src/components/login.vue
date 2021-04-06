<template>
  <div>
    <el-alert v-if="msg"
              :title="msg"
              type="error"
              effect="dark">
    </el-alert>
    <el-input placeholder="请输入手机号" v-model="tel" clearable></el-input>
    <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
    <el-button @click="login" type="primary" plain>登录</el-button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "login",
    data(){
      return {
        tel:'',
        pwd:'',
        msg:''
      }
    },
    methods:{
      login () {
        axios.post('/api/Login', {tel:this.tel,pwd:this.pwd}).then(response => {
          if (response.data.code == 1){
            this.msg = response.data.msg;
          }else {
            console.log(response.data);
            this.$router.push('/HelloWorld');
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
