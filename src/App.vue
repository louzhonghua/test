<template>
  <div id="app">
    <div id="nav">
      <keep-alive exclude="Detail">
        <router-view/>
      </keep-alive>

    </div>

  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabbar/MainTabBar";
export default {
  components: {MainTabBar}
}
</script>

<style scoped>
@import "assets/css/base.css";
</style>
