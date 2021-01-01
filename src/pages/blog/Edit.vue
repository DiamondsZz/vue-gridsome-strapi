<template>
  <div style="min-height: 600px" v-loading="loading">
    <el-card shadow="never" style="margin-bottom: 20px">
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :rules="ruleValidate"
      >
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="简要说明" prop="description">
          <el-input v-model="form.description" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="博客正文" prop="content">
          <mavon-editor
            @imgAdd="imgAdd"
            style="max-height: 500px"
            ref="md"
            v-model="form.content"
            :subfield="false"
            :toolbars="mavonEditorToolbars"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            :loading="submitButton.loading"
            :disabled="submitButton.disabled"
            >修改</el-button
          >
          <el-button @click="$router.push('/blog/main')">返回</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      form: {
        id: "",
        title: "",
        description: "",
        content: "",
      },
      ruleValidate: {
        title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          {
            type: "string",
            max: 32,
            message: "标题长度不大于32字符",
            trigger: "change",
          },
        ],
        description: [
          { required: true, message: "请输入博客描述", trigger: "blur" },
        ],
        content: [
          { required: true, message: "请输博客入正文", trigger: "blur" },
        ],
      },
      loading: false,
      submitButton: {
        loading: false,
        disabled: false,
      },
      mavonEditorToolbars: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        superscript: true,
        subscript: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        imagelink: true,
        code: true,
        table: true,
        htmlcode: true,
        trash: true,
        alignleft: true,
        aligncenter: true,
        alignright: true,
        preview: true,
      },
    };
  },
  computed: {},
  mounted() {
    this.form.id = this.$route.params.id;
  },
  methods: {
    imgAdd(pos, file) {},
    onSubmit() {
      this.publish();
    },
    publish() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.submitButton.loading = true;
          this.submitButton.disabled = true;
        }
      });
    },
  },
};
</script>

<style>
</style>