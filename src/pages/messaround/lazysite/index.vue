<template>
  <div>
    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="摸鱼才是赚钱"></i
      >摸鱼才是赚钱
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <money v-for="site in moneylist" :key="site.id" :list="site" />
    </div>
    <br />

    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="社交"></i
      >社交
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <socializing v-for="site in socializinglist" :key="site.id" :list="site" />
    </div>
    <br />

    <h4 class="text-gray">
      <i class="linecons-note" style="margin-right: 7px" id="游戏娱乐"></i
      >游戏娱乐
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <games v-for="site in gameslist" :key="site.id" :list="site" />
    </div>
    <br />
  </div>
</template>

<script>
import games from "./games";
import socializing from "./socializing"
import money from "./money"


export default {
  props: ['moneylist','socializinglist','gameslist'],
  components: {
    games,
    socializing,
    money
  },
};
</script>

<style>
</style>