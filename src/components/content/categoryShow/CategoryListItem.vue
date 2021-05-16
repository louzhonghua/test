<template>
  <div class="listItem"  v-if="Object.keys(listItem).length!==0" @click="itemClick">
    <img v-lazy="showImage" alt="" class="listImage" @load="imgLoad">
    <div class="item-info">
      <p>{{listItem.title}}</p>
      <span>{{listItem.price}}</span>
      <span>{{listItem.itemMarks}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryListItem",
  props:{
    listItem:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return  this.listItem.img
    }
  },
  methods:{
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
    },
    itemClick() {
      this.$router.push('/detail/'+this.listItem.iid)
    }
  }
}
</script>

<style scoped>
.listItem {
  width: 46%;
  font-size: 12px;
  margin-left: 10px;

}
.listImage {
  width: 100%;
}
</style>
