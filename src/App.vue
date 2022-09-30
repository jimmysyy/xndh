<template>
  <div class="page-container">
    <Aside/>

    <!-- 主要容器 -->
    <div class="main-content">
      <!-- 头部内容 -->
      <Header/>
      <router-view></router-view>

      <!-- 常用推荐 -->

      <!-- 单组件标题 -->
      <Main/>

      <!--END UED团队 -->
      <!-- Main Footer -->
      <!-- Choose between footer styles: "footer-type-1" or "footer-type-2" -->
      <!-- Add class "sticky" to  always stick the footer to the end of page (if page contents is small) -->
      <!-- Or class "fixed" to  always fix the footer to the end of page -->

      <!-- 根部 -->
      <Footer/>
      
    </div>
  </div>
</template>

<script>
import Aside from '@/components/aside'
import Header from '@/components/header'
import Main from '@/components/main'
import Footer from '@/components/footer'

export default {
  components:{
    Aside,
    Header,
    Main,
    Footer
  }
};
</script>

<style>
</style>
