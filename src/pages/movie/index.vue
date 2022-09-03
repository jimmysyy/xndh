<template>
<!-- 影视剧模块的 -->
  <div>
      <MovieSite
      :movieLivelist="movieLivelist"
      :movieDownloadlist="movieDownloadlist"
      :Dramalist="Dramalist"
      :Acglist="Acglist"
      :rhgtDramalist="rhgtDramalist"
      />
  </div>
</template>

<script>
import MovieSite from './moviesite'

export default {
    components:{
        MovieSite
    },
    data(){
        return{
            movieLivelist: [
                { id: "001", title: "BTNULL", url: "https://www.btnull.org/", ps:'资源齐全更新快',},
                { id: "002", title: "XijingTV", url: "http://xijing.tv/", ps:'播放干净'},
                { id: "003", title:"低端影视", url:"https://ddys.tv/", ps:'网页很好看'},
                { id: "004", title: "看看屋", url: "https://www.kankanwu.com/", ps: '老而弥坚'},
                { id: "005", title: "Hdmoli", url: "https://www.hdmoli.com/", ps: '视频源一般'},
                { id: "006", title: "河马影视", url: "https://www.hemays.com/", ps: ''},
                { id: "007", title: "在线之家", url: "https://zxzj.vip/", ps: '看剧好'},
                { id: "008", title: "蚂蚁影视", url: "https://www.91mayi.com/", ps: ''},
                { id: "009", title: "高清MP4吧", url: "https://www.mp4pa.com/", ps: '一般'},
                { id: "010", title: "厂长资源", url: "https://qianoo.cn/", ps: '加载很快'},
                { id: "011", title: "片吧影视", url: "https://www.pbpb.tv/", ps: ''},
                { id: "012", title: "剧白白", url: "https://jubaibai.cc/", ps: ''},
                // { id: "", title: "", url: "", ps: ''},
            ], 
            movieDownloadlist:[
                { id: "001", title: "BTNULL", url: "https://www.btnull.org/", ps:'资源齐全更新快'},
                { id: "002", title: "BT之家", url: "https://www.btbtt12.com/", ps: '老中老的网站'},
                { id: "003", title: "好恐怖", url: "https://www.haokongbu1.com/", ps: '不只是恐怖片的网站'},
                { id: "004", title: "哔嘀影视", url: "https://www.bdys01.com/", ps: '可以在线观看，慢'},
                { id: "005", title: "BD影视", url: "https://www.bd2020.co/", ps: '站长很给力，强推'},
                { id: "006", title: "6v电影", url: "http://www.hao6v.cc/", ps: '也是老网站了'},
                { id: "007", title: "音范丝", url: "https://www.yinfans.me/", ps: '蓝光资源，给站长点赞'},
                { id: "008", title: "飘花电影网", url: "https://www.piaohua.com/", ps: '也是不少年了'},
                { id: "009", title: "两个BT", url: "https://www.bttwoo.com/", ps: ''},
            ],
            Dramalist:[
                { id: "001", title: "XijingTV", url: "http://xijing.tv/", ps: '有点慢无伤大雅'},
                { id: "002", title: "美剧天堂", url: "https://www.meijutt.net/", ps: ''},
                { id: "003", title: "美剧迷", url: "https://www.meijumi.net/", ps: ''},
                { id: "004", title: "美剧仓", url: "https://www.meijucang.com/", ps: ''},
                { id: "005", title: "阿哥美剧", url: "https://agmov.com/", ps: ''},
                { id: "006", title: "美剧窝", url: "https://www.mjwo.cc/", ps: ''},
            ],
            Acglist:[
                { id: "001", title: "动漫花园", url: "http://dmhy.org/", ps: '很好用'},
                { id: "002", title: "Age动漫", url: "https://www.agemys.cc/", ps: '在线'},
                { id: "003", title: "哔咪动漫", url: "http://www.bimiacg4.net/", ps: ''},
                { id: "004", title: "樱花动漫", url: "http://www.yinghuacd.com/", ps: ''},
                { id: "005", title: "妮可动漫", url: "http://www.nicotv.me/", ps: ''},
            ],
            rhgtDramalist:[
                { id: "001", title: "FIX字幕侠", url: "https://www.zimuxia.cn/%e6%88%91%e4%bb%ac%e7%9a%84%e4%bd%9c%e5%93%81", ps: ''},
                { id: "002", title: "东京不够热", url: "https://www.tnhsub.com/", ps: ''},
                { id: "003", title: "TVBT菊花台", url: "http://www.mytvbt.net/", ps: ''},
                { id: "004", title: "秋爸日字(生肉)", url: "https://qq88.info/", ps: ''},
                { id: "005", title: "港剧下载", url: "http://www.ii166.com/", ps: ''},
            ]
        }
    }
};
</script>

<style>
</style>