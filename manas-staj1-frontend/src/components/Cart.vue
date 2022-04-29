<template>
    <div @click="this.$store.commit('switchCartState')" class="cart-wrapper primary">
        <div class="cart" @click.stop>
            <span @click="this.$store.commit('switchCartState')" class="close"></span>
            <div class="cart-title">
                <h1>Корзина</h1>
            </div>
            <div class="cart-items">
                <div class="card mb-3" style="max-width: 400px;" v-for="(item, idx) in this.$store.state.cartItems" :key="idx">
                    <div class="row g-0">
                        <div class="col-md-3">
                            <img src="../assets/cart/plov.png" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">{{item.name}}</h5>
                                <p class="card-text"><small class="text-muted">{{item.price * item.count}} сом</small></p>
                            </div>
                        </div>
                        <div class="col-md-2 card-count">
                            <span>{{item.count}}</span>
                            <div class="btn-wrap">
                                <button class="decrease" @click="decrease(idx)">-</button>
                                <button class="increase" @click="increase(idx)">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-light cart-btn" style="border-radius: 20px;">Заказать</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my-cart',
        data() {
            return {
                variant: 'dark',
                variants: [
                    'transparent',
                    'white',
                    'light',
                    'dark',
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                ]
            }
        },
        methods: {
            increase(idx) {
                return this.$store.commit('increaseCount', idx)
            },
            decrease(idx) {
                if (idx === 0) return;
                return this.$store.commit('decreaseCount', idx)
            }
        }
    }
</script>

<style scoped>
    .cart-wrapper {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 10;
    }
    .cart {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 500px;
        background-color: #1E2833;
        opacity: 0.8;
        z-index: 100;
    }
    .cart-title {
        color: white;
    }
    .cart-items {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .close,
    .close::after,
    .close::before {
        position: absolute;
        content: '';
        height: 2px;
        width: 20px;
        background-color: #fff;
        top: 10px;
        right: 10px;
    }
    .close {
        top: 20px;
        right: 20px;
        height: 0;
        width: 0;
        cursor: pointer;
    }
    .close::after {
        left: -5px;
        transform: rotateZ(135deg);
    }
    .close::before {
        left: -5px;
        transform: rotateZ(45deg);
    }
</style>