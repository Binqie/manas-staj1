import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import components from '@/components'

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
})

app.use(store).use(router).mount('#app')
