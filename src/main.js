import { createApp } from 'vue'
//import axios from 'axios';
import App from './App.vue'
import router from './router'
//import VCalendar from 'v-calendar';
//createApp(App).use(axios).mount('#app')
createApp(App).use(router).mount('#app')