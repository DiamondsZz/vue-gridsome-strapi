// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Layout from "~/layouts/Default.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'mavon-editor/dist/markdown/github-markdown.min.css'
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", Layout);
  Vue.use(ElementUI);
  Vue.use(mavonEditor)
}
