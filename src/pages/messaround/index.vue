<template>
<!-- 影视剧模块的 -->
  <div>
      <lazysite
        :moneylist="moneylist"
        :socializinglist="socializinglist"
        :gameslist="gameslist"
      />
  </div>
</template>

<script>
import lazysite from './lazysite'

export default {
    components:{
        lazysite
    },
    data(){
        return{
            moneylist:[
                { id: "001", title: "什么值得买", url: "https://www.smzdm.com/", ps: '价比三家再领个卷'},
                { id: "002", title: "什么值得读", url: "https://shenmezhidedu.com/", ps: '看看最近有啥看的'},
            ],
            socializinglist:[
                { id: "001", title: "微博", url: "https://weibo.com/", ps: ''},
                { id: "002", title: "知乎", url: "https://www.zhihu.com/", ps: ''},
                { id: "003", title: "贴吧", url: "https://tieba.baidu.com/", ps: ''},
                { id: "004", title: "豆瓣", url: "https://www.douban.com/", ps: ''},
                // { id: "", title: "", url: "", ps: ''},
            ],
            gameslist:[
                { id: "001", title: "小霸王", url: "https://www.yikm.net/", ps: '小霸王-乐趣无穷'},
                { id: "002", title: "Steam", url: "https://store.steampowered.com/", ps: ''},
                { id: "003", title: "GBT乐赏游戏", url: "http://gbtgame.ysepan.com/", ps: ''},
                { id: "004", title: "3DMGAMES", url: "https://dl.3dmgame.com/", ps: ''},
            ],
            videolist:[
                { id: "001", title: "腾讯视频", url: "https://v.qq.com/", ps: ''},
                { id: "002", title: "优酷", url: "https://www.youku.com/", ps: ''},
                { id: "003", title: "爱奇艺", url: "https://www.iqiyi.com/", ps: ''},
                { id: "004", title: "BiliBili", url: "https://www.bilibili.com/", ps: ''},
                { id: "005", title: "虎牙直播", url: "https://www.huya.com/", ps: ''},
                { id: "006", title: "斗鱼直播", url: "https://www.douyu.com/", ps: ''},
                { id: "007", title: "抖音", url: "https://www.douyin.com/", ps: ''},
            ]
        }
    }
};
</script>

<style>
</style>