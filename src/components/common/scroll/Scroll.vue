<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
name: "Scroll",
  props:{
  probeType:{
    type:Number,
    default:0
  },
    pullUpLoad:{
    type:Boolean,
      default: true

    }
  },
  data(){
  return {
    scroll:null,

  }
  },
  mounted() {
  let wrapper = this.$refs.wrapper;
  this.scroll = new BScroll(wrapper,{
    pullUpLoad:this.pullUpLoad,
    probeType:this.probeType,
    click:true
  });
  this.scroll.on('scroll',(position)=>{
    this.$emit('scroll',position)
  })
  this.scroll.on('pullingUp',()=>{
    this.$emit('pullUpLoad')
  })
  },
  methods:{
  scrollToTop(x,y,time=300){
    this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
    this.scroll.finishPullUp();
    },
    refresh() {
    this.scroll.refresh();
    }
  }
}
</script>

<style scoped>

</style>
