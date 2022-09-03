<template>
  <nav class="navbar user-info-navbar" role="navigation">
    <!-- User Info, Notifications and Menu Bar -->
    <!-- Left links for user info navbar -->
    <ul class="user-info-menu left-links list-inline list-unstyled">
      <!-- 侧栏显示按钮 -->
      <li class="hidden-sm hidden-xs">
        <a href="#" data-toggle="sidebar">
          <i class="fa-bars"></i>
        </a>
      </li>

      <!-- 头部语言开关 -->
      <li class="dropdown hover-line language-switcher">
        <!-- <a
          href="./index.html"
          class="dropdown-toggle"
          data-toggle="dropdown"
        >
          <img src="@/assets/flag-cn.png" alt="flag-cn" />
          Chinese
        </a> -->

        <!-- 两种语言选择 -->
        <!-- <ul class="dropdown-menu languages">
          <li>
            <a href="../en/index.html">
              <img src="@/assets/flag-us.png" alt="flag-us" />
              English
            </a>
          </li>
          <li class="active">
            <a href="../cn/index.html">
              <img src="@/assets/flag-cn.png" alt="flag-cn" />
              Chinese
            </a>
          </li>
        </ul> -->
      </li>
    </ul>

    <!-- <ul class="user-info-menu right-links list-inline list-unstyled">
      <li class="hidden-sm hidden-xs">
        <Music/>
      </li>
    </ul> -->

    <!-- 头部右上角github -->
    <ul class="user-info-menu right-links list-inline list-unstyled">
      <li class="hidden-sm hidden-xs">
        <a
          href="https://github.com/jimmysyy"
          target="_blank"
        >
          <i class="fa-github"></i> GitHub
        </a>
      </li>
    </ul>
    <!-- <a href="https://github.com/WebStackPage/WebStackPage.github.io" target="_blank"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub"></a> -->
  </nav>
</template>

<script>
// import Music from './music'
export default {
  components:{
    // Music
  }
};
</script>

<style scoped>
</style>