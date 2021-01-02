<template>
  <Layout>
    <div style="min-height: 600px" v-loading="loading">
      <el-card shadow="never" style="margin-bottom: 20px">
        <el-input
          placeholder="请输入关键字"
          v-model="searchKey"
          clearable
          style="width: 300px"
        ></el-input>
        <el-button
          @click="search"
          icon="el-icon-search"
          style="margin-left: 10px"
          circle
          plain
        ></el-button>
      </el-card>

      <div v-if="$page.projects.edges && $page.projects.edges.length > 0">
        <el-card
          shadow="hover"
          v-for="(item, index) in $page.projects.edges"
          :key="'pro' + index"
          style="margin-bottom: 20px"
        >
          <div slot="header">
            <el-row>
              <el-col :span="16">
                <span>
                  <a style="text-decoration: none; cursor: pointer">
                    <i class="el-icon-service"></i>&nbsp;&nbsp; {{ item.node.name }}
                  </a>
                </span>
              </el-col>
              <el-col :span="8"> </el-col>
            </el-row>
          </div>
          <div style="font-size: 0.9rem; line-height: 1.5; color: #606c71">
            最近更新 {{ item.node.updateTime }}
          </div>
          <div
            style="
              font-size: 1.1rem;
              line-height: 1.5;
              color: #303133;
              padding: 10px 0px 0px 0px;
            "
          >
            {{ item.node.description }}
          </div>
        </el-card>
        <div style="text-align: center">
          <el-pagination
            @current-change="list"
            background
            layout="prev, pager, next"
            :current-page.sync="query.page"
            :page-size="query.pageSize"
            :total="query.pageNumber * query.pageSize"
          >
          </el-pagination>
        </div>
      </div>

      <el-card
        shadow="never"
        style="
          margin-bottom: 20px;
          padding: 20px 0px 20px 0px;
          text-align: center;
        "
        v-if="!$page.projects.edges || $page.projects.edges.length == 0"
      >
        <font style="font-size: 30px; color: #dddddd">
          <b>还没有开源项目 (╯°Д°)╯︵ ┻━┻</b>
        </font>
      </el-card>
    </div>
  </Layout>
</template>
<page-query>
  query{
    projects:allStrapiItem{
      edges{
        node{
          name
          description
          updateTime(format: "YYYY-MM-DD")
        }
      }
    }
  }
</page-query>
<script>
export default {
  data() {
    return {
      query: {
        page: 1,
        pageSize: 5,
        pageNumber: 1,
      },
      loading: false,
      searchKey: "",
      projects: [],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    list() {
      this.loading = true;
    },
    search() {
      for (let i = 0; i < this.projects.length; i++) {
        this.projects[i].hide =
          this.projects[i].name.indexOf(this.searchKey) < 0;
      }
    },
    goDetails(name) {
      this.$router.push("/project/details/" + name);
    },
    goGithub(url) {
      window.open(url);
    },
  },
};
</script>