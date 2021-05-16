<template>
  <div class="welcome">
    <nav-bar class="navbar">
      <span slot="left" class="left" @click="reload">
        <i class="iconfont icon-shuaxin"></i>
      </span>
      <span slot="right">
        <i class="iconfont icon-huabanfuben"
            @click="toProfile"></i>
      </span>
    </nav-bar>
    <div class="currentCity">
      <div class="wordDesc">
        <span>当前定位城市:</span><span>定位不准时，请在城市列表选择</span>
      </div>
      <div>
        <span>{{}}</span><span><i class="iconfont icon-youjiantou-copy"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "Welcome",
  components: {NavBar},
  data() {
    return {

    }
  },
  created() {

  },
  methods: {
    //刷新地址
    reload() {
      //window.location返回一个包含有关文档当前位置的信息
      //下面命令表示强制从服务器加载界面
      window.location.reload()
    },
    //去个人信息界面
    toProfile() {
      this.$router.push('/profile')
    }
  }
}
</script>

<style scoped>
  .left {
    margin-left: 10px;
  }
  .navbar {
    background-color: var(--color-tint);
  }
  .refreshIcon {
    font-size: 24px;
  }
  .currentCity div:nth-of-type(n) {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #E4E4E4;
    padding: 0 10px;
  }
  .wordDesc span:nth-of-type(2) {
    color: #9F9F9F;
  }
</style>
