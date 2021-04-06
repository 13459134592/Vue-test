<template>
  <div>
    this is HelloWorld!
  </div>
</template>

<script>
  import Test from './test'
export default {
  components : {Test},
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
