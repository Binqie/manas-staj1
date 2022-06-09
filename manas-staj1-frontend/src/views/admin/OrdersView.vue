<template>
    <div class="orders">
        <div class="user" v-for="user of orders" :key="user.user_id">
            <h3>Customer: {{user.user_name}}</h3>
            <div class="card-wrapper">
                <div class="card" style="width: 18rem;" v-for="(order, idx) in user.orders" :key="idx">
                    <div class="card-body">
                        <h5 class="card-title">{{order.name}}</h5>
                        <p class="card-text">count: {{order.count}}</p>
                    </div>
                </div>
            </div>
            <h3>Price: {{user.price}}</h3>
            <a href="#" class="btn btn-primary btn-done" :class="{ 'btn-danger': user.status === 'ready'}" @click="doneOrder(user.group_id)">Done</a>
            <a href="#" class="btn btn-primary" @click="deleteItem(user.group_id)">Delete</a>
            <hr>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                orders: []
            }
        },
        methods: {
            deleteItem(id) {
                console.log(id)
                fetch(`${this.$store.state.url}/api/admin/orders/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': localStorage.getItem('token') 
                    },
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        this.$store.commit('setOrders', data)
                        this.orders = data
                    })
            },
            doneOrder(id) {
                console.log(id)
                fetch(`${this.$store.state.url}/api/admin/orders/status/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': localStorage.getItem('token') 
                    },
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        this.$store.commit('setOrders', data)
                    })
                
            }
        },
        created() {
            fetch(`${this.$store.state.url}/api/admin/orders/index`, {
                headers: {
                    'token': localStorage.getItem('token')
                }
            })
            .then(response => response.json())
            .then(data => {
                this.orders = data
                console.log(this.orders)
            })
        }
    }
</script>

<style scoped>
    .delete {
        cursor: pointer;
    }
    .user { 
        margin-top: 30px;
    }
    .user > a {
        margin: 5px;
    }
    .card-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        grid-gap: 15px;
        padding: 20px;
    }
</style>