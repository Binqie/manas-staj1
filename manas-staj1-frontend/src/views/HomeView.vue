<template>
  <div class="home">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img id="homeImg" src="https://media.istockphoto.com/photos/two-people-eating-traditional-turkish-food-lahmacun-and-kiymali-pide-picture-id1292937799?b=1&k=20&m=1292937799&s=170667a&w=0&h=6El31VOVZPl96EKK9y4nhpMX0s-hAwAQYjwskNMhX5k=" class="d-block" alt="...">
        </div>
        <div class="carousel-item">
          <img id="homeImg" src="https://images.unsplash.com/photo-1598110750624-207050c4f28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2lzaCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="d-block" alt="...">
        </div>
        <div class="carousel-item">
          <img id="homeImg" src="https://images.unsplash.com/photo-1620374230614-0ba831289903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHR1cmtpc2glMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="d-block" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="trend_foods">
      <h1>Today's Trending Food</h1>
      <div class="trend_product">
        <div class="tp_img">
          <img v-bind:src="this.popularProducts[this.currentPage-1].photoLink" />
        </div>
        <div class="tp_data">
          <h2 id="product_title">{{this.popularProducts[this.currentPage-1].name}}</h2>
          <div>
            <a id="mark" class="text-warning">{{this.popularProducts[this.currentPage-1].price}}</a>
            <button id="addToBucket" class="btn btn-info"><svg width="23" height="23" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.9463 6.15069C44.8048 5.98527 44.5975 5.89011 44.3793 5.89011H9.11479L7.67686 1.07112C7.5817 0.754241 7.29073 0.537506 6.96039 0.537506H1.44536C1.03232 0.537506 0.697998 0.871826 0.697998 1.28487C0.697998 1.69791 1.03232 2.03223 1.44536 2.03223H6.40336L15.4883 32.4768C15.4893 32.4802 15.4923 32.4832 15.4933 32.4867L16.6218 36.3252C15.9093 37.0332 15.4679 38.0132 15.4679 39.0939C15.4679 41.2513 17.2222 43.0066 19.3781 43.0066C21.4647 43.0066 23.1692 41.3584 23.2743 39.2942H33.0692C33.0687 39.3216 33.0652 39.3485 33.0652 39.3764C33.0652 41.5318 34.8186 43.2856 36.9734 43.2856C39.1283 43.2856 40.8821 41.5318 40.8821 39.3764C40.8821 37.221 39.1283 35.4672 36.9734 35.4672C35.3796 35.4672 34.0079 36.4278 33.4006 37.7995H23.0611C22.8697 37.2539 22.5613 36.7522 22.1403 36.3312C21.4024 35.5933 20.4219 35.1862 19.3796 35.1862C19.3791 35.1862 19.3786 35.1862 19.3786 35.1862C18.8659 35.1862 18.3771 35.2878 17.9282 35.4682L17.2057 33.0104H40.4601C40.8293 33.0104 41.1432 32.7408 41.1985 32.3761L45.1182 6.75008C45.1511 6.53484 45.0883 6.31611 44.9463 6.15069ZM36.9734 36.9624C38.3042 36.9624 39.3874 38.0456 39.3874 39.3769C39.3874 40.7082 38.3042 41.7914 36.9734 41.7914C35.6426 41.7914 34.56 40.7082 34.56 39.3769C34.56 38.0456 35.6426 36.9624 36.9734 36.9624ZM19.3786 36.6814H19.3791C20.0223 36.6814 20.6271 36.9325 21.0825 37.3884C21.5384 37.8443 21.789 38.4507 21.789 39.0949C21.789 40.4282 20.7074 41.5129 19.3776 41.5129C18.0458 41.5129 16.9621 40.4282 16.9621 39.0949C16.9626 37.7641 18.0463 36.6814 19.3786 36.6814ZM39.8179 31.5162H16.7658L15.3528 26.7091C15.3348 26.6483 15.3079 26.593 15.277 26.5407L9.56071 7.38483H43.5089L39.8179 31.5162Z" fill="black"/>
              </svg>
            </button>
          </div>
          <div class="product_footer">
            <h4 id="product_title">Select Quantity</h4>
            <nav>
              <ul class="pagination pagination-sm">
                <button v-if="currentPage == 1" class="page-item active">
                    <span class="page-link">1</span>
                  </button>
                <button @click="changePage(1)" v-else class="page-item"><a class="page-link" >1</a></button>
                <button v-if="currentPage == 2" class="page-item active">
                    <span class="page-link">2</span>
                  </button>
                <button @click="changePage(2)" v-else class="page-item"><a class="page-link" >2</a></button>
                <button v-if="currentPage == 3" class="page-item active">
                    <span class="page-link">3</span>
                  </button>
                <button @click="changePage(3)" v-else class="page-item"><a class="page-link" >3</a></button>
                <button v-if="currentPage == 4" class="page-item active">
                    <span class="page-link">4</span>
                  </button>
                <button @click="changePage(4)" v-else class="page-item"><a class="page-link" >4</a></button>
                <button v-if="currentPage == 5" class="page-item active">
                    <span class="page-link">5</span>
                  </button>
                <button @click="changePage(5)" v-else class="page-item"><a class="page-link" >5</a></button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="searchBlock">
      <input v-model="searchWord" class="search" placeholder="Искать">
      <select id="filter" v-model="selected" class="form-select" aria-label="Default select example">
          <option selected>Все</option>
          <option value="2">Выпечки и салаты</option>
          <option value="3">Десерты</option>
          <option value="4">Напитки</option>
        </select>
      <button id="searchBtn" @click="search()" class="btn btn-info">Искать </button>
    </div>
    <div class="productList" v-for="(item, idx) in this.allProducts" :key="idx">
      <div class="productCard">
        <div class="productImg">
          <img v-bind:src="item.photoLink" alt="dasd" />
        </div>
        <h4>{{item.name}}</h4>
        <p>{{item.price}} сом</p>
        <div class="btn-wrap">
          <button class="decrease" @click="decrease(item, idx)">-</button>
          <span style="color: white">{{2+4}}</span>
          <button class="increase" @click="increase(idx)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        currentPage: 1,
        allProducts: [],
        popularProducts: this.$store.state.productsList.filter((item, id) => id < 5),
        searchWord: "",
        selected: "Все",
      }
    },
    created() {
      this.allProducts = this.$store.state.productsList;
      fetch(`${this.$store.state.url}/api/top/five`)
        .then(data => {
          return data.json();
        })
        .then(post => {
          this.popularProducts = post
          console.log(this.popularProducts)
        });
      fetch(`${this.$store.state.url}/api/products`)
        .then(data => {
          return data.json();
        })
        .then(post => {
          this.allProducts = post
          console.log(this.allProducts)
        });
    },
    methods: {
      increase(idx) {
        return this.$store.commit('increaseCount', idx)
      },
      decrease(item, idx) {
        if (item.count === 1) return;
        return this.$store.commit('decreaseCount', idx)
      },
      async search() {
        let categoryId;
        if (this.selected == "Все") {
          categoryId = 1;
          console.log(categoryId)
        } else {
          categoryId = this.selected
          console.log(categoryId)
        }
        fetch(`${this.$store.state.url}/api/search`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.searchWord,
            categoryId: categoryId
            })
        })
          .then(res => res.json())
          .then(res => {
            this.allProducts = res
            console.log(this.allProducts)
          })
      },
      changePage(n) {
        this.currentPage = n
      }
    }
  }
