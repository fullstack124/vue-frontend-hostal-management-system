import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "vue-awesome-paginate/dist/style.css";
import App from './App.vue'
import router from './router'
// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate)

app.mount('#app')
