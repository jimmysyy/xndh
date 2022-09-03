<template>
  <div>
    <h4 class="text-gray">
      <i class="linecons-tv" style="margin-right: 7px" id="在线播放"></i
      >在线播放
    </h4>
    <!-- 单列网址容器，一个row代表一列，已经解决了 -->
    <div class="row">
      <!-- 单个网站容器 -->
      <MovieLivelist
        v-for="site in movieLivelist"
        :key="site.id"
        :list="site"
      />
      
    </div>
    <br/>

    <h4 class="text-gray">
      <i class="linecons-tv" style="margin-right: 7px" id="电影下载"></i
      >电影下载
    </h4>
    <div class="row">
    <MovieDownload
        v-for="site in movieDownloadlist"
        :key="site.id"
        :list="site"
      />
    </div>
    <br/>

    <h4 class="text-gray">
      <i class="linecons-tv" style="margin-right: 7px" id="美剧"></i
      >美剧
    </h4>
    <div class="row">
    <Dramalist
        v-for="site in Dramalist"
        :key="site.id"
        :list="site"
      />
    </div>
    <br>

    <h4 class="text-gray">
      <i class="linecons-tv" style="margin-right: 7px" id="动漫"></i
      >动漫
    </h4>
    <div class="row">
    <Acglist
        v-for="site in Acglist"
        :key="site.id"
        :list="site"
      />
    </div>
    <br>

    <h4 class="text-gray">
      <i class="linecons-tv" style="margin-right: 7px" id="日韩港台"></i
      >日韩港台
    </h4>
    <div class="row">
    <rhgtDramalist
        v-for="site in rhgtDramalist"
        :key="site.id"
        :list="site"
      />
    </div>
    <br>
  </div>
</template>

<script>
import MovieLivelist from './movieLivelist'
import MovieDownload from './movieDownloadlist'
import Dramalist from './Dramalist'
import Acglist from './Acglist'
import rhgtDramalist from './rhgtDramalist'


export default {
    props:['movieLivelist','movieDownloadlist','Dramalist','Acglist','rhgtDramalist'],
    components:{
        MovieLivelist,
        MovieDownload,
        Dramalist,
        Acglist,
        rhgtDramalist
    },
};
</script>

<style>
</style>