<template>
<!-- 影视剧模块的 -->
  <div>
      <Programsite
        :frontlist="frontlist"
        :backendlist="backendlist"
        :ittoollist="ittoollist"
        :documentationlist="documentationlist"
      />
  </div>
</template>

<script>
import Programsite from './programsite'

export default {
    components:{
        Programsite
    },
    data(){
        return{
            frontlist:[
                 { id: "001", title: "Vue.js", url: "https://cn.vuejs.org/", ps: 'vue官方'},
                 { id: "002", title: "W3shcool", url: "https://www.w3school.com.cn/", ps: ''},
                 { id: "003", title: "ES6入门教程", url: "https://es6.ruanyifeng.com/", ps: '阮一峰的es6'},
                 { id: "004", title: "Vant 3", url: "https://vant-ui.github.io/vant/#/zh-CN", ps: '移动端的Vue组件库'},
                 { id: "005", title: "前端面试总结", url: "https://blog.csdn.net/weixin_43638968/article/details/107518108", ps: ''},
                //  { id: "", title: "", url: "", ps: ''},
            ],
            backendlist:[
                { id: "001", title: "力扣", url: "https://leetcode-cn.com/", ps: 'LeetCode'},
                { id: "002", title: "Java全栈知识", url: "https://www.pdai.tech/", ps: 'Java全栈知识体系分享'},
                { id: "003", title: "Node.js技术栈", url: "https://www.nodejs.red/#/", ps: ''},
                { id: "004", title: "SpringCloud中文导航", url: "http://springcloud.fun/", ps: 'SpringCloud的博客、作品等'},
                { id: "005", title: "JavaGuide", url: "https://github.com/Snailclimb/JavaGuide", ps: 'Java学习+面试指南'},
            ],
            ittoollist:[
                { id: "001", title: "iconfont图标库", url: "https://www.iconfont.cn/", ps: ''},
                { id: "002", title: "程序员的工具箱", url: "https://tool.lu/", ps: '开发经常用到的在线工具'},
                { id: "003", title: "Linux手册", url: "https://wangchujiang.com/linux-command/", ps: 'Linux命令在线查询'},
                { id: "004", title: "菜鸟工具箱", url: "https://c.runoob.com/", ps: '菜鸟教程的工具箱'},
            ],
            documentationlist:[
                { id: "001", title: "bootstrap3文档", url: "https://v3.bootcss.com/", ps: ''},
                { id: "002", title: "ES6中文文档", url: "http://caibaojian.com/es6/", ps: ''},
                { id: "003", title: "uni-app文档", url: "https://uniapp.dcloud.net.cn/", ps: ''},
                { id: "004", title: "React中文文档", url: "https://zh-hans.reactjs.org/docs/getting-started.html", ps: ''},
                { id: "005", title: "axios中文文档", url: "http://www.axios-js.com/zh-cn/docs/", ps: ''},
            ]
        }
    }
};
</script>

<style>
</style>