<template>
  <DefaultLayout>
    <div class="w-full">
      <div class="max-w-screen-2xl m-auto mt-0 p-4 lg:mt-4">
        <!-- Carousel cho gallery -->
        <a-row :gutter="32" class="bg-neutral-100 py-4">
          <a-col
            :lg="{ span: 8 }"
            :sm="{ span: 24 }"
            :xs="{ span: 24 }"
            :xl="{ span: 8 }"
          >
            <Carousel
              id="gallery"
              :items-to-show="1"
              :wrap-around="false"
              v-model="currentSlide"
            >
              <Slide v-for="(img, index) in details[0].images" :key="index">
                <img :src="img.src" alt="" />
              </Slide>
            </Carousel>

            <!-- Carousel cho thumbnails -->
            <Carousel
              class="mt-2"
              id="thumbnails"
              :items-to-show="5"
              :wrap-around="true"
              v-model="currentSlide"
              ref="carousel"
            >
              <Slide
                v-for="(img, index) in details[0].images"
                :key="index"
                class="mx-1"
              >
                <div
                  :class="{ 'border-red': currentSlide === index }"
                  @click="slideTo(index)"
                >
                  <img :src="img.src" alt="" />
                </div>
              </Slide>
            </Carousel>
          </a-col>

          <a-col
            :lg="{ span: 16 }"
            :sm="{ span: 24 }"
            :xs="{ span: 24 }"
            :xl="{ span: 16 }"
            class="mt-4 lg:mt-0"
          >
            <div>
              <h1 class="text-2xl font-semibold mb-5">
                Tai Nghe Không Dây TWS 5.3 Kết Nối Bluetooth Chống Thấm Nước Có
                Micro Âm Thanh Nổi Tiện Dụng
              </h1>
              <p class="text-base">
                {{ formatSold(details[0].sold) }}
                <span class="text-neutral-600"> đã bán</span>
              </p>
              <div class="bg-white p-4 mt-4 flex items-center justify-between">
                <div class="flex items-center gap-5">
                  <p class="line-through text-lg font-medium text-neutral-400">
                    {{ formatPrice(details[0].price) }}
                  </p>
                  <p class="text-2xl text-orange-600 font-semibold">
                    {{
                      formatPrice(
                        Math.round(
                          (details[0].price -
                            details[0].price * details[0].discount) /
                            1000
                        ) * 1000
                      )
                    }}
                  </p>
                </div>
                <p
                  class="text-xs font-medium text-white bg-orange-600 px-2 py-1 rounded"
                >
                  GIẢM {{ details[0].discount * 100 + "%" }}
                </p>
              </div>

              <div class="mt-10 flex items-center gap-2">
                <span>Màu sắc: </span>
                <div>
                  <a-button
                    class="ml-3 mb-3"
                    v-for="(item, index) in details[0].color"
                    :key="index"
                  >
                    {{ item }}
                  </a-button>
                </div>
              </div>

              <div class="flex lg:block items-center mt-10">
                <div>
                  <span class="mr-3">Số lượng: </span>
                  <a-button class="rounded-none" @click="handleMinus"
                    >-</a-button
                  >
                  <span
                    class="px-4 py-[5.5px] bg-white border-collapse border"
                    >{{ quantity }}</span
                  >
                  <a-button class="rounded-none" @click="handlePlus"
                    >+</a-button
                  >
                </div>
                <div class="text-gray-500 ml-3 lg:ml-0">
                  {{ details[0].quantity + " sản phẩm có sẵn" }}
                </div>
              </div>

              <div class="mt-10 flex gap-5">
                <a-button class="" size="large" @click="addToCart"
                  >Thêm vào giỏ hàng</a-button
                >

                <a-button
                  type="primary"
                  class="text-white"
                  size="large"
                  danger
                  @click="addToCart"
                >
                  Mua ngay
                </a-button>
              </div>
            </div>
          </a-col>
        </a-row>

        <a-row :gutter="32" class="bg-neutral-100 mt-10">
          <h1 class="text-2xl font-semibold p-4">Mô tả sản phẩm</h1>
          <p class="px-4 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            minima laboriosam recusandae cum quos voluptate hic molestias, fuga
            ex asperiores eos placeat odio eaque nulla atque similique numquam
            deleniti quia. Aut excepturi voluptas reprehenderit velit? Dolor a
            quod, iure non quae consequatur unde perferendis saepe, corrupti
            laudantium, dignissimos quam minima vitae modi enim odit autem sunt
            sequi deserunt consequuntur. Magni? Ab quod velit cupiditate magnam
            placeat quam obcaecati deleniti reiciendis ex, veritatis numquam
            omnis iusto accusantium animi asperiores laudantium praesentium
            possimus vel non exercitationem quaerat vero earum. Neque, expedita
            aperiam. Atque, porro alias? Voluptate sunt aliquid aperiam hic
            tenetur commodi quos laboriosam quibusdam quo incidunt facere, nam
            vero vel eveniet blanditiis aut minima, aspernatur debitis possimus?
            Labore perspiciatis excepturi impedit. Molestiae fugit cum ipsam
            quisquam, commodi repellendus, dolore ipsum voluptatum, harum atque
            in. Esse laudantium quod enim exercitationem iusto, tenetur
            accusantium explicabo error dignissimos, sit facere eaque natus
            ratione accusamus?
          </p>
        </a-row>

        <a-row :gutter="32">
          <Category :title="'Sản phẩm liên quan'" :products="products" />
        </a-row>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../Layout/DefaultLayout.vue"
