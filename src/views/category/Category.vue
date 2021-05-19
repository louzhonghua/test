<template>
  <div class="category">
    <nav-bar class="category-navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"/>
      <scroll id="tab-content" ref="scroll">
        <tab-content-category :subcategories="subcategories" @cateImgLoad="cateImgLoad"></tab-content-category>
        <tab-control :contents="['综合','新品','销量']" @itemClick="cateItemClick"></tab-control>
        <category-list :show-list="showGoods" ></category-list>
      </scroll>
    </div>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import NavBar from "@/components/common/navbar/NavBar";
import TabMenu from "@/views/category/childComps/TabMenu";
import TabContentCategory from "@/views/category/childComps/TabContentCategory";
import TabControl from "@/views/home/childComponents/TabControl";
import CategoryList from "@/components/content/categoryShow/CategoryList";

import {getCategory,getSubCategory,getCategoryDetail} from "@/network/category";
import MainTabBar from "@/components/content/mainTabbar/MainTabBar";

export default {
    name: "Category",
    components:{
      MainTabBar,
      Scroll,
      NavBar,
      TabMenu,
      TabContentCategory,
      TabControl,
      CategoryList
    },
    data() {
      return {
        categories:[],
        categoryData:{},
        currentIndex:-1,
        subcategories:{},
        categoryDetail:{
          'pop':{list:[]},
          'new':{list:[]},
          'sell':{list:[]}
        },
        currentType:'pop'
      }
    },
    created() {
      this._getCategory()
    },
  mounted() {
    this.$bus.$on('itemImgLoad',()=>{
      this.$refs.scroll.refresh()
    })
  },
  computed:{
   showCategories() {
     if (this.currentIndex!==-1) return {}
     return this.subcategories
   },
   showGoods() {
     return this.categoryDetail[this.currentType].list[this.currentIndex]
   }
 },
  methods:{
    cateImgLoad() {
     this.$refs.scroll.refresh()

    },
    _getCategory() {
      getCategory().then(res=>{
        this.categories = res.data.category.list;
        //初始化每个类别的子数据

        this._getSubCategory(0);
      })

    },
    _getSubCategory(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubCategory(mailKey).then(res=>{
        this.subcategories = res.data;
        this._getCategoryDetail('pop');
        this._getCategoryDetail('new');
        this._getCategoryDetail('sell');
      })
    },
    _getCategoryDetail(type) {
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey,type).then(res=>{
        this.categoryDetail[type].list.push(res)

      })
    },
    selectItem(index) {
      this._getSubCategory(index);
    },
    cateItemClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    }
  }
}

</script>

<style scoped>
.category {
  height: 100vh;
}
.category-navbar {
  background-color: var(--color-tint);

}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;

  display: flex;
}
#tab-content {
  height: 100%;
  flex: 1;
  overflow: hidden;
}
</style>
