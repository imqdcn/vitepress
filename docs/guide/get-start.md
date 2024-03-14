---
title: Docs with VitePress2222
editLink: true,
author: 前端人
abc: 哈哈哈
pageClass: site-layout
---

文章的作者： {{ $frontmatter.abc }}

<ul>
    <li v-for='item in list' :key='item.id'>{{item.title}}</li>
</ul>

# adgasd

gasdg

## 二级目录

大噶是的噶

## 二级目录2

内容

### 三级目录

内容

## 使用elementUI

<div class="ui-button">
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">绿色按钮</el-button>
  <el-button type="info">灰色按钮</el-button>
  <el-button type="warning">黄色按钮</el-button>
  <el-button type="danger">红色按钮</el-button>
</div>

<script setup>
import {ref} from 'vue'

const list=ref([
    {
        id:1,
        title:'标题1'
    },
    {
        id:2,
        title:'标题2'
    }
])
</script>