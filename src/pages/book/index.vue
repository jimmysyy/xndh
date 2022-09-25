<template>
<!-- 影视剧模块的 -->
  <div>
      <BookSite
      :zlibrarylist="zlibrarylist"
      :bookSearchlist="bookSearchlist"
      :kindlelist="kindlelist"
      :novellist="novellist"
      :goodbooklist="goodbooklist"
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
                { id: "000", title: "zlibrary官方(梯子)", url: "https://z-lib.org/", ps: '主站'},
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
                { id: "005", title: "SaltTiger", url: "https://salttiger.com/", ps: '编程书籍分享'},
                { id: "006", title: "多读", url: "http://www.duodu.cc/", ps: '搜书'},
                // { id: "005", title: "", url: "", ps: ''},
            ],
            kindlelist:[
                { id: "001", title: "先去zlib镜像站搜", url: "", ps: ''},
                { id: "002", title: "书伴", url: "https://bookfere.com/", ps: 'kindle书籍分享'},
                { id: "003", title: "跪读网", url: "https://orzbooks.com/", ps: '要关注公众号'},
                { id: "004", title: "天浪书屋", url: "https://www.tianlangbooks.com/", ps: '要关注公众号'},
                { id: "005", title: "电子书根据地", url: "http://www.66books.cn/", ps: '要关注公众号'},
                { id: "006", title: "好读(繁体书籍)", url: "https://haodoo.net/", ps: ''},
                { id: "007", title: "精品电子书", url: "https://dylanbai8.github.io/ideahub/#", ps: ''},
                { id: "008", title: "优质电子书", url: "https://www.nmod.net/", ps: ''},
            ],
            novellist:[
                { id: "001", title: "小说APP", url: "", ps: '站长分享的免费小说APP'},
                { id: "002", title: "知轩藏书", url: "http://zxcs.me/", ps: '精校小说'},
                { id: "003", title: "起点中文网", url: "https://www.qidian.com/", ps: ''},
                { id: "004", title: "红袖添香", url: "https://www.hongxiu.com/", ps: ''},
                { id: "005", title: "晋江文学网", url: "https://www.jjwxc.net/", ps: ''},
                { id: "006", title: "笔趣阁", url: "http://www.b520.cc/", ps: ''},
                
            ],
            goodbooklist:[
                { id: "001", title: "马克思主义文库", url: "https://www.marxists.org/chinese/index.html", ps: ''},
                { id: "002", title: "香港旧报纸", url: "https://mmis.hkpl.gov.hk/zh/old-hk-collection", ps: '香港多年旧报纸'},
                { id: "003", title: "科学文库", url: "https://book.sciencereading.cn/shop/main/Login/shopFrame.do", ps: ''},
                { id: "004", title: "浮世绘", url: "https://ja.ukiyo-e.org/", ps: '浮世绘大图分享'},
                { id: "005", title: "中国历史照片", url: "https://www.hpcbristol.net/", ps: '国外分享的中国影像'},
                { id: "006", title: "晚清民国报纸", url: "https://gpa.eastview.com/crl/lqrcn/?a=p&p=home&e=-------zh-25--1--img-txIN----------", ps: '晚清和民国时期中文报纸'},
                { id: "007", title: "观沧海", url: "https://www.ageeye.cn/", ps: '中国各类地图分享'},
                { id: "008", title: "中国诗人资料馆", url: "http://www.shiren.org/", ps: ''},
            ]
        }
    }
};
</script>

<style>
</style>