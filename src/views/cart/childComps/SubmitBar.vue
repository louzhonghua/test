<template>
  <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit" class="submit-bar">
    <van-checkbox v-model="isSelectAll" @click="checkBtnClick">全选</van-checkbox>
    <template #tip>
      你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
    </template>
  </van-submit-bar>
</template>

<script>
import {SubmitBar} from '@/vant/submitbar/submitbar'
import {Checkbox} from '@/vant/checkbox/checkbox'
import {mapGetters} from 'vuex'
import CheckButton from "@/views/cart/childComps/CheckButton";
import {Toast} from "vant";
export default {
  name: "SubmitBar",
  components: {
    SubmitBar,
    Checkbox,
    CheckButton
  },
  // data() {
  //   return {
  //     isSelectAll:true
  //   }
  // },
  methods: {
    checkBtnClick: function () {
      // 1.判断是否有未选中的按钮
      let isSelectAll = this.$store.getters.cartList.find(item => !item.checked);

      // 2.有未选中的内容, 则全部选中
      if (isSelectAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = true;
        });
      } else {
        this.$store.state.cartList.forEach(item => {
          item.checked = false;
        });
      }
    },
    onSubmit() {
        let res = '提交订单成功'
      Toast(res)
    },
    onClickEditAddress() {

    },
    //点击按钮如果全选CheckBox的data为true，那么item里面的每一个data都为true
  },
  computed: {
    ...mapGetters({
      cartList:'cartList'
    }),
    totalPrice() {
      //返回当前状态为选中的商品
      return this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue+(item.realPrice*100) * item.count
      },0)
    },
    isSelectAll:  {
     get() {
        return !(this.cartList.filter(item=>!item.checked).length)
      },
      set(value) {
       let isSelectAll = !value
      }
    }

    },
}
</script>

<style scoped>
  .submit-bar {
    background-color: #f6f4ec;
  }
</style>
