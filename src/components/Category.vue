<template>
  <div class="bg-white mt-6">
    <div
      class="bg-blue-500 rounded p-4 flex justify-between items-center text-white"
    >
      <h2 class="text-xl font-extrabold uppercase">
        {{ title }}
      </h2>
      <div class="cursor-pointer flex justify-between items-center btn__more">
        Xem tất cả
        <i class="pi pi-angle-double-right ml-1"></i>
      </div>
    </div>
    <a-row :gutter="[16, 16]" class="mt-4">
      <a-col
        v-for="(product, index) in products"
        :key="index"
        :lg="{ span: 4 }"
        :sm="{ span: 8 }"
        :xs="{ span: 12 }"
        :xl="{ span: 4 }"
      >
        <CardProduct
          :id="product.id"
          :img="product.src"
          :title="product.title"
          :price="product.price"
          :sold="product.sold"
        />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import CardProduct from "./CardProduct.vue"

export default {
  components: {
    CardProduct,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
