import {debounce} from "@/common/ultils";
import BackTop from "@/components/content/backTop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener:null
    }
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh,10)
    this.itemImgListener = ()=>{
      newRefresh()
    }
    this.$bus.$on('itemImgLoad',this.itemImgListener);
  }
}
//创建一个混入对象，用于backtop的混入
export const backtopMixin = {
  data() {
    return {
      backTopIsShow:false,
    }
  },
  components:{
    BackTop
  },
  methods: {
    backTop(){
      this.$refs.scroll.scrollToTop(0,0)
    },
    demo(position) {
      this.backTopIsShow = Math.abs(position.y)>1000
    },
  }
}
