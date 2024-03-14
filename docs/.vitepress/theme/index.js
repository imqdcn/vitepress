// .vitepress/theme/index.js

import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style/custom.css'  //加入自定义样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import cardList from "./components/cardList.vue";

export default {
  extends: DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: Layout,
  enhanceApp({ app}) {
    // 注册全局组件
    app.component("cardList", cardList);
    app.use(ElementPlus);//启用
  },
}