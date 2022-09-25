<template>
  <div class="col-sm-3">
    <!--触摸提示，点击跳转 -->
    <!-- <div
        class="xe-widget xe-conversations box2 label-info"
        onclick="window.open('https://dribbble.com/', '_blank')"
        data-toggle="tooltip"
        data-placement="bottom"
        title=""
        data-original-title="https://dribbble.com/"
      > -->
    <div
      class="xe-widget xe-conversations box2 label-info"
      @click="jump"
      data-toggle="tooltip"
      data-placement="bottom"
      title=""
      :data-original-title="`${list.url}`"
    >
      <!-- 单个网站内部 -->
      <div class="xe-comment-entry">
        <!-- 网站图标 -->
        <a class="xe-user-img">
          <img src="@/assets/logo.png" class="lozad img-circle" width="40" />
        </a>
        <!-- 网站介绍 -->
        <div class="xe-comment">
          <!-- 网址标题加粗 -->
          <a href="#" class="xe-user-name overflowClip_1">
            <strong>{{ list.title }}</strong>
          </a>
          <!-- 网址内容简介 -->
          <p class="overflowClip_2">{{ list.ps }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["list"],
  methods: {
    jump() {
      window.open(`${this.list.url}`, "_blank");
    },
  },
};
</script>

<style>
</style>