<template>
  <div class="profile">
    <nav-bar class="profile-nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <login class="login"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Login from "@/views/profile/childComps/Login";
  export default {
    name: "Profile",
    components: {
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
