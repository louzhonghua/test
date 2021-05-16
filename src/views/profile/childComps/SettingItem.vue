<template>
  <div class="item">
    <div class="item"><img src="@/assets/img/profile/message.svg" alt="">我的消息</div>
    <div class="item"><img src="@/assets/img/profile/pointer.svg" alt="">积分商城</div>
    <div class="item"><img src="@/assets/img/profile/vip.svg" alt="">会员卡</div>
    <div class="item"><img src="@/assets/img/profile/shopping.svg" alt="">我的购物车</div>
    <div class="item"><img src="@/assets/img/profile/cart.svg" alt="">下载购物车App</div>
  </div>
</template>

<script>
export default {
name: "SettingItem"
}
</script>

<style scoped>
img {
  margin-left: 10px;
  width: 20px;
  height: 20px;
  position: relative;
  left: 2px;
  top: 4px;
  margin-right: 20px;
}
.item {
  padding-top: 10px;
  width: 100%;
  height: 50px;
  background-color: var(--color-background);
  border-bottom: 1px solid rgba(100,100,100,.1);
}

</style>
