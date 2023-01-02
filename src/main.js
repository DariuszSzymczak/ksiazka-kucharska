import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as normalize from "normalize.css"

let app = createApp(App)
app.use(router)
app.use(normalize)

app.mount('#app')
