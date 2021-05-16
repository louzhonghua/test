<template>
  <div class="login">
    <LoginRegister/>
    <balance/>
    <setting-item/>
  </div>
</template>

<script>
import LoginRegister from "@/views/profile/childComps/LoginRegister";
import Balance from "@/views/profile/childComps/Balance";
import SettingItem from "@/views/profile/childComps/SettingItem";
export default {
  name: "Login",
  components:{
    LoginRegister,
    Balance,
    SettingItem
  }
}
</script>

<style scoped>


</style>
