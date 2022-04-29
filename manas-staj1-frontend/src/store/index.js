import { createStore } from 'vuex'

export default createStore({
  state: {
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
    }
  },
  actions: {
  },
  modules: {
  }
})
