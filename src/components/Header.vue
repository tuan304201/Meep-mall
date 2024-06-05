<template>
  <div>
    <a-row
      align="middle"
      justify="space-between"
      class="py-3 max-w-screen-2xl m-auto padding-16"
    >
      <a-col
        :lg="{ span: 3 }"
        :sm="{ span: 8 }"
        :xs="{ span: 8 }"
        :xl="{ span: 3 }"
        class="block lg:hidden"
      >
        <i class="pi pi-bars text-xl mr-2" @click="showDrawer"></i>
        <a-drawer
          width="100%"
          class="w-full max-w-[300px]"
          :closable="false"
          placement="left"
          :open="open"
          @close="onClose"
        >
          <div>
            <div class="flex">
              <div
                class="rounded-full bg-gray-700 w-10 h-10 flex items-center justify-center"
              >
                <i
                  class="pi pi-user text-2xl text-white text-center align-middle"
                ></i>
              </div>
              <div class="ml-4">
                <p class="text-[16px]">
                  {{ username ? username : "Tài khoản" }}
                </p>
                <RouterLink to="/login" @click="handleLogin">{{
                  isChecked ? "Đăng xuất" : "Đăng nhập"
                }}</RouterLink>
              </div>
            </div>
            <a-divider class="bg-gray-400" />
            <div>
              <PanelMenu :model="items" class="w-full md:w-20rem" />
            </div>
          </div>
        </a-drawer>
      </a-col>
      <a-col
        :lg="{ span: 3 }"
        :sm="{ span: 8 }"
        :xs="{ span: 8 }"
        :xl="{ span: 3 }"
      >
        <RouterLink to="/" class="font-extrabold text-5xl"> MEEP </RouterLink>
      </a-col>
      <a-col
        :lg="{ span: 8, order: 0 }"
        :sm="{ span: 24, order: 2 }"
        :xs="{ span: 24, order: 2 }"
        :xl="{ span: 8, order: 0 }"
      >
        <a-input-search
          placeholder="Tìm kiếm theo tên sản phẩm..."
          enter-button
          size="large"
          class="px-0 lg:mt-0 mt-2"
        />
        <div class="flex gap-2 text-neutral-500 pt-2">
          <span>Kem chống nắng</span>
          <span>Son môi</span>
          <span>Bông tẩy trang</span>
          <span>Serum</span>
        </div>
      </a-col>
      <a-col
        :lg="{ span: 10 }"
        :sm="{ span: 8 }"
        :xs="{ span: 8 }"
        :xl="{ span: 10 }"
      >
        <div class="flex gap-4 items-center justify-end">
          <div class="lg:flex items-center gap-2 hidden">
            <i class="pi pi-phone text-3xl"></i>
            <span
              ><p class="whitespace-nowrap">Hỗ trợ khách hàng</p>
              <p class="font-bold">19006750</p>
            </span>
          </div>
          <div class="lg:flex items-center gap-2 hidden">
            <i class="pi pi-user text-3xl"></i>
            <span class="whitespace-nowrap">
              <p>{{ username ? username : "Tài khoản" }}</p>
              <RouterLink to="/login" @click="handleLogin">{{
                isChecked ? "Đăng xuất" : "Đăng nhập"
              }}</RouterLink>
            </span>
          </div>

          <a-popover placement="bottomRight">
            <template #title>
              <span class="text-neutral-400">Sản phẩm mới thêm</span>
            </template>
            <template #content>
              <div class="flex flex-col min-w-96 max-w-96 gap-4 mt-4">
                <div
                  v-if="cartItems.length < 1"
                  class="flex flex-col justify-center items-center py-10"
                >
                  <img
                    src="/src/assets/images/empty-cart.png"
                    class="max-w-full"
                    width="200"
                    alt="empty-cart"
                  />
                  <p class="text-neutral-500">Chưa có sản phẩm!</p>
                </div>

                <div
                  v-for="(item, index) in cartItems"
                  :key="index"
                  class="flex justify-center items-center w-full"
                >
                  <img
                    :src="item.src"
                    alt=""
                    width="60"
                    style="border: 1px solid #ccc"
                  />
                  <p class="line-clamp-1 mx-4">{{ item.title }}</p>
                  <p class="text-sm font-medium text-orange-500">
                    {{ formatPrice(item.price) }}
                  </p>
                </div>
              </div>
              <div
                class="mt-6 pt-4 pb-2 border-t border-neutral-200 flex justify-between items-center"
              >
                <p>Giỏ hàng có {{ cartItems.length }} sản phẩm</p>
                <RouterLink to="/cart">
                  <a-button type="primary">Xem giỏ hàng</a-button>
                </RouterLink>
              </div>
            </template>
            <a-button size="large" class="flex items-center">
              <template #icon>
                <i class="pi pi-shopping-cart text-xl mr-2"></i>
              </template>
              <p class="lg:block hidden">Giỏ hàng</p>
              <span class="ml-2 px-1 rounded text-white bg-red-600">1</span>
            </a-button>
          </a-popover>
        </div>
      </a-col>
    </a-row>

    <div class="w-full bg-blue-500 hidden lg:block">
      <div
        class="max-w-screen-2xl m-auto flex gap-4 items-center text-white font-semibold"
      >
        <RouterLink to="/" class="p-4 flex items-center">
          <i class="pi pi-bars text-xl mr-2"></i>
          <span>Danh mục sản phẩm</span>
        </RouterLink>
        <div class="flex gap-6 items-center">
          <RouterLink to="/" class="flex items-center">
            <i class="pi pi-book text-xl mr-2"></i>
            <span>Chính sách đổi trả</span>
          </RouterLink>
          <RouterLink to="/" class="flex items-center">
            <i class="pi pi-map-marker text-xl mr-2"></i>
            <span>Hệ thống cửa hàng</span>
          </RouterLink>
          <RouterLink to="/" class="flex items-center">
            <i class="pi pi-verified text-xl mr-2"></i>
            <span>Kiểm tra đơn hàng</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  PhoneOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  FileSearchOutlined,
} from "@ant-design/icons-vue"
import PanelMenu from "primevue/panelmenu"
import { formatPrice, formatSold } from "../helpers/Helper.js"
import axios from "axios"

