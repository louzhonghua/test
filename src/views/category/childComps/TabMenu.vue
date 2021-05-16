<template>
  <div class="tab-menu">
    <scroll class="menu-scroll">
      <div class="menu-list">
        <div class="menu-list-item" v-for="(item,index) in categories"
             :key="index"
              @click="itemClick(index)"
              :class="{active:index===currentIndex}">
          {{item.title}}
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "TabMenu",
  props:{
    categories:Array
  },
  components:{
    Scroll
  },
  data() {
    return {
      currentIndex:null
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index;
      this.$emit('selectItem',index)
    }
  }
}
</script>

<style scoped>
.menu-scroll {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
  overflow: hidden;
}
.menu-list-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 12px;
}
.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>
