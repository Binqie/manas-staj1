<template>
    <div class="products">
        <form class="py-5 px-5">
            <div class="container">
                <h2>Добавить новый продукт</h2>
                <div class="row row-cols-2">
                    <div class="input col">
                        <div class="title">Title: </div>
                        <input type="text">
                    </div>
                    <div class="input col">
                        <div class="title">Price</div>
                        <input type="number">
                    </div>
                    <div class="input col">
                        <div class="title">Description</div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="input col">
                        <div class="title">Img</div>
                        <input type="file" accept="image/*" name="" id="">
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-light rounded-pill mt-4 px-4 py-2">Submit</button>
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
                    <tr v-for="(item, idx) in this.$store.state.productsList" :key="idx">
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
    export default {}
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