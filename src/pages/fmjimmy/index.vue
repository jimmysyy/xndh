<template>
  <div>
    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="站内广播"></i>公告
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <!-- <graduate v-for="site in graduatelist" :key="site.id" :list="site" /> -->
      <div class="col-sm-12" @click="tongzhi">
        <div
          class="xe-widget xe-conversations box2 label-info"
          data-toggle="tooltip"
          data-placement="bottom"
          title=""
          
        >
          <!-- 单个网站内部 -->
          <div class="xe-comment-entry">
            <!-- 网站图标 -->
            <a class="xe-user-img">
              <img
                src="@/assets/logo.png"
                class="lozad img-circle"
                width="40"
              />
            </a>
            <!-- 网站介绍 -->
            <div class="xe-comment">
              <!-- 网址标题加粗 -->
              <a href="#" class="xe-user-name overflowClip_1">
                <strong>我是通知</strong>
              </a>
              <!-- 网址内容简介 -->
              <p class="overflowClip_2">
                欢迎使用犀牛导航，希望能帮助到你
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <br />
  </div>
</template>

<script>
export default {
  methods:{
    tongzhi(){
      alert('导航刚刚起步，可能会有很多的问题，欢迎联系我提出建议或者反馈意见')
    }
  }
};
</script>

<style scoped>
</style>