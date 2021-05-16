<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in topImages" class="scale-img">
        <img :src="item" style="width: 100%;" @load="imgLoad">
      </van-swipe-item>
    </van-swipe>
</template>

<script>
import {Swipe,SwipeItem} from '../../../vant/swiper/swiper'
export default {
  name: "DetailSwipe",
  components: {
    Swipe,SwipeItem
  },
  props:{
    topImages:{
      type:Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit('detailImgLoad')
    }
  }
}
</script>

<style scoped>
  .my-swipe {
    height: 300px;
    overflow: hidden;
  }
</style>
