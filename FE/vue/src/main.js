import { createApp } from 'vue'
import App from './App.vue'

import router from './routes.js'

const app = createApp(App)

app.use(router)

console.log('Router initialized:', router);
app.mount('#app')

