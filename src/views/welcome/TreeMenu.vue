<template>
  <div class="tree-menu">
    <div class="label-wrapper" @click="toggleChildren">
      <div :style="indent" :class="labelClasses">{{ label }}</div>
    </div>
    <template v-if="showChildren">
      <TreeMenu
        v-for="node in nodes"
        :key="node.label"
        :nodes="node.nodes"
        :label="node.label"
        :depth="depth + 1"
      ></TreeMenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "TreeMenu",
  props: ["nodes", "label", "depth"],
  data() {
    return {
      showChildren: true
    };
  },
  computed: {
    labelClasses() {
      return { "has-children": this.nodes };
    },
    indent() {
      return { transform: `translate(${this.depth * 30}px)` };
    }
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    }
  }
};
</script>

<style scoped>
.tree-menu .label-wrapper {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  text-align: left;
}

.tree-menu .label-wrapper .has-children {
  cursor: pointer;
}
</style>
