<template>
  <div id="app">
    <el-row>
    <el-col :span="1"><Logo></Logo></el-col>
    <el-col :span="23"><Nav></Nav></el-col>
    </el-row>
    <router-view/>
  </div>
</template>

<script>
  import Nav from './components/common/nav'
  import Logo from './components/common/logo'
export default {
    components:{Nav,Logo},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
