import { createApp } from "vue"
import App from "./App.vue"
import Antd from "ant-design-vue"
import router from "./router/router.js"
import PrimeVue from "primevue/config"
import Toast from "vue-toastification"

import "vue-toastification/dist/index.css"
import "ant-design-vue/dist/reset.css"
import "./css/index.css"
import "./css/global.css"
import "primeicons/primeicons.css"
import "primevue/resources/themes/aura-light-green/theme.css"

const app = createApp(App)

const options = {
  position: "top-right",
  timeout: 1500,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
}
app.use(Antd).use(router).use(Toast, options).use(PrimeVue).mount("#app")
