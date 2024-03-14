---
pageClass: my-page-layout
---
# 前端主流框架

这里是markdown的内容

可以直接在下面导入组件来使用，即markdown和vue可以混用

<cardList v-for="model in siteData" :key="model.title" :title="model.title" :data="model.items" />

<script setup>
// 网址导航页面的数据
import siteData from "./data/source.js";
</script>

这里是markdown的另外的内容