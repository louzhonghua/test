<template>
    <div class="comment" v-if="Object.keys(commentInfo).length!==0">
        <div class="bannerComment">
          <span class="spanLeft">用户评价</span>
          <span class="spanRight">更多</span>
        </div>
      <p>{{commentInfo.content}}</p>
      <div class="userInfo">
        <img :src="commentInfo.user.avatar" alt="" class="userImg-user">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="detailComment">
        <span>{{commentInfo.created | formatTime}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="commentImg">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" class="userImg">
      </div>
    </div>
</template>

<script>
import {TimeFormat} from '../../../common/ultils'
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo : {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters:{
    formatTime(value) {
      const date = new Date(value)
      return TimeFormat(value,'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
  .comment {
    background-color: #ffffff;
  }
  .bannerComment {
    border-bottom: 1px solid black;
  }
  .spanLeft {
    padding-left: 10px;
  }
  .userImg-user {
    width: 20px;
    height: 20px;
  }
  .spanRight {
    padding-left: 70%;
  }
  .commentImg {
    display: flex;
  }
  .userImg {
    flex: 1;
    height: 100px;
  }
</style>
