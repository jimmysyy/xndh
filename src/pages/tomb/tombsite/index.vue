<template>
  <div>
    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="网站墓碑"></i
      >网站墓碑
    </h4>
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
                <strong></strong>
              </a>
              <!-- 网址内容简介 -->
              <p class="overflowClip_2" >
                一些已经逝去的站点
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 单个网站容器 -->
      <Detail v-for="site in zlibrarylist" :key="site.id" :list="site" />
    </div>
    <br />
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <Detail v-for="site in tombList" :key="site.id" :list="site" />
    </div>
    <br />
  </div>
</template>

<script>
export default {
  props: ["tombList"],
  components: {},
};
</script>

<style>
</style>