<template>
  <div class="cart-summary">
    <h3>Tổng thanh toán</h3>
    <div class="summary-item">
      <span>Tổng cộng ({{ totalItems }} sản phẩm):</span>
      <span class="text-orange-500 font-semibold text-xl">{{
        formatPrice(totalPrice)
      }}</span>
    </div>
    <a-button type="primary" size="large" @click="checkout">Mua Hàng</a-button>
  </div>
</template>

<script>
import { formatPrice } from '../helpers/Helper.js'
export default {
  props: {
    totalItems: Number,
    totalPrice: Number,
  },
  methods: {
    formatPrice,
    checkout() {
      // Thực hiện chức năng thanh toán
      alert('Chức năng thanh toán chưa được triển khai')
    },
  },
}
</script>

<style scoped>
.cart-summary {
  border-top: 1px solid #eee;
  padding-top: 20px;
  text-align: right;
}
.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
