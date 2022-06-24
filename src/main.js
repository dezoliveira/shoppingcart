import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from "vue-sweetalert2"; //importa a lib

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "sweetalert2/dist/sweetalert2.min.css"; //configura css

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const app = createApp(App)
app.use(VueSweetalert2)
.component('fa', FontAwesomeIcon)
.mount('#app')


