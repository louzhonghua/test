<template>
  <div class="listItem" @click="itemClick" v-if="Object.keys(listItem).length!==0">
    <img v-lazy="showImage" alt="" class="listImage" @load="imgLoad">
    <div class="item-info">
      <p>{{listItem.title}}</p>
      <span>{{listItem.price}}</span>
      <span>{{listItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeShowListItem",
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
      return  this.listItem.image || this.listItem.show.img
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
  .item-info {

  }
</style>