import { Carousel, Slide } from "vue3-carousel"
import "vue3-carousel/dist/carousel.css"
import { formatSold, formatPrice } from "../helpers/Helper.js"
import Category from "./Category.vue"
export default {
  components: {
    DefaultLayout,
    Carousel,
    Slide,
    Category,
  },
  data() {
    return {
      // Sử dụng route params để lấy ID sản phẩm
      productId: this.$route.params.id,
      currentSlide: 0,
      quantity: 1,
      details: [
        {
          id: 1,
          images: [
            {
              id: 1,
              src: "https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lpsw5nzzb2fse2",
            },
            {
              id: 2,
              src: "https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lpsw5nzz2n140f",
            },
            {
              id: 3,
              src: "https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lpsw5nzz89aw8d",
            },
            {
              id: 4,
              src: "https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lpsw5nzzfad115",
            },
            {
              id: 5,
              src: "https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lpsw5nzz5g60fb",
            },
            {
              id: 6,
              src: "https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lpsw5nzz9o3900",
            },
          ],
          title:
            "Tai Nghe Không Dây TWS 5.3 Kết Nối Bluetooth Chống Thấm Nước Có Micro Âm Thanh Nổi Tiện Dụng",
          price: 118000,
          discount: 0.62,
          sold: 1000,
          type: "color",
          color: ["Đen", "Trắng", "Hồng", "Tím"],
          quantity: 803,
        },
      ],
      products: [
        {
          id: 1,
          src: "https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lpsw5nzzb2fse2",
          title:
            "Tai Nghe Không Dây TWS 5.3 Kết Nối Bluetooth Chống Thấm Nước Có Micro Âm Thanh Nổi Tiện Dụng",
          price: 45000,
          sold: 1000,
        },
        {
          id: 2,
          src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsju67bhbp38c4",
          title:
            "Áo thun tay nữ lỡ form rộng chất cotton số 99phong cách Hàn Quốc COLASTORE M09",
          price: 10000,
          sold: 1000,
        },
        {
          id: 3,
          src: "https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-louxf20vdj6k7a",
          title:
            "Đồng hồ điện tử màn hình LED với thiết kế tối giản phong cách Hàn Quốc",
          price: 10000,
          sold: 10000,
        },
        {
          id: 4,
          src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpnfrqubsspnb2",
          title:
            "(Kèm 1 sốt tắc + ớt rim) COMBO Ú Ù (Bánh tráng + Tóp mỡ + túi Bơ + Ruốc hành phi)",
          price: 59000,
          sold: 1200,
        },
        {
          id: 5,
          src: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lt3kk0q3sr1902",
          title:
            "JUSTSL 2024 Giày bóng rổ trẻ em giày thể thao cổ cao phiên bản Hàn Quốc mới cỡ 28-39",
          price: 149000,
          sold: 1220,
        },
        {
          id: 6,
          src: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfnfflaabkw48d",
          title: "Kệ góc tường tam giác 3-4 tầng có bánh xe di chuyển",
          price: 1000,
          sold: 2365,
        },
        {
          id: 7,
          src: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljz7hhpx43yaf9",
          title: "Gấu gối chăn/mền văn phòng 🔥Gấu bông nhập ngoại",
          price: 275000,
          sold: 8726,
        },
        {
          id: 8,
          src: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lpu9n23456hkeb",
          title:
            "Hqai h1 tws Tai nghe không dây Phong Cách Thể Thao Cho Tất Cả Các Dòng phoneearpods",
          price: 63000,
          sold: 256,
        },
        {
          id: 9,
          src: "https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-lutiwuvnw1029c",
          title:
            "Bút Gel Bút Bi Nước Mực Gel Đen Xanh Đỏ Khô Nhanh Ngòi 0.5mm, Mực Đều, Nét Chữ Đẹp Đủ Màu MiGA",
          price: 1000,
          sold: 30326,
        },
        {
          id: 10,
          src: "https://down-vn.img.susercontent.com/file/sg-11134201-7rd50-lv54pi31fk6nac",
          title:
            "ZHUANGYUN Balo cặp đi học 2024 NEW Thời trang giản dị Giá rẻ Thời trang Thiết kế độc đáo GSJ2450C4U 19Z240511",
          price: 189000,
          sold: 2692,
        },
        {
          id: 11,
          src: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lkf7797h7r1y6f",
          title:
            "Kính Mát Phân Cực Phong Cách Hàn Quốc Thời Trang Cho Nam Và Nữ",
          price: 10000,
          sold: 3266,
        },
        {
          id: 12,
          src: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk0ifurm8s1ub7",
          title:
            "Set 2 Vợt cầu lông , tặng kèm 3 quả cầu lông chất lượng cao , bảo hành 12 tháng",
          price: 20000,
          sold: 1000,
        },
      ],
    }
  },

  methods: {
    formatSold,
    formatPrice,
    slideTo(val) {
      this.currentSlide = val
    },

    handleMinus() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    handlePlus() {
      if (this.quantity < this.details[0].quantity) {
        this.quantity++
      }
    },
  },
  created() {
    // Gọi API hoặc lấy dữ liệu chi tiết sản phẩm ở đây
  },
}
</script>

<style scoped>
.border-red {
  border: 2px solid orange;
}

.carousel__item img,
.thumbnail__item img {
  max-height: 100%;
  max-width: 100%;
}
</style>
