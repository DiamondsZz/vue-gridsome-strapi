<template>
  <div style="min-height: 600px" v-loading="loading">
    <el-card shadow="never" style="min-height: 400px">
      <div slot="header">
        <el-row>
          <el-col :span="12">
            <span>{{ $page.blog.title }}</span>
          </el-col>
          <el-col :span="12">
            <div style="text-align: right">
              <el-button
                @click="edit"
                style="padding: 3px 0"
                type="text"
                icon="el-icon-edit"
                >编辑</el-button
              >
              <el-button
                style="padding: 3px 0"
                type="text"
                icon="el-icon-more-outline"
                @click="more"
                >更多博客</el-button
              >
            </div>
          </el-col>
        </el-row>
      </div>
      <div style="font-size: 0.9rem; line-height: 1.5; color: #606c71">
        发布 {{ $page.blog.createTime }} <br />
        更新 {{ $page.blog.updateTime }}
      </div>
      <div
        style="
          font-size: 1.1rem;
          line-height: 1.5;
          color: #303133;
          border-bottom: 1px solid #e4e7ed;
          padding: 5px 0px 5px 0px;
        "
      >
        <pre style="font-family: '微软雅黑'">{{ $page.blog.description }}</pre>
      </div>
      <div
        v-html="mdToHtml($page.blog.content)"
        class="markdown-body"
        style="padding-top: 20px"
      ></div>
    </el-card>
  </div>
</template>
<page-query>
 query($id:ID) {
  blog: strapiPost(id:$id ) {
    id
    title
    description
    createTime(format: "YYYY-MM-DD")
    updateTime(format: "YYYY-MM-DD")
    content
  }
}
</page-query>
<script>
import MarkdownIt from "markdown-it";
const MD = new MarkdownIt();
export default {
  data() {
    return {
      blog: {
        id: "",
        title: "",
        content: "",
        description: "",
      },
      loading: false,
    };
  },
  computed: {},
  mounted() {
    this.blog.id = this.$route.params.id;
  },
  methods: {
    mdToHtml(markdown) {
      return MD.render(markdown);
    },
    edit() {
      this.$router.push("/blog/edit/" + this.blog.id);
    },
    more() {
      this.$router.push("/blog/main");
    },
  },
};
</script>