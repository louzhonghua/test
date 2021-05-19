<template>
  <div class="test">
    <ul>
        <li v-for="(item,index) in tabs" @click="currentIndex=index">{{item}}</li>
        <button @click="test">测试</button>
   </ul>
    <div v-show="currentIndex == 1">aaaa</div>
    <div v-show="currentIndex == 2">bbbb</div>
    <div v-show="currentIndex == 3">cccc</div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      tabs:{
        1:'aaaa',
        2:'bbbb',
        3:'cccc'
      },
      currentIndex : 1
    }
  },
  methods: {
    test() {
      console.log(this.$parent)
    }
  }
}
</script>

<style scoped>

</style>
