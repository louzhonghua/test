<template>
  <div class="tab-content">
    <gridview :cols="3" :line-space="15" :v-margin="20" v-if="subcategories.list">
      <div class="item" v-for="(item,index) in subcategories.list" :key="index">
        <a :href="item.link">
          <img :src="item.image" class="item-img" @load="cateImgLoad">
          <div>{{item.title}}</div>
        </a>
      </div>
    </gridview>
  </div>
</template>

<script>
import Gridview from "@/components/common/gridview/Gridview";
export default {
  name: "TabContentCategory",
  components:{
    Gridview
  },
  props:{
   subcategories:{
     type:Object,
     default() {
       return {}
     }
   }
  },
  methods:{
    cateImgLoad() {
      this.$emit('cateImgLoad')
    }
  }
}
</script>

<style scoped>
.item {
  text-align: center;
  font-size: 12px;
}
.item-img {
  width: 80%;
}
</style>
