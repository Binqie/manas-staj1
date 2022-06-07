import { createStore } from 'vuex'

export default createStore({
  state: {
      hasToken: localStorage.getItem('token') !== null ? true : false,
      modalId: 1,
      isAdmin: localStorage.getItem('isAdmin') == 'true',
      authorised: false,
      loggedIn: localStorage.getItem('loggedIn') != null,
      authWindowOpened: false,
      url: 'https://52a2-212-42-96-202.eu.ngrok.io',
      isModalOpened: false,
      isCartOpened: false,
      productsList: [],
      cartItems: [],
      orders: []
  },
  getters: {
  },
  mutations: {
    order(state) {

      const orders = state.cartItems.map(item => {
        let newItem = {};
        newItem.product_id = item.id;
        newItem.count = item.count;
        return newItem;
      })


      fetch(`${state.url}/api/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
        },
        body: JSON.stringify({orders: orders})
      })
        .then(response => response.json())
        .then(data => {
          state.cartItems = [];
          state.orders = data;
          console.log(data)
        })
    },
    chooseMethod(state, method) {
      if (method === 'signin') {
        state.authorised = false;
      } else {
        state.authorised = true;
      }
    },
    loggedIn(state, isAdmin) {
      state.authWindowOpened = false;
      state.loggedIn = true;
      state.authorised = true;
      if (isAdmin) {
        state.isAdmin = true;
      }
    },
    openAuth(state) {
      state.authWindowOpened = true;
    },
    closeAuth(state) {
      state.authWindowOpened = false;
    },
    setProducts(state, data) {
      state.productsList = data;
    },
    setOrders(state, data) {
      state.orders = data;
    },
    deleteItem(state, id) {
      state.orders = state.orders.filter(order => order.date !== id);

    },
    switchCartState(state) {
      state.isCartOpened = !state.isCartOpened;
    },
    increaseCount(state, id) {
      state.cartItems.map((item, index) => {
        if (index === id) return ++item.count;
        return item;
      })  
    },
    decreaseCount(state, id) {
      state.cartItems.map((item, index) => {
        if (index === id) return --item.count;
        return item;
      })
    },
    removeFromCart(state, id) {
      state.cartItems = state.cartItems.filter((item, index) => index !== id);
    },
    switchModal(state, id) {
      state.modalId = id;
      state.isModalOpened = !state.isModalOpened;
    },
    addToCart(state, item) {
      item.count = 1;
      state.cartItems = [...state.cartItems, item];
    }
  },
  actions: {
  },
  modules: {
  }
})
