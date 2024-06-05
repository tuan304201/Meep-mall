<template>
  <div class="bg-[#0F1035] mt-20 text-white">
    <a-row
      :gutter="16"
      class="max-w-screen-2xl padding-16 mt-0 lg:mt-4 py-10"
      style="margin: auto"
    >
      <a-col :span="9">
        <p class="font-extrabold text-5xl text-[#feb941]">MEEP</p>
        <p class="my-2">
          Cung cấp sản phẩm chất lượng từ các thương hiệu hàng đầu.
        </p>
        <ul class="py-2">
          <li class="flex items-center gap-2">
            <i class="pi pi-map-marker"></i>
            <span>Địa chỉ: Hai Bà Trưng, Hà Nội</span>
          </li>
          <li class="flex items-center gap-2 my-3">
            <i class="pi pi-mobile"></i>
            <span>Số điện thoại: 0987654321</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-envelope"></i>
            <span>Email: support@email.vn</span>
          </li>
        </ul>
        <div class="flex items-center gap-2">
          <img src="https://img.icons8.com/color/48/facebook.png" alt="" />
          <img src="https://img.icons8.com/color/48/zalo.png" alt="" />
          <img
            src="https://img.icons8.com/fluency/48/instagram-new.png"
            alt=""
          />
        </div>
      </a-col>
      <a-col :span="4">
        <h3 class="text-lg font-bold mb-6 text-[#feb941]">Chính sách</h3>
        <ul class="flex flex-col gap-2 list__item">
          <li>Giới thiệu</li>
          <li>Chương trình khuyến mãi</li>
          <li>Hệ thống cửa hàng</li>
          <li>Hướng dẫn đặt hàng</li>
          <li>Kiểm tra đơn hàng</li>
        </ul>
      </a-col>
      <a-col :span="4">
        <h3 class="text-lg font-bold mb-6 text-[#feb941]">Hỗ trợ khách hàng</h3>
        <ul class="flex flex-col gap-2 list__item">
          <li>Thông tin liên hệ</li>
          <li>Chính sách giao hàng</li>
          <li>Chính sách đổi hàng</li>
          <li>Chính sách bảo mật</li>
          <li>Điều khoản dịch vụ</li>
        </ul>
      </a-col>
      <a-col :span="7">
        <h3 class="text-lg font-bold mb-6 text-[#feb941]">Đăng ký nhận tin</h3>
        <a-input-search
          v-model="value"
          placeholder="Nhập địa chỉ email"
          enter-button="Đăng ký"
          size="large"
          @search="onSearch"
        />
        <h3 class="text-lg font-bold my-6 text-[#feb941]">
          Phương thức thanh toán
        </h3>
        <img src="/src/assets/images/payment.png" alt="" class="rounded" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    }
  },
  methods: {
    onSearch() {
      console.log(this.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.list__item {
  li {
    transition: all 0.25 ease-in-out;
    cursor: pointer;
    &:hover {
      color: #feb941;
    }
  }
}
</style>
