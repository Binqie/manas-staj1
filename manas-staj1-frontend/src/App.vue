<template>
  <div class="app__inner">
    <my-navbar></my-navbar>
    <my-container>
      <router-view/>
    </my-container>
    <my-footer></my-footer>
  </div>
</template>

<style>
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden;
  }
  .app__inner {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  nav {
    padding: 30px;
  }
  nav a {
    color: #2c3e50;
  }
  nav a.router-link-exact-active {
    color: #2c3e50;
    font-weight: bold;
  }
</style>

<script>
  export default {
    data() {
      return {
      }
    },
    computed: {
      isCartOpened() {
        return this.$store.state.isCartOpened;
      }
    },
    watch: {
      isCartOpened() {
        if (this.isCartOpened) {
          document.documentElement.style.overflow = 'hidden';
        } else {
          document.documentElement.style.overflow = null;
        }
      }
    }
  }
</script>