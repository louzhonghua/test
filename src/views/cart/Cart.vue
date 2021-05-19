<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list/>
    <submit-bar class="submit-bar"/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
//在购物车中想要获取添加到购物车的商品种类的数量，使用getters可以获得state.cartList.length，通过vuex的map语法可以
//直接获得该属性
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import CartList from "@/views/cart/childComps/CartList";
import SubmitBar from "@/views/cart/childComps/SubmitBar";

import {mapGetters} from 'vuex'
import MainTabBar from "@/components/content/mainTabbar/MainTabBar";

  export default {
    name: "Cart",
    components:{
      MainTabBar,
      CartList,
      NavBar,
      Scroll,
      SubmitBar
    },
    computed: {
      ...mapGetters({
        length:'cartLength',
        cartList:'cartList'
      })
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #ffffff;
    font-weight: bold;
  }
  .cart {
    height: 100vh;
  }
  .submit-bar {
    position: relative;
  }

</style>
