<template>
  <div class="city">
    <nav-bar class="nav-bar">
      <span slot="left" @click="toWelcome"><i class="iconfont icon-zuojiantou"></i></span>
      <span slot="center">{{cityName}}</span>
      <span slot="right" style="font-size: 14px" @click="toWelcome">切换城市</span>
    </nav-bar>
    <!--  表单区域  -->
    <form action="" class="submit" v-on:submit.prevent>
      <input type="text" placeholder="输入学校、商务楼、地址" v-model="inputAddress">
      <br>
      <input type="submit" @click="requestData">
    </form>
    <!--  搜索历史区域  -->
    <header v-if="isHeaderTitle">搜索历史</header>
    <ul class="searchContent">
      <li v-for="(item,index) in listItem" :key="index" @click="nextPage(index,item.geohash)">
        <h4>{{item.name}}</h4>
        <p>{{item.address}}</p>
      </li>
    </ul>
    <footer v-if="isHeaderTitle&&listItem.length" @click="clearAll">清空全部</footer>
    <p v-if="placeNone">抱歉，没有相关数据</p>

  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
import {cityInfo,searchAddress} from "@/network/welcome"
import {getScore,setScore,removeScore} from "@/common/ultils";

export default {
  name: "City",
  components: {NavBar},
  data() {
    return {
      currentCityId: '',
      cityName: '',
      //输入的城市地址
      inputAddress: '',
      //根据输入的地址请求来的数据 搜索的城市列表
      listItem: [],
      //本地存储的数据
      placeHistory: [],
      //控制header文字的显示与隐藏
      isHeaderTitle: true,
      //控制清除全消息栏的显示与隐藏
      placeNone: false
    }
  },
  created() {



  },
  mounted() {
    //获取当前城市id
    this.currentCityId = this.$route.params.cityid
    //根据id获取当前城市信息
    cityInfo(this.currentCityId).then(res=>{
      //保存城市名
      this.cityName = res.name
    })
    //界面创建之后应该先进行初始化数据，将本地存储的历史数据显示在列表中
    this.initData()
  },
  computed: {
    isFooterShow() {

    }
  },
  methods: {
    //初始化界面
    initData() {
      console.log(11111)
      //获取搜索记录
      if (getScore('placeHistory')) {
        this.listItem = JSON.parse(getScore('placeHistory'))
      }
      else {
        this.listItem = []
      }
    },
    //切换到欢迎界面
    toWelcome() {
      this.$router.push('/welcome')
    },
    //当输入框输入内容之后点击按钮会根据城市id和输入的地址进行网络请求
    requestData() {

      if (this.inputAddress) {
        searchAddress(this.currentCityId,this.inputAddress).then(res=>{
          this.listItem = res
          this.isHeaderTitle=false
          this.placeNone = this.listItem.length ? false : true
        })
      }

    },
    //点击每一个listitem会进入到下一个界面，在此期间会将点击项的信息存储到本地
    nextPage(index,geohash) {
        //将搜索出来的城市列表用户点击的当前项的相关信息存储到本地
      let choosePlace = this.listItem[index]
      let history = getScore('placeHistory')
      //如果已存在一样的历史记录的话就不用再进行存储，因此在储存时需要判断是否有历史记录
      if (history) {
        let checkRepeat = false
        this.placeHistory = JSON.parse(history)
        this.placeHistory.forEach(item=>{
          if (item.geohash===geohash) {
            checkRepeat = true
          }
        })
        if (!checkRepeat) {
          this.placeHistory.push(choosePlace)
        }
      }else {
        this.placeHistory.push(choosePlace)

      }
      setScore('placeHistory',this.placeHistory)
      this.$router.push('/home')
      console.log(this.placeHistory)
    },
    //清空全部
    clearAll() {
      window.localStorage.removeItem('placeHistory')
      this.initData()
    }
  }
}
</script>

<style scoped>
  .city {
    background-color: var(--color-background);
  }
  .nav-bar {
    background-color: var(--color-tint);
  }
  .submit {
    margin-top: 10px;
    border-top: 1px solid #E4E4E4;

  }
  .submit input:nth-of-type(1) {
    margin: 10px;
    padding: 7px 5px;
    width: calc(100% - 20px);
    border: 1px solid #E4E4E4;
  }
  .submit input:nth-of-type(2) {
    width: calc(100% - 20px);
    position: relative;
    left: 50%;
    transform: translate(-50%);
    background-color: var(--color-tint);
    border: 1px solid var(--color-tint);
    color: var(--color-background);
    padding: 5px 0;
  }
  .searchContent li {
    height: 80px;
    border-top: 1px solid #E4E4E4;
    margin: 0 auto;
    padding: 5px 10px;
  }
  .searchContent li p {
    padding-top: 10px;
    font-size: 14px;
  }
  header,footer {
    margin: 10px 0;
    padding-left: 10px;
  }
  footer {
    border-top: 1px solid #E4E4E4;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
  }
</style>
