<template>
    <div class="homeShow">
      <home-show-list-item v-for="item in showList" :list-item="item">

      </home-show-list-item>
    </div>
</template>

<script>
import HomeShowListItem from "@/components/content/HomeShow/HomeShowListItem";
export default {
  name: "HomeShowList",
  components: {HomeShowListItem},
  props:{
    showList:{
      type:Array,
      default(){
        return []
      }
    }

  }
}
</script>

<style scoped>
    .homeShow {
      display: flex;
      flex-wrap: wrap;

    }
</style>
