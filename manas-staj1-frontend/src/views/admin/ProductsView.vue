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
                    <div class="type">
                        <div class="title">Type</div>
                        <select name="select" id="filter" v-model="selected" class="form-select" aria-label="Default select example" required>
                            <option value="1" selected>Все</option>
                            <option value="2">Выпечки и салаты</option>
                            <option value="3">Десерты</option>
                            <option value="4">Напитки</option>
                        </select>
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
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, idx) in productsList" :key="idx" class="product">
                        <th scope="row">{{idx + 1}}</th>
                        <td>{{item.name}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.count}}</td>
                        <td><button class="edit" @click="openModal(item.id)">Edit</button></td>
                        <td><button class="del" @click="del(item.id)">Del</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal-wrapper" v-if="this.$store.state.isEditModalOpened">
            <div class="modal">
                <div class="modal-close" @click="switchModal">
                    <img src="../../assets/close.png" alt="">
                </div>
                <form id="edit">
                    <div class="item-name">
                        <input v-model="itemName" type="text" class="name" placeholder="name">
                    </div>
                    <div class="item-price">
                        <input v-model="itemPrice" type="text" class="price" placeholder="price">
                    </div>
                    <div class="item-count">
                        <input v-model="itemCount" type="text" class="count" placeholder="count">
                    </div>
                    <div class="item-photoLink">
                        <input v-model="itemPhotoLink" type="text" class="photoLink" placeholder="name">
                    </div>
                    <div class="item-description">
                        <input v-model="itemDescription" type="text" class="descr" placeholder="description">
                    </div>
                    <div class="item-type">
                            <select name="select" id="filter" v-model="itemSelected" class="form-select" aria-label="Default select example" required>
                                <option value="1" selected>Все</option>
                                <option value="2">Выпечки и салаты</option>
                                <option value="3">Десерты</option>
                                <option value="4">Напитки</option>
                            </select>
                    </div>
                    <button class="save" type="submit" @click.prevent="save">Save</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'ProductsView',
        data() {
            return {
                title: '',
                price: 0,
                img: '',
                description: '',
                productsList: this.$store.state.productsList,
                selected: '',
                itemName: '',
                itemPrice: 0,
                itemCount: 0,
                itemDescription: '',
                itemPhotoLink: '',
                itemSelected: ''
            }
        },
        mounted() {
            this.getProducts();
        },
        // updated() {
        //     this.getProducts();
        // },
        methods: {
            getProducts() {
                fetch(`${this.$store.state.url}/api/admin/products/`, {
                    headers: {
                        'token': localStorage.getItem('token')
                    },
                })
                    .then(response => response.json())
                    .then(data => this.productsList = data)
            },
            addProduct() {
                const data = {name: this.title, price: this.price, count: 1, photoLink: this.img, description: this.description, type: this.selected};
                console.log(JSON.stringify(data))

                fetch(`${this.$store.state.url}/api/admin/products`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': localStorage.getItem('token')
                    },
                    body: JSON.stringify(data)
                    
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .then(data => this.productsList = data)

                this.title = ''
                this.price = 0
                this.img = ''
                this.description = ''
            },
            openModal(id) {
                this.switchModal(id);
                this.getItem();
            },
            switchModal(id) {
                return this.$store.commit('switchEditModal', id)
            },
            getItem() {
                fetch(`${this.$store.state.url}/api/admin/products/${this.$store.state.modalId}`, {
                    headers: {
                        'token': localStorage.getItem('token')
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        this.itemName = data.name;
                        this.itemPrice = data.price;
                        this.itemCount = data.count;
                        this.itemDescription = data.description;
                        this.itemPhotoLink = data.photoLink;
                    })
            },
            del(id) {
                fetch(`${this.$store.state.url}/api/admin/products/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': localStorage.getItem('token')
                    }
                    
                })
                    .then(response => response.json())
                    .then(data => this.productsList = data);
            },
            save() {
                const data = {
                    name: this.itemName,
                    price: this.itemPrice,
                    count: this.itemCount,
                    photoLink: this.itemPhotoLink,
                    description: this.itemDescription,
                    type: this.itemSelected
                };
                fetch(`${this.$store.state.url}/api/admin/products/${this.$store.state.modalId}`, {
                    method: 'PATCH',
                    headers: {
                            'Content-Type': 'application/json',
                            'token': localStorage.getItem('token')
                        },
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then(data => this.$store.commit('setProducts', data));

                this.productsList = this.productsList.map(item => {
                    if (item.id === this.$store.state.modalId) {
                        data.id = item.id;
                        return data;
                    }
                    return item;
                })

                this.switchModal();
                //this.getProducts();
            }
        }
    }
</script>

<style scoped>
    .edit, .del, .save {
        padding: 5px 10px;
        border-radius: 15px;
        background-color: #505050;
        color: white;
    }
    .type {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
    }
    .product::after {
        content: url('../../assets/orders/trash.svg');
        position: absolute;
        right: 10px;
    }
    #filter {
        background-color: #505050;
        color: white;
    }
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

    .modal-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.modal {
    max-width: 400px;
    max-height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    background-color: #1E2833;
    border-radius: 15px;
}

.modal div {
    margin: 5px 0;
}

.modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
}

.modal-close > img {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.edit input {
    border-radius: 10px;
    padding: 5px 10px
}

</style>