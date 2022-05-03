import { createStore } from 'vuex'

export default createStore({
  state: {
      isCartOpened: false,
      productsList: [
        {name: 'Pizza', price: 120, count: 2},
        {name: 'Coca-cola 0.5l', price: 100, count: 1},
        {name: 'Simit', price: 20, count: 3},
        {name: 'Sandwich', price: 60, count: 3},
        {name: 'Coffee', price: 18, count: 2},
        {name: 'Coca-cola 0.5', price: 35, count: 1},
        {name: 'Fanta 0.5', price: 35, count: 3},
        {name: 'Albeni', price: 20, count: 3},
        {name: 'Snikers', price: 25, count: 2},
        {name: 'Pepsi', price: 35, count: 1},
        {name: 'Legenda', price: 25, count: 3},
        {name: 'Kit-Kat', price: 25, count: 3},
      ],
      cartItems: [
      ],
      orders: [
        {name: 'Pizza', price: 120, count: 2, customer: 'Argo', date: Date.now(), status: 'ongoing'},
        {name: 'Coca-cola 0.5l', price: 100, count: 1, customer: 'Afa', date: Date.now() + 5987, status: 'done'},
        {name: 'Simit', price: 20, count: 3, customer: 'Nurs', date: Date.now() + 13421, status: 'ongoing'},
        {name: 'Kahve', price: 18, count: 1, customer: 'Meerim', date: Date.now() + 12345, status: 'done'},
        {name: 'Puding', price: 25, count: 1, customer: 'Kanykei', date: Date.now() + 13478, status: 'ongoing'},
        {name: 'Pizza', price: 120, count: 2, customer: 'Argo', date: Date.now() + 2344, status: 'ongoing'},
        {name: 'Coca-cola 0.5l', price: 100, count: 1, customer: 'Afa', date: Date.now() + 5983, status: 'done'},
        {name: 'Simit', price: 20, count: 3, customer: 'Nurs', date: Date.now() + 13422, status: 'done'},
        {name: 'Kahve', price: 18, count: 1, customer: 'Meerim', date: Date.now() + 12332, status: 'ongoing'},
        {name: 'Puding', price: 25, count: 1, customer: 'Kanykei', date: Date.now() + 13465, status: 'done'},
      ]
  },
  getters: {
  },
  mutations: {
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
    addToCart(state, item) {
      if (state.cartItems.some(el => el.name === item.name)) {
        state.cartItems.splice(state.cartItems.indexOf(item), 1);
        return;
      }
      item.count = 1;
      state.cartItems.push(item);
    }
  },
  actions: {
  },
  modules: {
  }
})
