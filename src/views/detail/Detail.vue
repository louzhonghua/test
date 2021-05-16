<template>
  <div class="detail">
    <nav-bar-detail class="nav-bar-detail" @navClick="navClick" ref="nav"></nav-bar-detail>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swipe :top-images="topImages" @detailImgLoad="onRefresh"/>
      <detail-base-info :goods="goods"/>
      <DetailShopInfo :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="goodParams" ref="param"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <home-show-list :show-list="recommends" ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top @click.native="backTop" v-show="backTopIsShow" ref="backtop"></back-top>
<!--    <van-toast/>-->
  </div>
</template>

<script>
import NavBarDetail from "@/views/detail/childComps/NavBarDetail";
import DetailSwipe from "@/views/detail/childComps/DetailSwipe";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import Scroll from "@/components/common/scroll/Scroll";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import HomeShowList from "@/components/content/HomeShow/HomeShowList";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";
// import Toast from '@/vant/toast/toast'

import {detailData,Shop,Goods,GoodsParam,getRecommend} from '@/network/detail'
import {itemListenerMixin,backtopMixin} from '../../common/mixin'
import {debounce} from "@/common/ultils";

import {mapActions} from 'vuex'
import {Toast} from "vant";
// import Toast from "@/components/common/toast/Toast";
export default {
  name: "Detail",
  components: {
    HomeShowList, DetailSwipe, NavBarDetail,DetailShopInfo,
    DetailBaseInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    // Toast
    },
    mixins:[itemListenerMixin,backtopMixin],
  data() {
    return {
      iid:null,
      topImages:[],
      shop:{},
      goods:{},
      detailInfo:{},
      goodParams:{},
      commentInfo:{},
      recommends:[],
      itemOffsetTopY:[],
      getDebounceTopY:null,
      currentIndex:0
    }
  },

  created() {
    this.iid = this.$route.params.id
    detailData(this.iid).then((res)=>{
      this.topImages = res.result.itemInfo.topImages
      console.log(res)
      this.shop = new Shop(res.result.shopInfo)
      console.log(this.shop)
      this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
      this.detailInfo = res.result.detailInfo
      this.goodParams = new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
      if (res.result.rate.cRate!==0) {
        this.commentInfo = res.result.rate.list[0]

      }
      //推荐页数据的展示
      getRecommend().then(res=>{
        this.recommends = res.data.list
      })
      this.getDebounceTopY = debounce(()=>{
        this.itemOffsetTopY=[];
        this.itemOffsetTopY.push(0)
        this.itemOffsetTopY.push(this.$refs.param.$el.offsetTop)
        this.itemOffsetTopY.push(this.$refs.comment.$el.offsetTop)
        this.itemOffsetTopY.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.itemOffsetTopY)
      },100)
    })

  },
  destroyed() {
    this.$bus.$off('itemImgListener')
    console.log('取消detail监听')
  },
  methods: {
    ...mapActions(['addCart']),
    onRefresh() {
      this.$refs.scroll.refresh()
    },
    imageLoad() {
      this.getDebounceTopY()
    },
    navClick(index) {
      console.log(index)
      this.$refs.scroll.scroll.scrollTo(0,-(this.itemOffsetTopY[index]-44),100)
    },
    contentScroll(position) {
      // console.log(position);
      //首先需要获取y值
      const positionY = -position.y;
      this.demo(position)

      //在for循环中判断滚动的区域，从而在相应的区域输出相对应的值
      const length = this.itemOffsetTopY.length;
      for (let i=0;i<length;i++) {
        if ((this.currentIndex!==i)&&(((i<length-1)&&(positionY>=this.itemOffsetTopY[i])&&(positionY<this.itemOffsetTopY[i+1]))||
          (i===length-1)&&(positionY>=this.itemOffsetTopY[i]))){
          //当当前项等于i值的时候，我们可以不进行判断，因为此时已经在对应区域，
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },
    addToCart() {
      // console.log('--------')
      //当我们点击将商品加入到购物车的时候，创建一个新的对象用于保存添加到购物车的商品信息
      const product = {};
      product.images = this.topImages[0];
      product.desc = this.goods.desc;
      product.realPrice = this.goods.realPrice;
      product.title = this.goods.title;
      product.iid = this.iid

      //将商品加入购物车
      // this.$store.commit('addCart',product)
      // this.$store.dispatch('addCart',product).then(res=>{
      //   console.log(res)
      // })
      //对actions里面的属性进行映射
      this.addCart(product).then(res=>{
        // console.log(this.$toast)
        // this.$toast.show(res,1000)
        Toast(res);
        }
      )

      //想要在点击添加购物车之后在购物车界面上将上面的数字加1
    }

  }

}
</script>

<style scoped>
    .detail {
      position: relative;
      z-index: 9;
      background-color: #ffffff;
      height: 100vh;
    }
    .content {
      height: calc(100% - 44px - 58px);
    }
    .nav-bar-detail {
      position: relative;
      z-index: 9;
      background-color: #ffffff;
    }
</style>
