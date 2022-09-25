<template>
  <div>
    
    <Fmjimmy />
    <Movie  />
    <Book />
    <Study />
    <Programming />
    <Messaroud />
    <Tomb />
    
    
  </div>
</template>

<script>
import Movie from '@/pages/movie'
import Book from '@/pages/book'
import Study from '@/pages/study'
import Programming from '@/pages/programming'
import Messaroud from '@/pages/messaround'
import Fmjimmy from '@/pages/fmjimmy'
import Tomb from '@/pages/tomb'

export default {
  
  components:{
    Movie,
    Book,
    Study,
    Programming,
    Messaroud,
    Fmjimmy,
    Tomb
  },
  // mounted(){
  //   this.path = this.$route.path;
  // },
  // watch:{
  //   $route(to,from){
  //     this.path = to.path
  //   }
  // }
  
};
</script>

<style>
</style>