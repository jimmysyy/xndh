<template>
<!-- 影视剧模块的 -->
  <div>
      <BookSite
      :zlibrarylist="zlibrarylist"
      :bookSearchlist="bookSearchlist"
      :kindlelist="kindlelist"
      :novellist="novellist"
      />
  </div>
</template>

<script>
import BookSite from './booksite'

export default {
    components:{
        BookSite
    },
    data(){
        return{
            zlibrarylist:[
                { id: "001", title: "zlibrary镜像1", url: "http://zhelper.tk/", ps: '镜像会慢'},
                { id: "002", title: "zlibrary镜像2", url: "https://bookzz.bban.fun/", ps: '镜像会慢'},
                { id: "003", title: "zlibrary镜像3", url: "https://zhelper.ml/", ps: '镜像会慢'},
                { id: "004", title: "zlibrary镜像4", url: "https://zlibmirror21.gq/", ps: '镜像会慢'},
                { id: "005", title: "zlibrary镜像5", url: "https://zlibmirror21.cf/", ps: '镜像会慢'},
                { id: "006", title: "zlibrary镜像6", url: "https://zlibmirror.1kbtool.com/", ps: '镜像会慢'},
            ],
            bookSearchlist:[
                { id: "001", title: "搜书网", url: "https://www.soushu.vip/", ps: '书挺多'},
                { id: "002", title: "书舟搜索", url: "https://www.shuzhou.cc/", ps: '电子书很全'},
                { id: "003", title: "鸠摩搜书", url: "https://www.jiumodiary.com/", ps: '能坚持不容易'},
                { id: "004", title: "苦瓜书盘", url: "https://kgbook.com/", ps: '曾经找pdf很方便'},
                // { id: "005", title: "", url: "", ps: ''},
            ],
            kindlelist:[
                { id: "001", title: "先去zlib镜像站搜", url: "", ps: ''},
                { id: "002", title: "书伴", url: "https://bookfere.com/", ps: 'kindle书籍分享'},
                { id: "003", title: "跪读网", url: "https://orzbooks.com/", ps: '要关注公众号'},
                { id: "004", title: "天浪书屋", url: "https://www.tianlangbooks.com/", ps: '要关注公众号'},
                { id: "005", title: "电子书根据地", url: "http://www.66books.cn/", ps: '要关注公众号'},
            ],
            novellist:[
                { id: "001", title: "笔趣阁", url: "http://www.b520.cc/", ps: ''},
            ]
        }
    }
};
</script>

<style>
</style>