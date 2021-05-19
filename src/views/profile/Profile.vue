<template>
  <div class="profile">
    <nav-bar class="profile-nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <login class="login"/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Login from "@/views/profile/childComps/Login";
import MainTabBar from "@/components/content/mainTabbar/MainTabBar";
  export default {
    name: "Profile",
    components: {
      MainTabBar,
      NavBar,
      Login,
    }
  }
</script>

<style scoped>
.profile{
  height: 100vh;
}
.profile-nav-bar {
   background-color: var(--color-tint);
}
.login {
 position: relative;

}
</style>
