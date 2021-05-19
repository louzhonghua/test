<template>
  <div class="container">
    <h4>Vue.js可扩展树菜单（递归组件）</h4>
    <tree-menu :nodes="tree.nodes" :depth="0" :label="tree.label"></tree-menu>
  </div>
</template>

<script>
import TreeMenu from "./TreeMenu";
let tree = {
  label: "root",
  nodes: [
    {
      label: "item1",
      nodes: [
        {
          label: "item1.1"
        },
        {
          label: "item1.2",
          nodes: [
            {
              label: "item1.2.1"
            }
          ]
        }
      ]
    },
    {
      label: "item2"
    }
  ]
};

export default {
  components: {
    TreeMenu
  },
  data() {
    return {tree}
  }
};
</script>

<style scoped>
.container {
  width: 300px;
  margin: 0 auto;
  text-align: left;
}
</style>