export default {
  components: {
    PhoneOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    MenuOutlined,
    FileSearchOutlined,
    PanelMenu,
  },
  data() {
    return {
      open: false,
      isChecked: false,
      username: "",
      items: [
        {
          label: "Ưu đãi hot 49%",
          items: [
            {
              label: "Living Room",
              items: [
                { label: "Accessories" },
                { label: "Armchair" },
                { label: "Coffee Table" },
                { label: "Couch" },
                { label: "TV Stand" },
              ],
            },
            {
              label: "Kitchen",
              items: [
                { label: "Bar stool" },
                { label: "Chair" },
                { label: "Table" },
              ],
            },
            {
              label: "Bathroom",
              items: [{ label: "Accessories" }],
            },
            {
              label: "Bedroom",
              items: [
                { label: "Bed" },
                { label: "Chaise lounge" },
                { label: "Cupboard" },
                { label: "Dresser" },
                { label: "Wardrobe" },
              ],
            },
            {
              label: "Office",
              items: [
                { label: "Bookcase" },
                { label: "Cabinet" },
                { label: "Chair" },
                { label: "Desk" },
                { label: "Executive Chair" },
              ],
            },
          ],
        },
        {
          label: "Thời trang",
          items: [
            {
              label: "Computer",
              items: [
                { label: "Monitor" },
                { label: "Mouse" },
                { label: "Notebook" },
                { label: "Keyboard" },
                { label: "Printer" },
                { label: "Storage" },
              ],
            },

            {
              label: "Home Theather",
              items: [
                { label: "Projector" },
                { label: "Speakers" },
                { label: "TVs" },
              ],
            },

            {
              label: "Gaming",
              items: [
                { label: "Accessories" },
                { label: "Console" },
                { label: "PC" },
                { label: "Video Games" },
              ],
            },

            {
              label: "Appliances",
              items: [
                { label: "Coffee Machine" },
                { label: "Fridge" },
                { label: "Oven" },
                { label: "Vaccum Cleaner" },
                { label: "Washing Machine" },
              ],
            },
          ],
        },
        {
          label: "Thiết bị điện tử",
          items: [
            {
              label: "Football",
              items: [
                { label: "Kits" },
                { label: "Shoes" },
                { label: "Shorts" },
                { label: "Training" },
              ],
            },

            {
              label: "Running",
              items: [
                { label: "Accessories" },
                { label: "Shoes" },
                { label: "T-Shirts" },
                { label: "Shorts" },
              ],
            },

            {
              label: "Swimming",
              items: [
                { label: "Kickboard" },
                { label: "Nose Clip" },
                { label: "Swimsuits" },
                { label: "Paddles" },
              ],
            },

            {
              label: "Tennis",
              items: [
                { label: "Balls" },
                { label: "Rackets" },
                { label: "Shoes" },
                { label: "Training" },
              ],
            },
          ],
        },
        {
          label: "Mỹ phẩm",
          items: [
            {
              label: "Computer",
              items: [
                { label: "Monitor" },
                { label: "Mouse" },
                { label: "Notebook" },
                { label: "Keyboard" },
                { label: "Printer" },
                { label: "Storage" },
              ],
            },

            {
              label: "Home Theather",
              items: [
                { label: "Projector" },
                { label: "Speakers" },
                { label: "TVs" },
              ],
            },

            {
              label: "Gaming",
              items: [
                { label: "Accessories" },
                { label: "Console" },
                { label: "PC" },
                { label: "Video Games" },
              ],
            },

            {
              label: "Appliances",
              items: [
                { label: "Coffee Machine" },
                { label: "Fridge" },
                { label: "Oven" },
                { label: "Vaccum Cleaner" },
                { label: "Washing Machine" },
              ],
            },
          ],
        },
        {
          label: "Sức khoẻ",
          items: [
            {
              label: "Football",
              items: [
                { label: "Kits" },
                { label: "Shoes" },
                { label: "Shorts" },
                { label: "Training" },
              ],
            },

            {
              label: "Running",
              items: [
                { label: "Accessories" },
                { label: "Shoes" },
                { label: "T-Shirts" },
                { label: "Shorts" },
              ],
            },

            {
              label: "Swimming",
              items: [
                { label: "Kickboard" },
                { label: "Nose Clip" },
                { label: "Swimsuits" },
                { label: "Paddles" },
              ],
            },

            {
              label: "Tennis",
              items: [
                { label: "Balls" },
                { label: "Rackets" },
                { label: "Shoes" },
                { label: "Training" },
              ],
            },
          ],
        },
        {
          label: "Gia dụng",
          items: [
            {
              label: "Football",
              items: [
                { label: "Kits" },
                { label: "Shoes" },
                { label: "Shorts" },
                { label: "Training" },
              ],
            },

            {
              label: "Running",
              items: [
                { label: "Accessories" },
                { label: "Shoes" },
                { label: "T-Shirts" },
                { label: "Shorts" },
              ],
            },

            {
              label: "Swimming",
              items: [
                { label: "Kickboard" },
                { label: "Nose Clip" },
                { label: "Swimsuits" },
                { label: "Paddles" },
              ],
            },

            {
              label: "Tennis",
              items: [
                { label: "Balls" },
                { label: "Rackets" },
                { label: "Shoes" },
                { label: "Training" },
              ],
            },
          ],
        },
        {
          label: "Đồ chơi",
          items: [
            {
              label: "Football",
              items: [
                { label: "Kits" },
                { label: "Shoes" },
                { label: "Shorts" },
                { label: "Training" },
              ],
            },

            {
              label: "Running",
              items: [
                { label: "Accessories" },
                { label: "Shoes" },
                { label: "T-Shirts" },
                { label: "Shorts" },
              ],
            },

            {
              label: "Swimming",
              items: [
                { label: "Kickboard" },
                { label: "Nose Clip" },
                { label: "Swimsuits" },
                { label: "Paddles" },
              ],
            },

            {
              label: "Tennis",
              items: [
                { label: "Balls" },
                { label: "Rackets" },
                { label: "Shoes" },
                { label: "Training" },
              ],
            },
          ],
        },
      ],
      cartItems: [
        {
          src: "https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lpsw5nzzb2fse2",
          title:
            "Tai Nghe Không Dây TWS 5.3 Kết Nối Bluetooth Chống Thấm Nước Có Micro Âm Thanh Nổi Tiện Dụng",
          price: 45000,
          sold: 1000,
        },
        {
          src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsju67bhbp38c4",
          title:
            "Áo thun tay nữ lỡ form rộng chất cotton số 99phong cách Hàn Quốc COLASTORE M09",
          price: 10000,
          sold: 1000,
        },
        {
          src: "https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-louxf20vdj6k7a",
          title:
            "Đồng hồ điện tử màn hình LED với thiết kế tối giản phong cách Hàn Quốc",
          price: 10000,
          sold: 10000,
        },
        {
          src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpnfrqubsspnb2",
          title:
            "(Kèm 1 sốt tắc + ớt rim) COMBO Ú Ù (Bánh tráng + Tóp mỡ + túi Bơ + Ruốc hành phi)",
          price: 59000,
          sold: 1200,
        },
      ],
    }
  },
  methods: {
    showDrawer() {
      this.open = true
    },

    onClose() {
      this.open = false
    },
    formatPrice,
    formatSold,

    handleLogin() {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
    },

    refreshTokenHandler() {
      const refreshToken = localStorage.getItem("refreshToken")
      axios
        .post("http://localhost:3000/auth/refresh", {
          refreshToken: refreshToken,
        })
        .then((response) => {
          console.log(response)
          localStorage.setItem("accessToken", response.data.accessToken)
        })
        .catch((error) => {
          localStorage.removeItem("accessToken")
          localStorage.removeItem("refreshToken")
          this.$router.push({ path: "/login" })
          console.log(error)
        })
    },

    checkAccount() {
      const accessToken = localStorage.getItem("accessToken")
      if (accessToken) {
        this.checkToken(accessToken)
        this.isChecked = true
      } else {
        this.isChecked = false
      }
    },

    checkToken(token) {
      axios
        .get("http://localhost:3000/auth/user", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          this.username = res.data.data.username
        })
        .catch((error) => {
          if (error?.response?.status === 401) {
            this.refreshTokenHandler()
          } else if (error.response && error.response.status === 403) {
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            this.$router.push({ path: "/login" })
          } else {
            console.error(error)
          }
        })
    },
  },

  mounted() {
    this.checkAccount()
  },
}
</script>

<style lang="scss" scoped></style>
