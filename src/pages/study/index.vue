<template>
<!-- 影视剧模块的 -->
  <div>
      <Studysite
        :languagelist="languagelist"
        :graduatelist="graduatelist"
        :studyhotlist="studyhotlist"
      />
  </div>
</template>

<script>
import Studysite from './studysite'

export default {
    components:{
        Studysite
    },
    data(){
        return{
            languagelist:[
                { id:"001", title:"知乎:英语优质回答", url:"https://www.zhihu.com/question/20183585", ps: ''},
                { id: "002", title: "多邻国", url: "https://www.duolingo.cn/", ps: ''},
                { id: "003", title: "扇贝", url: "https://web.shanbay.com/web/main", ps: '背单词'},
                // { id: "", title: "", url: "", ps: ''},
            ],
            graduatelist:[
                { id: "001", title: "中国研究生招生网", url: "https://yz.chsi.com.cn/", ps: ''},
                { id: "002", title: "考研吧", url: "https://tieba.baidu.com/f?kw=%E8%80%83%E7%A0%94&ie=utf-8", ps: '分享心态沟通经验'},
                { id: "003", title: "中国考研网", url: "http://www.chinakaoyan.com/", ps: ''},
                { id: "004", title: "金榜题名", url: "http://qzbltushu.ysepan.com/", ps: '考研资源分享'},
            ],
            studyhotlist:[
                { id: "001", title: "中国大学MOOC", url: "https://www.icourse163.org/", ps: ''},
                { id: "002", title: "菜鸟教程", url: "https://www.runoob.com/", ps: '主前端方面的教程'},
                { id: "003", title: "慕课网", url: "https://www.imooc.com/", ps: '程序猿的慕课教程'},
                { id: "004", title: "B站(限定)", url: "https://www.bilibili.com/", ps: '善用搜索能找到各种教程'},
            ]
        }
    }
};
</script>

<style>
</style>