<template>
      <div class="tab-control">
          <div class="table-control-item" v-for="(item,index) in contents"
               :class="{active: index===currentIndex}"
                @click="itemClick(index)">
            <span>{{item}}</span>
          </div>
      </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    contents:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
      this.$emit('itemClick',index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    background-color: #f6f6f6;
  }
  .table-control-item {
    flex: 1;
  }
  .table-control-item span {
    padding-bottom: 5px;

  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 1px solid var(--color-tint);
  }
</style>
