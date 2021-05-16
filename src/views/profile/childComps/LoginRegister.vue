<template>
  <div class="login-register">
    <div class="left">
      <img src="@/assets/img/profile/avatar.svg" alt="" class="headImg">
    </div>
    <div class="center">
      <p class="textPos">登陆/注册</p>
      <div>
        <img src="@/assets/img/profile/phone.svg" alt="" class="phoneImg">
        <p class="pos">暂无绑定手机号</p>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/img/common/arrow-left.svg" alt="" class="right-arrow">
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginRegister"
}
</script>

<style scoped>
.login-register {
  display: flex;
  height: 85px;
  background-color: var(--color-tint);
  color: #ffffff;
}
.left {
  width: 30%;
}
.center {
  width: 50%;
  position: relative;
  left: -10px;
}
.right {
  width: 20%;
}
.headImg {
  width: 70px;
  height: 70px;
  padding-left: 10px;
  padding-top: 8px;
}
.phoneImg {
  width: 20px;
  height: 30px;
}
.pos {
  position: relative;
  left: 19px;
  top: -27px;
}
.textPos {
  padding-top: 18px;
  padding-left: 6px;
  margin-bottom: 5px;
}
.right-arrow {
  width: 20px;
  height: 20px;
  position: relative;
  left: 25px;
  top: 30px;
}
</style>
