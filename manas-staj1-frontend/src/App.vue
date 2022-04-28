<template>
    <my-navbar></my-navbar>
    <my-container>
      <router-view/>
    </my-container>
    <my-footer></my-footer>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
}
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
  color: #000;
}
</style>

<script>
export default {

}
</script>