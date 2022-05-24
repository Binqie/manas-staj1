<template>
    <div class="products">
        <form class="py-5 px-5" id="form">
            <div class="container">
                <h2>Добавить новый продукт</h2>
                <div class="row row-cols-2">
                    <div class="input col">
                        <div class="title">Title: </div>
                        <input type="text" name="title" id="title" v-model="title">
                    </div>
                    <div class="input col">
                        <div class="title">Price</div>
                        <input type="number" name="price" id="price" v-model="price">
                    </div>
                    <div class="input col">
                        <div class="title">Description</div>
                        <textarea name="description" id="description" cols="30" rows="10" v-model="description"></textarea>
                    </div>
                    <div class="input col">
                        <div class="title">Image link</div>
                        <input type="text" accept="image/*" name="image" id="image" v-model="img">
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-light rounded-pill mt-4 px-4 py-2" @click.prevent="addProduct">Submit</button>
        </form>
        <div class="products-list my-5">
            <h2 class="my-5">Products List</h2>
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, idx) in productsList" :key="idx">
                        <th scope="row">{{idx + 1}}</th>
                        <td>{{item.name}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.count}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                price: 0,
                img: '',
                description: '',
                productsList: []
            }
        },
        created() {
            fetch('http://localhost:3000/productList')
                .then(response => response.json())
                .then(data => this.productsList = data)
        },
        methods: {
            addProduct() {
                const data = {name: this.title, price: this.price, count: 1, img: this.img, description: this.description};
                console.log(JSON.stringify(data))

                fetch('http://localhost:3000/addProduct', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                    
                })
                    .then(response => response.json())
                    .then(data => this.productsList = data);

                this.title = ''
                this.price = 0
                this.img = ''
                this.description = ''
            }
        }
    }
</script>

<style scoped>
    form {
        background: #1E2833;
        border-radius: 20px;
        color: white;
    }
    form h2 {
        margin-bottom: 30px;
    }
    form input,
    form textarea {
        background-color: #505050;
        opacity: 1;
        border-radius: 20px;
        height: 40px;
        color: white;
        padding: 5px 20px;
    }
    form textarea {
        min-height: 100px;
        overflow: hidden;
    }
    .input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
        padding: 0 30px;
    }
    input[type="file"] {
        width: auto;
        height: auto;
        padding: 0;
        opacity: 0.5;
        color: white;
        position: relative;
    }
</style>