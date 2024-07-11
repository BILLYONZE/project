import './assets/styles.css'
import router from './routes'
import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
})
import store from '@/store'
createApp(App).use(router).use(vuetify).use(store).mount('#app')
