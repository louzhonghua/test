<template>
      <div  class="recommend">
        <div v-for="item in recommends" class="recommendItem">
          <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
          </a>
        </div>
      </div>
</template>

<script>
export default {
  name: "recommendComponent",
  props:{
    recommends:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    font-size: 12px;
    border-bottom: 8px solid #eee;
  }
  .recommendItem {
    flex: 1;
    text-align: center;
    padding-bottom: 10px;
  }
  .recommendItem img {
    width: 90px;
    height: 90px;
    margin-bottom: 10px;
  }
</style>
