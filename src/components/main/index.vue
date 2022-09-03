<template>
  <div>
    <!-- <router-view></router-view> -->
    <Movie/>
    <Book/>
    <Study/>
    <Programming/>
    <Messaroud/>
    
  </div>
</template>

<script>
import Movie from '@/pages/movie'
import Book from '@/pages/book'
import Study from '@/pages/study'
import Programming from '@/pages/programming'
import Messaroud from '@/pages/messaround'

export default {
  components:{
    Movie,
    Book,
    Study,
    Programming,
    Messaroud
  }
};
</script>

<style>
</style>