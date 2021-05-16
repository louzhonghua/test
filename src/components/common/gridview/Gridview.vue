<template>
  <div class="grid-view" ref="gridview">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Gridview",
  props:{
    cols:{
      type:Number,
      default:2
    },
    hMargin:{
      type:Number,
      default: 8
    },
    vMargin: {
      type:Number,
      default:8
    },
    itemSpace: {
      type:Number,
      default:8
    },
    lineSpace: {
      type:Number,
      default:8
    }
  },
  mounted() {
    setTimeout(()=>{
      this._autoLayout()
    },200)
  },
  updated() {
    this._autoLayout()
  },
  methods: {
    _autoLayout() {
      //获取GridView所在的div元素
      let gridEl = this.$refs.gridview;
      //获取该div中的所有子元素
      let gridChildren = gridEl.children;
      //设置gridEl的内边距
      gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`
      //计算出gridEl的每个item的宽度
      let itemWidth = (gridEl.clientWidth - 2*this.hMargin - (this.cols-1)*this.itemSpace)/(this.cols)
      for (let i=0;i<gridChildren.length;i++){
        let item = gridChildren[i];
        item.style.width = itemWidth + 'px';
        if ((i+1)%this.cols!==0){
          item.style.marginRight = this.itemSpace + 'px';
        }
        if (i>=this.cols) {
          item.style.marginTop = this.lineSpace + 'px';
        }
      }
    }
  }

}
</script>

<style scoped>
.grid-view {
  display: flex;
  flex-wrap: wrap;
}
</style>
