<template>
    <my-navbar></my-navbar>
    <my-container>
      <router-view/>
    </my-container>
    <my-footer></my-footer>
</template>

<style>
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import MyNavbar from './components/Navbar.vue';
import MyFooter from './components/Footer.vue';
import MyContainer from './components/Container.vue';

export default {
  components: {
    MyNavbar,
    MyFooter,
    MyContainer
  }
}
</script>