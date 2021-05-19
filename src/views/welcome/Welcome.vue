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
        <router-link :to="'/city/'+cityId">
          <div>
            <span style="color: var(--color-high-text);font-size: 20px">{{localAddress}}</span><span>
          <i class="iconfont icon-youjiantou-copy"></i></span>
          </div>
        </router-link>
      </div>
      <section id="hotCity">
        <div>热门城市</div>
        <div class="hotCity-contain">
          <ul>
            <router-link  v-for="item in hotCity" :key="item.id" :to="'/city/'+item.id"
                          custom v-slot="{ navigate }">
              <li @click="navigate" @keypress.enter="navigate" role="link">{{item.name}}</li>
            </router-link>
          </ul>
        </div>
      </section>
      <section class="groupCity">
        <ul>
          <li v-for="(value,key,index) in sortGroupCity" class="eachUpperWord">
            <h5>{{key}}<span v-if="key==='A'">(按字母排序)</span></h5>
            <ul class="eachGroup">
              <router-link  v-for="item in value" :key="item.id" :to="'/city/'+item.id"
                            custom v-slot="{ navigate }">
                <li @click="navigate" @keypress.enter="navigate" role="link">{{item.name}}</li>
              </router-link>
            </ul>
          </li>
        </ul>
      </section>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {cityGuess} from "@/network/welcome";
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Welcome",
  components: {Scroll, NavBar},
  data() {
    return {
      localAddress:'',
      hotCity:[],
      groupCity:[],
      //当前城市id
      cityId: null
    }
  },
  created() {
    cityGuess('guess').then(res=>{
      this.cityId = res.id
      this.localAddress = res.name
    })
    cityGuess('hot').then(res=>{
      this.hotCity = res
    })
    cityGuess('group').then(res=>{
      console.log(res)
      //对数组进行冻结
      this.groupCity = Object.freeze(Object.assign({},res))
    })
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
  },
  computed: {
    sortGroupCity() {
      let sortObj = {}
      for (let i =65;i<=90;i++) {
          if (this.groupCity[String.fromCharCode(i)]) {
            sortObj[String.fromCharCode(i)] = this.groupCity[String.fromCharCode(i)]
          }
      }
      return sortObj
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
  #hotCity {
    border-top: 1px solid #E4E4E4;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  #hotCity div:nth-of-type(1) {
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #E4E4E4
  }
  .hotCity-contain ul{
    display: flex;
    flex-wrap: wrap;
  }
  .hotCity-contain ul li {
    float: left;
    font-size: 16px;
    text-align: center;
    width: 25%;
    border-bottom: 1px solid #E4E4E4;
    border-right: 1px solid #E4E4E4;
    height: 40px;
    line-height: 40px;
    color: var(--color-high-text);
  }
  .hotCity-contain ul li:nth-of-type(4n) {
    border-right: none;
  }
  .groupCity .eachUpperWord{
    margin-bottom: 10px;
  }
  .eachGroup {
    display: flex;
    flex-wrap: wrap;
  }
  .eachGroup li {
    float: left;
    text-align: center;
    width: 25%;
    border-bottom: 1px solid #E4E4E4;
    border-right: 1px solid #E4E4E4;
    height: 40px;
    line-height: 40px;
    color: var(--color-text);
    overflow: hidden;
  }
  .eachGroup li:nth-of-type(-n+4) {
    border-top: 1px solid #E4E4E4;
  }
  .eachGroup li:nth-of-type(4n) {
    border-right: none;
  }
  .groupCity ul li h5 {
    margin-bottom: 10px;
  }
  .welcome {
    background-color: var(--color-background);
    z-index: 999;
  }
</style>
