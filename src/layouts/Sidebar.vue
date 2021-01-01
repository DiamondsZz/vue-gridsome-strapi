<template>
  <div>
    <el-card shadow="never">
      <el-menu :default-active="active" @select="onSelect">
        <el-menu-item
          v-for="item in constantRouterMap"
          :key="item.path"
          :index="item.path"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      constantRouterMap: [
        {
          icon: "el-icon-star-off",
          title: "最新动态",
          path: "/new/main",
        },
        {
          icon: "el-icon-mobile-phone",
          title: "社交圈",
          path: "/social/main",
        },
        {
          icon: "el-icon-edit-outline",
          title: "博客列表",
          path: "/blog/main",
        },
        {
          icon: "el-icon-service",
          title: "开源项目",
          path: "/project/main",
        },
      ],
      active: "",
      parentUrl: "",
      menuList: [],
    };
  },
  computed: {},
  mounted() {
    let arr = this.$route.path.split("/");
    this.active = "/" + arr[1] + "/" + arr[2];
  },
  methods: {
    onSelect(index) {
      this.$router.push(index);
    },
  },
};
</script>