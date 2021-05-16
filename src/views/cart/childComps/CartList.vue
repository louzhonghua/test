<template>
  <div class="cart-list">
   <scroll class="content">
     <cart-list-item v-for="(item,index) in cartList"
                     :product="item"
                     :key="index"></cart-list-item>
   </scroll>
  </div>
</template>

<script>
//在cartList中显示滚动区域以及cartListItem，将之前的getters里面的属性传入到cartListItem中
//content的内容设置为100%-44-49
import cartListItem from "@/views/cart/childComps/CartListItem";
import Scroll from "@/components/common/scroll/Scroll";
import {mapGetters} from 'vuex'
export default {
  name: "CartList",
  components: {
    Scroll,
    cartListItem
  },
  computed: {
    ...mapGetters({
      cartList:'cartList'
    })
  }

}
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 44px - 49px - 50px - 36px);
  }
  .content {
    height: 100%;
    overflow: hidden;
  }

</style>
