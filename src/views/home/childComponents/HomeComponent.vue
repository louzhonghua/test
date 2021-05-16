<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
    <van-swipe-item v-for="item in banners" >
      <a :href="item.link" >
        <img :src="item.image" style="width: 100%;height: 200px" @load="swipeImgLoad">
      </a>
    </van-swipe-item>

  </van-swipe>
</template>

<script>
import {Swipe,SwipeItem} from '../../../vant/swiper/swiper'
export default {
  name: "HomeComponent",
  components:{
    Swipe,SwipeItem
  },
  data() {
    return {
      imgLoad:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    swipeImgLoad(){
      if (!this.imgLoad){
        this.$emit('swipeImgLoad')
        this.imgLoad=true;
      }
    }
  }
}
</script>

<style scoped>

</style>
