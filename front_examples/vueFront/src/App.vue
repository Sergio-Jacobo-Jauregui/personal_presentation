<template>
  <div class="wrapper">
    <Menu/>

    <Home/>

    <Footer/>

    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
  </div>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Home from './components/Home.vue'
  import Menu from './components/Menu.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {Home, Menu, Footer}
  }
</script>

<style scoped>
</style>
