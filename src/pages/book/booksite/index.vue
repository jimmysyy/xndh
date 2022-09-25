<template>
  <div>
    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="zlibrary"></i
      >zlibrary
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <div class="col-sm-12">
        <div
          class="xe-widget xe-conversations box2 label-info"
          data-toggle="tooltip"
          data-placement="bottom"
          title=""
          data-original-title="https://weibo.com/xiniudh"
        >
          <!-- 单个网站内部 -->
          <div class="xe-comment-entry">
            <!-- 网站图标 -->
            <!-- 网站介绍 -->
            <div>
              <!-- 网址标题加粗 -->
              <a class="xe-user-name overflowClip_1">
                <strong>我是通知2</strong>
              </a>
              <!-- 网址内容简介 -->
              <p class="overflowClip_2">
                zlib因为镜像会经常导致下载不成功，如果需要帮助找书可以微博私信我<a
                  href="https://weibo.com/xiniudh"
                  >@被污染的知识图谱</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 单个网站容器 -->
      <Detail v-for="site in zlibrarylist" :key="site.id" :list="site" />
    </div>
    <br />

    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="搜书"></i>搜书
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <Detail v-for="site in bookSearchlist" :key="site.id" :list="site" />
    </div>
    <br />

    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="kindle搜书"></i
      >kindle搜书
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <Detail v-for="site in kindlelist" :key="site.id" :list="site" />
    </div>
    <br />

    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="网络小说"></i
      >网络小说
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <Detail v-for="site in novellist" :key="site.id" :list="site" />
    </div>
    <br />

    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="阅读好站"></i
      >阅读的好站
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <Detail v-for="site in goodbooklist" :key="site.id" :list="site" />
    </div>
    <br />
  </div>
</template>

<script>
// import zlibrary from "./zlibrary";
// import booksearch from "./booksearch";
// import kindlelist from "./zlibrary";
// import novel from "./novel";
// import goobbook from "./goobbook";

export default {
  props: [
    "zlibrarylist",
    "bookSearchlist",
    "kindlelist",
    "novellist",
    "goodbooklist",
  ],
  components: {
    // zlibrary,
    // booksearch,
    // kindlelist,
    // novel,
    // goobbook,
  },
};
</script>

<style>
</style>