import { createApp } from 'vue'
import App from './App.vue'

import router from './routes.js'
import './assets/style.css';

const app = createApp(App)

app.use(router)

console.log('Router initialized:', router);
app.mount('#app')

