<template>
    <div @click="this.$store.commit('switchModalState')" class="cart-wrapper primary">
        <div class="cart" @click.stop>
            <span @click="this.$store.commit('switchModalState')" class="close"></span>
            <div class="cart-title">
                <h1>Мои Заказы</h1>
            </div>
            <div class="cart-item">
                <div class="card" style="width: 18rem;" v-for="(order, idx) in orders" :key="idx">
                    <div class="card-body" v-for="item in order.orders" :key="item.name">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">count: {{item.count}}</p>
                    </div>
                    <p class="card-text">status: {{order.status}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my-orders',
        data() {
            return {
                status: '',
                orders: [],
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
        created() {
            fetch(`${this.$store.state.url}/api/status/order`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': localStorage.getItem('token')
                    }
                })
                    .then(res => res.json())
                    .then(data => this.orders = data)
            
        },
        methods: {
            increase(idx) {
                return this.$store.commit('increaseCount', idx)
            },
            decrease(item, idx) {
                if (item.count === 1) return;
                return this.$store.commit('decreaseCount', idx)
            },
            removeFromCart(idx) {
                return this.$store.commit('removeFromCart', idx)
            },
            order() {
                return this.$store.commit('order', this.$store.state.cartItems.reduce((acc, item) => acc + item.count * item.price, 0));
            },    
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
        z-index: 101;
    }
    .cart {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 500px;
        background-color: #1E2833;
        z-index: 100;
        overflow-y: scroll;
        padding: 10px 0 30px;
    }
    .cart-title {
        color: white;
    }
    .cart-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .card {
        margin: 5px 0;
    }
    .card-body {
        border-bottom: 1px solid #3C3C43;
    }
    /* .card-remove, .card-remove::after, .card-remove::before {
        position: absolute;
        content: '';
        height: 2px;
        width: 20px;
        background-color: #1E2833;
    }
    .card-remove {
        top: 10px;
        right: 30px;
        width: 0;
        height: 0;
        cursor: pointer;
    } */
    /* .card-remove::after {
        transform: rotateZ(45deg);
    }
    .card-remove::before {
        transform: rotateZ(135deg);
    } 
    .card {
        border-radius: 15px;
        overflow: hidden;
    } */
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
    .btn-wrap {
        background-color: #3C3C43;
        height: 32px;
        width: 80px;
        padding: 0 1px;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .btn-wrap > button {
        width: 30px;
        height: 30px;
        border-radius: 50%;

    }
    .total-count {
        color: white;
        font-size: 32px;
        font-weight: bold;
    }
</style>