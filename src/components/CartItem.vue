<template>
  <div class="cart-item">
    <div class="item-info">
      <img :src="item.src" alt="product image" />
      <div class="flex gap-10 items-center">
        <h3 class="flex-1 line-clamp-2 w-72">{{ item.title }}</h3>
        <p>Phân Loại Hàng: {{ item.variant ?? 'Phân loại' }}</p>
      </div>
    </div>
    <div class="text-right">{{ formatPrice(item.price) }}</div>
    <div class="item-quantity border border-neutral-200">
      <button
        @click="updateQuantity(item, -1)"
        class="border-r border-neutral-200"
      >
        -
      </button>
      <span class="px-4">{{ item.quantity }}</span>
      <button
        @click="updateQuantity(item, 1)"
        class="border-l border-neutral-200"
      >
        +
      </button>
    </div>
    <div class="text-right text-orange-500 font-semibold">
      {{ formatPrice(item.price * item.quantity) }}
    </div>
    <div class="item-actions">
      <a-button type="primary" danger @click="removeItem(item)">Xóa</a-button>
    </div>
  </div>
</template>

<script>
import { formatPrice } from '../helpers/Helper.js'
export default {
  props: {
    item: Object,
  },
  methods: {
    formatPrice,
    updateQuantity(item, amount) {
      this.$emit('update-quantity', item, amount)
    },
    removeItem(item) {
      this.$emit('remove-item', item)
    },
  },
}
</script>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}
.item-info {
  display: flex;
  align-items: center;
}
.item-info img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
}
.item-details {
  max-width: 200px;
}
.text-right,
.item-total {
  width: 100px;
  text-align: right;
}
.item-quantity {
  display: flex;
  align-items: center;
}
.item-quantity button {
  width: 30px;
  height: 30px;
}
.item-actions {
  width: 80px;
  text-align: center;
}
</style>
