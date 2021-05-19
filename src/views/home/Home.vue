<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">购物中心</div></nav-bar>
    <tab-control :contents="['流行','新款','精选']"  @itemClick="tabClick"
                 ref="tabOffestTop1" class="tab-control" v-show="isFixed"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll"
    :pull-up-load="true"
    @pullUpLoad="loadMore">
      <button @click="toWelcome('welcome')">跳转到欢迎页</button>
      <HomeComponent :banners="banners" @swipeImgLoad="swipeImgLoad"></HomeComponent>
      <recommend-component :recommends="recommends"></recommend-component>
      <FeatureHome></FeatureHome>
      <tab-control :contents="['流行','新款','精选']"  @itemClick="tabClick"
      ref="tabOffestTop"  ></tab-control>
      <home-show-list :show-list="showGoods"></home-show-list>
    </scroll>
    <back-top @click.native="backTop" v-show="backTopIsShow" ref="backtop"></back-top>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import HomeComponent from "@/views/home/childComponents/HomeComponent";
  import recommendComponent from "@/views/home/childComponents/recommendComponent";
  import FeatureHome from "@/views/home/childComponents/FeatureHome";
  import TabControl from "@/views/home/childComponents/TabControl";
  import HomeShowList from "@/components/content/HomeShow/HomeShowList";
  import Scroll from "@/components/common/scroll/Scroll";


  import {homeRequset1,homeData} from "@/network/home";
  import {debounce} from "@/common/ultils";
  import {itemListenerMixin,backtopMixin} from '../../common/mixin'
  import MainTabBar from "@/components/content/mainTabbar/MainTabBar";

  export default {
    name: "Home",
    components: {
      MainTabBar, HomeShowList, NavBar,HomeComponent,recommendComponent,FeatureHome,TabControl,
      Scroll,
      },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType:'new',
        tabOffsetTop:0,
        isFixed:false,
      }
    },
    mixins:[itemListenerMixin,backtopMixin],
    created() {
      this.homeRequset1();
      this.homeData('pop');
      this.homeData('new');
      this.homeData('sell')

    },
    deactivated() {
      this.$bus.$off('itemImgLoad',this.itemImgListener)
    },
    mounted() {
      console.log(this.$refs.tabOffestTop.$el.offsetTop);
    },
    methods:{
      homeRequset1(){
        homeRequset1().then(
          res=>{
            if (res.data){
              this.banners=res.data.banner.list;
              this.recommends=res.data.recommend.list
            }
            }
        )
      },
      homeData(type){
        const page = this.goods[type].page+1;
        homeData(type,page).then(res=>{
          if (res.data) {
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page+=1;
            this.$refs.scroll.finishPullUp()
          }
        })
      },
      loadMore(){
        this.homeData(this.currentType)
      },
      swipeImgLoad(){
        this.tabOffsetTop=this.$refs.tabOffestTop.$el.offsetTop
        console.log(this.tabOffsetTop)
      },
      contentScroll(position){
        this.demo(position);
        this.isFixed = Math.abs(position.y)>this.tabOffsetTop
      },
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType='pop'
                break
          case 1:
            this.currentType='new'
                break
          case 2:
            this.currentType='sell'
        }
        this.$refs.tabOffestTop.currentIndex=index;
        this.$refs.tabOffestTop1.currentIndex=index;
      },
      //跳转到欢迎页
      toWelcome(testData) {
        this.$router.push({path: '/welcome', query: {testData}})
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 200px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }

</style>
