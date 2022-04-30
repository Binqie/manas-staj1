<template>
    <nav class="navbar-admin">
        <div class="orders">
            <router-link active-class="router-link-exact-active" to="/admin/products">Продукты</router-link>
        </div>
        <div class="products">
            <router-link to="/admin/orders">Заказы</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'admin-navbar'
    }
</script>

<style scoped>
    .navbar-admin {
        display: flex;
        justify-content: center;
        align-self: flex-start;
    }
    .navbar-admin>div {
        margin: 0 10px;
    }
    a {
        text-decoration: none;
        color: black;
    }
</style>