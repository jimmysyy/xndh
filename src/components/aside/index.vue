<template>
  <div class="sidebar-menu toggle-others fixed">
      <div class="sidebar-menu-inner">
        <!-- 侧栏logo -->
        <header class="logo-env">
          <!-- logo -->
          <div class="logo">
            <a href="index.html" class="logo-expanded">
              <img src="@/assets/logo@2x.png" width="100%" alt="" />
            </a>
            <a href="index.html" class="logo-collapsed">
              <img
                src="@/assets/logo-collapsed@2x.png"
                width="40"
                alt=""
              />
            </a>
          </div>
          <!-- 移动菜单 -->
          <div class="mobile-menu-toggle visible-xs">
            <a href="#" data-toggle="user-info-menu">
              <i class="linecons-cog"></i>
            </a>
            <a href="#" data-toggle="mobile-menu">
              <i class="fa-bars"></i>
            </a>
          </div>
        </header>

        <!-- 侧栏菜单列表 -->
        <ul id="main-menu" class="main-menu">
          <li>
            <a href="#站长常用" class="smooth">
              <i class="linecons-star"></i>
              <span class="title">站长常用</span>
            </a>
          </li>
          <li>
            <a href="#站内广播" class="smooth">
              <i class="linecons-doc"></i>
              <span class="title">站内广播</span>
            </a>
          </li>

          <!-- 下面是有分栏 -->
          <!-- 第一个分栏：看影视剧 -->
          <li>
            <a>
              <i class="linecons-lightbulb"></i>
              <span class="title">看影视剧</span>
            </a>
            <ul>
              <li>
                <a href="#在线播放" class="smooth">
                  <span class="title">在线播放</span>
                </a>
              </li>
              <li>
                <a href="#电影下载" class="smooth">
                  <span class="title">电影下载</span>
                </a>
              </li>
              <li>
                <a href="#美剧" class="smooth">
                  <span class="title">美剧</span>
                </a>
              </li>
              <li>
                <a href="#动漫" class="smooth">
                  <span class="title">动漫</span>
                  <span class="label label-pink pull-right hidden-collapsed"
                    >Hot</span
                  >
                </a>
              </li>
              <li>
                <a href="#日韩港台" class="smooth">
                  <span class="title">日韩港台</span>
                </a>
              </li>
            </ul>
          </li>
          <!-- 第二个分栏：多看图书 -->
          <li>
            <a>
              <i class="linecons-thumbs-up"></i>
              <span class="title">多看图书</span>
            </a>
            <ul>
              <li>
                <a href="#zlibrary" class="smooth">
                  <span class="title">zlibrary</span>
                </a>
              </li>
              <li>
                <a href="#搜书" class="smooth">
                  <span class="title">搜书</span>
                </a>
              </li>
              <li>
                <a href="#kindle搜书" class="smooth">
                  <span class="title">kindle搜书</span>
                </a>
              </li>
              <li>
                <a href="#网络小说" class="smooth">
                  <span class="title">网络小说</span>
                </a>
              </li>
            </ul>
          </li>

          <!-- 学习教育 -->
          <li>
            <a>
              <i class="linecons-diamond"></i>
              <span class="title">学习教育</span>
            </a>
            <ul>
              <li>
                <a href="#外语" class="smooth">
                  <span class="title">外语</span>
                </a>
              </li>
              <li>
                <a href="#考研" class="smooth">
                  <span class="title">考研</span>
                </a>
              </li>
              <li>
                <a href="#热门学习站点" class="smooth">
                  <span class="title">热门学习站点</span>
                </a>
              </li>
            </ul>
          </li>

          <!-- 当程序员 -->
          <li>
            <a>
              <i class="linecons-pencil"></i>
              <span class="title">当程序员</span>
            </a>
            <ul>
              <li>
                <a href="#前端" class="smooth">
                  <span class="title">前端</span>
                </a>
              </li>
              <li>
                <a href="#后端" class="smooth">
                  <span class="title">后端</span>
                </a>
              </li>
              <li>
                <a href="#工具教程" class="smooth">
                  <span class="title">工具教程</span>
                </a>
              </li>
              <li>
                <a href="#编程文档" class="smooth">
                  <span class="title">编程文档</span>
                </a>
              </li>
            </ul>
          </li>

          <!-- 摸鱼赚钱 -->
          <li>
              <a>
              <i class="linecons-user"></i>
              <span class="title">摸鱼赚钱</span>
            </a>
            <ul>
              <li>
                <a href="#摸鱼才是赚钱" class="smooth">
                  <span class="title">摸鱼才是赚钱</span>
                </a>
              </li>
              <li>
                <a href="#社交" class="smooth">
                  <span class="title">社交</span>
                </a>
              </li>
              <li>
                <a href="#游戏娱乐" class="smooth">
                  <span class="title">游戏娱乐</span>
                </a>
              </li>
            </ul>
          </li>
          
          <!-- 软件工具 -->
          <li>
              <a>
              <i class="linecons-user"></i>
              <span class="title">软件工具</span>
            </a>
            <ul>
              <li>
                <a href="#站长推荐" class="smooth">
                  <span class="title">站长推荐</span>
                </a>
              </li>
            </ul>
          </li>
          
          <li>
            <a href="about.html">
              <i class="linecons-heart"></i>
              <span class="tooltip-blue">关于本站</span>
              <span class="label label-Primary pull-right hidden-collapsed"
                >♥︎</span
              >
            </a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>