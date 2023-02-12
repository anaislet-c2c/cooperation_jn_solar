import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'cooperation_jn_common_ui/dist/style.css'

declare global {
  interface Window {
    CESIUM_BASE_URL: string
  }
}
window.CESIUM_BASE_URL = '/node_modules/@vcmap/cesium/Build/CesiumUnminified/'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
