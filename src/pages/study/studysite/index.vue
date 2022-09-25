<template>
  <div>
    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="外语"></i
      >外语
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <Detail v-for="site in languagelist" :key="site.id" :list="site" />
    </div>
    <br />

    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="考研"></i
      >考研
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <Detail v-for="site in graduatelist" :key="site.id" :list="site" />
    </div>
    <br />

    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="热门学习站点"></i
      >热门学习站点
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <Detail v-for="site in studyhotlist" :key="site.id" :list="site" />
    </div>
    <br />
  </div>
</template>

<script>


export default {
  props: ['languagelist','graduatelist','studyhotlist'],
  components: {
  },
};
</script>

<style>
</style>