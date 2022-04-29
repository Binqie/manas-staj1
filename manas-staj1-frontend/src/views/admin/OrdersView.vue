<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Order</th>
                <th scope="col">Customer</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(order, idx) in this.$store.state.orders" :key="order.name">
                <th scope="row">{{idx + 1}}</th>
                <td>{{order.name}} x{{order.count}}</td>
                <td>{{order.customer}}</td>
                <td>{{order.date}}</td>
                <td :class="order.status === 'done' ? 'table-success' : 'table-warning'">{{order.status}}</td>
                <div @click="deleteItem(order.date)" class="delete">
                    <img src="../../assets/orders/trash.svg" alt="">
                </div>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            deleteItem(id) {
                return this.$store.commit('deleteItem', id)
            }
        },
    }
</script>

<style scoped>
    .delete {
        cursor: pointer;
    }
</style>