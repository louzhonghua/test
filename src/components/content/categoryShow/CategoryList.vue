<template>
  <div class="category-show">
    <category-list-item v-for="item in showList" :list-item="item"></category-list-item>
  </div>
</template>

<script>
import CategoryListItem from "@/components/content/categoryShow/CategoryListItem";
export default {
  name: "CategoryList",
  components:{
    CategoryListItem
  },
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
.category-show {
  display: flex;
  flex-wrap: wrap;
}
</style>
