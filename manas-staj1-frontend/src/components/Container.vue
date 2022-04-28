<template>
  <div class="container">
      <slot>
          
      </slot>
  </div>
</template>

<script>
export default {
    name: "my-container" 
}
</script>

<style scoped>
.container {
    max-width: 1280px;
    margin: 0 auto;
}
</style>