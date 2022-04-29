<template>
    <my-container>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="burger-item navbar-brand">
                        <img src="../assets/logo.png" alt="">
                        <span>Kantin</span>
                    </div>
                    <ul class="burger-item nav justify-content-center">
                        <li class="nav-item">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin">Admin</router-link>
                        </li>
                    </ul>
                    <div @click="switchCart" class="burger-item navbar-cart">
                        <a href="" class="cart w-40" @click.prevent>
                            <img class="cart-img" src="../assets/navbar/cart.svg" alt="">
                        </a>
                    </div>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        <my-cart v-show="this.$store.state.isCartOpened"></my-cart>
    </my-container>
</template>

<script>
    export default {
        name: 'my-navbar',
        data() {
            return {
            }
        },
        methods: {
            switchCart() {
                return this.$store.commit('switchCartState');
            }
        }
    }
</script>

<style scoped>
    .navbar-collapse {
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .navbar-brand {
        margin-right: 0;
        display: flex;
        align-items: center;
    }
    .navbar-brand > img {
        width: 30px;
        height: 30px;
        margin-right: 5px;
    }
    .nav-item {
        margin: 0 5px;
    }
    .nav-item>a {
        text-decoration: none;
    }
    .nav-item>a:focus,
    .nav-item>a:active {
        color: #000;
        font-weight: bold;
    }
    .cart-img {
        width: 30px;
        height: 30px;
    }
    .collapse:not.show {
        display: flex;
        justify-content: center;
    }
    .burger-item {
        margin-bottom: 20px;
    }
</style>