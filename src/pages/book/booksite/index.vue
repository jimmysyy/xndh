<template>
  <div>
    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="zlibrary"></i
      >zlibrary
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <zlibrary v-for="site in zlibrarylist" :key="site.id" :list="site" />
    </div>
    <br />

    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="搜书"></i
      >搜书
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <zlibrary v-for="site in bookSearchlist" :key="site.id" :list="site" />
    </div>
    <br />

    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="kindle搜书"></i
      >kindle搜书
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <zlibrary v-for="site in kindlelist" :key="site.id" :list="site" />
    </div>
    <br />

    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="网络小说"></i
      >网络小说
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <novel v-for="site in novellist" :key="site.id" :list="site" />
    </div>
    <br />
  </div>
</template>

<script>
import zlibrary from "./zlibrary";
import booksearch from "./booksearch";
import kindlelist from './zlibrary';
import novel from './novel'

export default {
  props: ['zlibrarylist','bookSearchlist','kindlelist','novellist'],
  components: {
    zlibrary,
    booksearch,
    kindlelist,
    novel
  },
};
</script>

<style>
</style>