<template>
  <DefaultLayout>
    <div class="max-w-screen-2xl m-auto padding-16 mt-0 lg:mt-4">
      <h1
        class="text-2xl font-bold p-2 rounded-t border-b border-neutral-200 bg-[#feb941] text-white"
      >
        Giỏ Hàng
      </h1>
      <div class="bg-neutral-100 p-4">
        <div class="text-orange-500 flex items-center gap-2 mb-2">
          <i class="pi pi-map-marker"></i>
          <h2 class="font-semibold">Địa chỉ nhận hàng</h2>
        </div>

        <div class="ml-[1.55rem] flex items-end gap-6">
          <div>
            <div class="flex gap-4">
              <div class="font-bold">{{ fullNameFromChild }}</div>
              <div class="font-bold">{{ phoneNumberFromChild }}</div>
            </div>
            <div>
              {{ fullAddress ? fullAddress : 'Địa chỉ không xác định' }}
            </div>
          </div>
          <a-button type="primary" @click="showModal"> Thay đổi </a-button>
          <LocationSelector
            :visible="visible"
            @update:visible="updateVisible"
            @onOk="handleOkFromChild"
            @onCancel="handleCancelFromChild"
          />
        </div>
      </div>
      <div class="mb-5">
        <CartItem
          v-for="item in cartItems"
          :key="item.id"
          :item="item"
          @update-quantity="updateQuantity"
          @remove-item="removeItem"
        />
      </div>
      <CartSummary :totalItems="totalItems" :totalPrice="totalPrice" />
    </div>
  </DefaultLayout>
</template>

<script>
import CartItem from '../components/CartItem.vue'
import CartSummary from '../components/CartSummary.vue'
import DefaultLayout from '../Layout/DefaultLayout.vue'
import LocationSelector from '../components/LocationSelector.vue'
export default {
  components: {
    CartItem,
    CartSummary,
    DefaultLayout,
    LocationSelector,
  },
  data() {
    return {
      cartItems: [
        {
          id: 1,
          src: 'https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lpsw5nzzb2fse2',
          title:
            'Tai Nghe Không Dây TWS 5.3 Kết Nối Bluetooth Chống Thấm Nước Có Micro Âm Thanh Nổi Tiện Dụng',
          price: 45000,
          variant: 'Đen,36-37',
          quantity: 1,
          sold: 1000,
        },
        {
          id: 2,
          src: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsju67bhbp38c4',
          title:
            'Áo thun tay nữ lỡ form rộng chất cotton số 99phong cách Hàn Quốc COLASTORE M09',
          price: 10000,
          variant: 'Đen,36-37',
          quantity: 1,
          sold: 1000,
        },
        {
          id: 3,
          src: 'https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-louxf20vdj6k7a',
          title:
            'Đồng hồ điện tử màn hình LED với thiết kế tối giản phong cách Hàn Quốc',
          price: 10000,
          sold: 10000,
          variant: 'Đen,36-37',
          quantity: 1,
        },
        {
          id: 4,
          src: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpnfrqubsspnb2',
          title:
            '(Kèm 1 sốt tắc + ớt rim) COMBO Ú Ù (Bánh tráng + Tóp mỡ + túi Bơ + Ruốc hành phi)',
          price: 59000,
          variant: 'Đen,36-37',
          quantity: 1,
          sold: 1200,
        },
      ],
      visible: false,
      fullNameFromChild: '',
      phoneNumberFromChild: '',
      addressLocalFromChild: '',
      response: null,
    }
  },
  computed: {
    totalItems() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0)
    },
    totalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
    },
    fullAddress: {
      get() {
        return this.response
          ? this.response.addressLocal + ', ' + this.response.address
          : ''
      },
    },
  },
  methods: {
    updateQuantity(item, amount) {
      const index = this.cartItems.findIndex((i) => i.id === item.id)
      if (index !== -1) {
        this.cartItems[index].quantity += amount
        if (this.cartItems[index].quantity < 1) {
          this.cartItems[index].quantity = 1
        }
      }
    },
    removeItem(item) {
      this.cartItems = this.cartItems.filter((i) => i.id !== item.id)
    },
    showModal() {
      this.visible = true
    },
    updateVisible(newValue) {
      this.visible = newValue
    },
    handleOkFromChild(data) {
      this.response = data
      this.visible = false
      this.fullNameFromChild = data.fullName
      this.phoneNumberFromChild = data.phoneNumber
      this.addressLocalFromChild = data.addressLocal
    },

    handleCancelFromChild() {
      this.visible = false
    },
  },
}
</script>

<style scoped>
@import url('https://esgoo.net/scripts/jquery.js');
</style>
