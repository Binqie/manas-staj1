import { createStore } from 'vuex'

export default createStore({
  state: {
      isCartOpened: false,
      productsList: [],
      cartItems: [
        {name: 'Pizza', price: 120, count: 2},
        {name: 'Coca-cola 0.5l', price: 100, count: 1},
        {name: 'Simit', price: 20, count: 3},
        {name: 'Simit', price: 20, count: 3},
      ],
      orders: []
  },
  getters: {
  },
  mutations: {
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
    }
  },
  actions: {
  },
  modules: {
  }
})
