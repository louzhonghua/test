<template>
  <div class="balance">
    <div class="main">
      <div class="left">
        <div class="number-triple">
          <span class="number">0.00</span>
          元
        </div>
        <div class="account-info">
          <p>我的余额</p>
        </div>
      </div>
      <div class="center">
        <div class="number-triple">
          <span class="number">0</span>
         个
        </div>
        <div class="account-info">
          <p>我的优惠</p>
        </div>
      </div>
      <div class="right">
        <div class="number-triple">
          <span class="number">0</span>
          分
        </div>
        <div class="account-info">
          <p>我的积分</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Balance"
}
</script>

<style scoped>
.main {
  display: flex;
  height: 100px;
  background-color: var(--color-background);
  box-sizing: border-box;
}
.left {
  flex: 1;
}
.center {
  flex: 1;
}
.right {
  flex: 1;
}
.number-triple {
  padding: 20px 20px 10px 20px;
}
.account-info {
  position: absolute;

}
.number {
  font-size: 25px;
  font-weight: bold;
  color: var(--color-tint);
}
p{
  position: relative;
  left: 15px;
}

</style>
