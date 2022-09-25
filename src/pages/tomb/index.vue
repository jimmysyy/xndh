<template>
<!-- 影视剧模块的 -->
  <div>
      <Tombsite
      :tombList="tombList"
      />
  </div>
</template>

<script>
import Tombsite from './tombsite'

export default {
    components:{
        Tombsite
    },
    data(){
        return{
            tombList:[
                // { id: "", title: "", url: "", ps: ''},
                { id: "001", title: "剧白白", url: "https://jubaibai.cc/", ps: ''},
                { id: "002", title: "厂长资源", url: "https://qianoo.cn/", ps: ''},
            ],
        }
    }
};
</script>

<style>
</style>