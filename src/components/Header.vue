<template>
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
              <p class="text-[16px]">Tài khoản</p>
              <p>Đăng nhập</p>
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
      <p class="font-extrabold text-5xl">MEEP</p>
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
            <p>Tài khoản</p>
            <RouterLink to="/">{{
              isChecked ? 'Đăng xuất' : 'Đăng nhập'
            }}</RouterLink>
          </span>
        </div>

        <a-button size="large" class="flex items-center">
          <template #icon>
            <i class="pi pi-shopping-cart text-xl mr-2"></i>
          </template>
          <p class="lg:block hidden">Giỏ hàng</p>
          <span class="ml-2 px-1 rounded text-white bg-red-600">1</span>
        </a-button>
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
</template>

<script>
import {
  PhoneOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  FileSearchOutlined,
} from '@ant-design/icons-vue'
import PanelMenu from 'primevue/panelmenu'

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
      items: [
        {
          label: 'Ưu đãi hot 49%',
          items: [
            {
              label: 'Living Room',
              items: [
                { label: 'Accessories' },
                { label: 'Armchair' },
                { label: 'Coffee Table' },
                { label: 'Couch' },
                { label: 'TV Stand' },
              ],
            },
            {
              label: 'Kitchen',
              items: [
                { label: 'Bar stool' },
                { label: 'Chair' },
                { label: 'Table' },
              ],
            },
            {
              label: 'Bathroom',
              items: [{ label: 'Accessories' }],
            },
            {
              label: 'Bedroom',
              items: [
                { label: 'Bed' },
                { label: 'Chaise lounge' },
                { label: 'Cupboard' },
                { label: 'Dresser' },
                { label: 'Wardrobe' },
              ],
            },
            {
              label: 'Office',
              items: [
                { label: 'Bookcase' },
                { label: 'Cabinet' },
                { label: 'Chair' },
                { label: 'Desk' },
                { label: 'Executive Chair' },
              ],
            },
          ],
        },
        {
          label: 'Thời trang',
          items: [
            {
              label: 'Computer',
              items: [
                { label: 'Monitor' },
                { label: 'Mouse' },
                { label: 'Notebook' },
                { label: 'Keyboard' },
                { label: 'Printer' },
                { label: 'Storage' },
              ],
            },

            {
              label: 'Home Theather',
              items: [
                { label: 'Projector' },
                { label: 'Speakers' },
                { label: 'TVs' },
              ],
            },

            {
              label: 'Gaming',
              items: [
                { label: 'Accessories' },
                { label: 'Console' },
                { label: 'PC' },
                { label: 'Video Games' },
              ],
            },

            {
              label: 'Appliances',
              items: [
                { label: 'Coffee Machine' },
                { label: 'Fridge' },
                { label: 'Oven' },
                { label: 'Vaccum Cleaner' },
                { label: 'Washing Machine' },
              ],
            },
          ],
        },
        {
          label: 'Thiết bị điện tử',
          items: [
            {
              label: 'Football',
              items: [
                { label: 'Kits' },
                { label: 'Shoes' },
                { label: 'Shorts' },
                { label: 'Training' },
              ],
            },

            {
              label: 'Running',
              items: [
                { label: 'Accessories' },
                { label: 'Shoes' },
                { label: 'T-Shirts' },
                { label: 'Shorts' },
              ],
            },

            {
              label: 'Swimming',
              items: [
                { label: 'Kickboard' },
                { label: 'Nose Clip' },
                { label: 'Swimsuits' },
                { label: 'Paddles' },
              ],
            },

            {
              label: 'Tennis',
              items: [
                { label: 'Balls' },
                { label: 'Rackets' },
                { label: 'Shoes' },
                { label: 'Training' },
              ],
            },
          ],
        },
        {
          label: 'Mỹ phẩm',
          items: [
            {
              label: 'Computer',
              items: [
                { label: 'Monitor' },
                { label: 'Mouse' },
                { label: 'Notebook' },
                { label: 'Keyboard' },
                { label: 'Printer' },
                { label: 'Storage' },
              ],
            },

            {
              label: 'Home Theather',
              items: [
                { label: 'Projector' },
                { label: 'Speakers' },
                { label: 'TVs' },
              ],
            },

            {
              label: 'Gaming',
              items: [
                { label: 'Accessories' },
                { label: 'Console' },
                { label: 'PC' },
                { label: 'Video Games' },
              ],
            },

            {
              label: 'Appliances',
              items: [
                { label: 'Coffee Machine' },
                { label: 'Fridge' },
                { label: 'Oven' },
                { label: 'Vaccum Cleaner' },
                { label: 'Washing Machine' },
              ],
            },
          ],
        },
        {
          label: 'Sức khoẻ',
          items: [
            {
              label: 'Football',
              items: [
                { label: 'Kits' },
                { label: 'Shoes' },
                { label: 'Shorts' },
                { label: 'Training' },
              ],
            },

            {
              label: 'Running',
              items: [
                { label: 'Accessories' },
                { label: 'Shoes' },
                { label: 'T-Shirts' },
                { label: 'Shorts' },
              ],
            },

            {
              label: 'Swimming',
              items: [
                { label: 'Kickboard' },
                { label: 'Nose Clip' },
                { label: 'Swimsuits' },
                { label: 'Paddles' },
              ],
            },

            {
              label: 'Tennis',
              items: [
                { label: 'Balls' },
                { label: 'Rackets' },
                { label: 'Shoes' },
                { label: 'Training' },
              ],
            },
          ],
        },
        {
          label: 'Gia dụng',
          items: [
            {
              label: 'Football',
              items: [
                { label: 'Kits' },
                { label: 'Shoes' },
                { label: 'Shorts' },
                { label: 'Training' },
              ],
            },

            {
              label: 'Running',
              items: [
                { label: 'Accessories' },
                { label: 'Shoes' },
                { label: 'T-Shirts' },
                { label: 'Shorts' },
              ],
            },

            {
              label: 'Swimming',
              items: [
                { label: 'Kickboard' },
                { label: 'Nose Clip' },
                { label: 'Swimsuits' },
                { label: 'Paddles' },
              ],
            },

            {
              label: 'Tennis',
              items: [
                { label: 'Balls' },
                { label: 'Rackets' },
                { label: 'Shoes' },
                { label: 'Training' },
              ],
            },
          ],
        },
        {
          label: 'Đồ chơi',
          items: [
            {
              label: 'Football',
              items: [
                { label: 'Kits' },
                { label: 'Shoes' },
                { label: 'Shorts' },
                { label: 'Training' },
              ],
            },

            {
              label: 'Running',
              items: [
                { label: 'Accessories' },
                { label: 'Shoes' },
                { label: 'T-Shirts' },
                { label: 'Shorts' },
              ],
            },

            {
              label: 'Swimming',
              items: [
                { label: 'Kickboard' },
                { label: 'Nose Clip' },
                { label: 'Swimsuits' },
                { label: 'Paddles' },
              ],
            },

            {
              label: 'Tennis',
              items: [
                { label: 'Balls' },
                { label: 'Rackets' },
                { label: 'Shoes' },
                { label: 'Training' },
              ],
            },
          ],
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
  },
}
</script>

<style lang="scss" scoped></style>
