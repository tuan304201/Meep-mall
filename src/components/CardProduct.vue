<template>
  <div class="bg-white p-1 text-black rounded box__shadow">
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
          >Đã bán {{ formatMoney(sold) }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
    // Phương thức để định dạng giá thành tiền tệ VNĐ
    formatPrice(price) {
      // Sử dụng Intl.NumberFormat để định dạng giá
      const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      })
      return formatter.format(price)
    },

    formatMoney(amount) {
      if (amount >= 1000000) {
        return (amount / 1000000).toFixed(1) + 'M'
      } else if (amount >= 1000) {
        return (amount / 1000).toFixed(amount % 1000 !== 0 ? 1 : 0) + 'k'
      } else {
        return amount.toString()
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
