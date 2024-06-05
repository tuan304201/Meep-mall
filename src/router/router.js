import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router"

import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import Login from "../pages/Login.vue"
import Cart from "../pages/Cart.vue"
import ProductDetail from "../components/ProductDetail.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/cart", component: Cart },
  { path: "/about", component: About },
  { path: "/product/:id", component: ProductDetail },
  { path: "/product-sale/:id", component: ProductDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/"]
  const authRequired = !publicPages.includes(to.path)
  const accessToken = localStorage.getItem("accessToken")
  const refreshToken = localStorage.getItem("refreshToken")

  if (authRequired && !accessToken && !refreshToken) {
    return next("/login")
  }

  next()
})
export default router
