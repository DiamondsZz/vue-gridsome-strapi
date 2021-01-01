<template>
  <div class="layout">
    <div class="side-bar"><SiderBar /></div>

    <div class="main"><slot /></div>
  </div>
</template>
<script>
import SiderBar from "./Sidebar";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  components: { SiderBar },
};
</script>
<style scoped>
.layout {
  display: flex;
}
.side-bar {
}
.main {
  flex-grow: 1;
}
</style>