<template>
  <div class="admin">
    <admin-navbar></admin-navbar>
    <my-container>
      <router-view/>
    </my-container>
  </div>
</template>

<script>
  import AdminNavbar from '../components/AdminNavbar.vue'
  export default {
    components: {
      AdminNavbar
    },
    
  }
</script>

<style scoped>
.admin {
  margin-top: 100px;
}
</style>