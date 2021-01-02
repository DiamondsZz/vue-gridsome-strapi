<template>
  <div class="layout">
    <div class="layout-head"><Head /></div>
    <div class="layout-main">
      <div class="side-bar"><SiderBar /></div>

      <div class="main"><slot /></div>
    </div>
  </div>
</template>
<script>
import Head from "./Head";
import SiderBar from "./Sidebar";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  components: { SiderBar, Head },
};
</script>
<style scoped>
.layout-head {
  height: 320px;
}
.layout-main {
  display: flex;
}
.side-bar {
}
.main {
  flex-grow: 1;
}
</style>