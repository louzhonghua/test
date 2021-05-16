<template>
  <div class="nav-bar-detail">
    <nav-bar class="nav-bar">
      <div slot="left" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="" class="back">
      </div>
      <div slot="center" class="title">
       <div class="titleItem" v-for="(item,index) in details"
       :class="{active:index===currentIndex}"
       @click="detailClick(index)">
         {{item}}
       </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "NavBarDetail",
  components: {NavBar},
  data() {
    return {
      details:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods: {
    detailClick(index) {
      this.currentIndex = index
      this.$emit('navClick',index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 12px;
    color: var(--color-text);
  }
  .titleItem {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .back {
    margin-top: 10px;
    margin-left: 5px;
  }
</style>