</script>

<style>
  #carouselExampleControls {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
  #homeImg {
    width: 100%;
    height: 500px;
  }
  #addToBucket {
    width: 50px;
    height: 40px;
    margin-left: 35px;
    margin-top: -10px;
  }
  #filter {
    width: 200px;
    height: 45px;
    border-radius: 25px;
    border: 1px solid gray;
  }
  #searchBtn {
    border-radius: 25px;
    width: 120px;
  }
  .searchBlock {
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  .tp_img {
    width: 300px;
    height: 250px;
  }
  .tp_img img {
    width: 300px;
    height: 250px;
  }
  .trend_foods {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
  .trend_product {
    display: flex;
  }
  .tp_data {
    margin-left: 50px;
  }
  #mark {
    font-size: 26px;
    text-decoration: none;
  }
  #product_title {
    text-align: left;
  }
  .product_footer {
    margin-top: 40px;
  }
  .search {
    width: 240px;
    height: 45px;
    border-radius: 25px;
    border: 1px solid gray;
    padding-left: 10px;
  }
  .productList {
    margin-top: 20px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .productCard {
    width: 30%;
    height: 400px;
    border: 3px solid #007bff;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }
  .productCard img {
    width: 100%;
    height: 280px;
  }
  .btn-wrap {
    margin-left: auto;
    margin-right: auto;
    margin-top: -10px;
    background-color: #3C3C43;
    height: 32px;
    width: 80px;
    padding: 0 1px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-wrap>button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
</style>
