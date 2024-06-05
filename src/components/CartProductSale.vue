<template>
  <router-link :to="`/product-sale/${id}`" class="no-underline">
    <div class="bg-white p-1 text-black rounded box__shadow cursor-pointer">
      <img :src="img" alt="" />
      <div class="px-3">
        <p class="text-sm line-clamp-2 font-medium mt-4">
          {{ title }}
        </p>
        <div class="flex justify-between items-center pt-4 pb-2">
          <span class="text-orange-600 font-semibold">{{
            formatPrice(price)
          }}</span>
          <span class="text-xs text-gray-500"
            >Đã bán {{ formatSold(sold) }}</span
          >
        </div>
      </div>
      <FlashSaleProgress :sold="100" :total="500" />
    </div>
  </router-link>
</template>

<script>
import FlashSaleProgress from "./FlashSaleProgress.vue"
import { formatPrice, formatSold } from "../helpers/Helper.js"
export default {
  components: {
    FlashSaleProgress,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      required: true,
    },
  },
  methods: {
    formatPrice,
    formatSold,
  },
}
</script>

<style lang="scss" scoped>
.box__shadow {
  transition: all 0.3s ease-in-out;
  box-shadow:
    rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

.box__shadow:hover {
  transform: translateY(-5px);
}
</style>
