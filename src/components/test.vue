<template>
  <div>
    this is test!<br>
    <input type="name" v-model="name">
    <p>Hello {{name}}</p>
  </div>

</template>

<script>
    export default {
        name: "test",
      data () {
        return {
          name:'world'
        }
      }
    }
</script>

<style scoped>

</style>
