import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { primeWrapperComponents } from 'primevue-wrapper/src/plugins/plugin.js'

const app = createApp(App)
app.use(primeWrapperComponents)
app.mount('#app');
