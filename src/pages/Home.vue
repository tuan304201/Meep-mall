<template>
  <DefaultLayout>
    <div class="w-full">
      <div class="max-w-screen-2xl m-auto padding-16 mt-0 lg:mt-4">
        <a-row :gutter="14">
          <a-col
            class="navbar"
            :lg="{ span: 4 }"
            :sm="{ span: 0 }"
            :xs="{ span: 0 }"
            :xl="{ span: 4 }"
          >
            <MegaMenu :model="items" orientation="vertical" />
          </a-col>
          <a-col
            :lg="{ span: 15 }"
            :sm="{ span: 24 }"
            :xs="{ span: 24 }"
            :xl="{ span: 15 }"
            class="lg:mb-0 mb-3"
            ><img
              src="/src/assets/images/banner1.png"
              width="100%"
              style="height: 100%"
              class="rounded"
              alt=""
          /></a-col>
          <a-col
            :lg="{ span: 5 }"
            :sm="{ span: 24 }"
            :xs="{ span: 24 }"
            :xl="{ span: 5 }"
            class="flex lg:flex-row flex-col justify-between gap-3"
          >
            <a-row :gutter="[14, 14]">
              <a-col
                :lg="{ span: 24 }"
                :sm="{ span: 12 }"
                :xs="{ span: 12 }"
                :xl="{ span: 24 }"
              >
                <img
                  src="/src/assets/images/banner2.png"
                  width="100%"
                  alt=""
                  class="rounded"
                />
              </a-col>
              <a-col
                :lg="{ span: 24 }"
                :sm="{ span: 12 }"
                :xs="{ span: 12 }"
                :xl="{ span: 24 }"
              >
                <img
                  src="/src/assets/images/banner3.jpg"
                  width="100%"
                  alt=""
                  class="rounded"
                />
              </a-col>
            </a-row>
          </a-col>
        </a-row>

        <div class="mt-10">
          <div class="bg-[#FEB941] text-xl font-bold p-4 rounded text-white">
            <span class="uppercase">Duy nhất hôm nay</span>

            <Carousel
              :value="images"
              :numVisible="6"
              :numScroll="6"
              class="mt-6"
              :responsiveOptions="responsiveOptions"
            >
              <template #item="slotProps">
                <div class="p-2">
                  <CardProduct
                    :img="slotProps.data.src"
                    :title="slotProps.data.title"
                    :price="slotProps.data.price"
                    :sold="slotProps.data.sold"
                  />
                </div>
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../Layout/DefaultLayout.vue'
import MegaMenu from 'primevue/megamenu'
import CardProduct from '../components/CardProduct.vue'
import Carousel from 'primevue/carousel'
export default {
  components: {
    DefaultLayout,
    MegaMenu,
    CardProduct,
    Carousel,
  },
  data() {
    return {
      items: [
        {
          label: 'Ưu đãi hot 49%',
          items: [
            [
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
            ],
            [
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
            ],
            [
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
            ],
            [
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
          ],
        },
        {
          label: 'Thời trang',
          items: [
            [
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
            ],
            [
              {
                label: 'Home Theather',
                items: [
                  { label: 'Projector' },
                  { label: 'Speakers' },
                  { label: 'TVs' },
                ],
              },
            ],
            [
              {
                label: 'Gaming',
                items: [
                  { label: 'Accessories' },
                  { label: 'Console' },
                  { label: 'PC' },
                  { label: 'Video Games' },
                ],
              },
            ],
            [
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
          ],
        },
        {
          label: 'Thiết bị điện tử',
          items: [
            [
              {
                label: 'Football',
                items: [
                  { label: 'Kits' },
                  { label: 'Shoes' },
                  { label: 'Shorts' },
                  { label: 'Training' },
                ],
              },
            ],
            [
              {
                label: 'Running',
                items: [
                  { label: 'Accessories' },
                  { label: 'Shoes' },
                  { label: 'T-Shirts' },
                  { label: 'Shorts' },
                ],
              },
            ],
            [
              {
                label: 'Swimming',
                items: [
                  { label: 'Kickboard' },
                  { label: 'Nose Clip' },
                  { label: 'Swimsuits' },
                  { label: 'Paddles' },
                ],
              },
            ],
            [
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
          ],
        },
        {
          label: 'Mỹ phẩm',
          items: [
            [
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
            ],
            [
              {
                label: 'Home Theather',
                items: [
                  { label: 'Projector' },
                  { label: 'Speakers' },
                  { label: 'TVs' },
                ],
              },
            ],
            [
              {
                label: 'Gaming',
                items: [
                  { label: 'Accessories' },
                  { label: 'Console' },
                  { label: 'PC' },
                  { label: 'Video Games' },
                ],
              },
            ],
            [
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
          ],
        },
        {
          label: 'Sức khoẻ',
          items: [
            [
              {
                label: 'Football',
                items: [
                  { label: 'Kits' },
                  { label: 'Shoes' },
                  { label: 'Shorts' },
                  { label: 'Training' },
                ],
              },
            ],
            [
              {
                label: 'Running',
                items: [
                  { label: 'Accessories' },
                  { label: 'Shoes' },
                  { label: 'T-Shirts' },
                  { label: 'Shorts' },
                ],
              },
            ],
            [
              {
                label: 'Swimming',
                items: [
                  { label: 'Kickboard' },
                  { label: 'Nose Clip' },
                  { label: 'Swimsuits' },
                  { label: 'Paddles' },
                ],
              },
            ],
            [
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
          ],
        },
        {
          label: 'Gia dụng',
          items: [
            [
              {
                label: 'Football',
                items: [
                  { label: 'Kits' },
                  { label: 'Shoes' },
                  { label: 'Shorts' },
                  { label: 'Training' },
                ],
              },
            ],
            [
              {
                label: 'Running',
                items: [
                  { label: 'Accessories' },
                  { label: 'Shoes' },
                  { label: 'T-Shirts' },
                  { label: 'Shorts' },
                ],
              },
            ],
            [
              {
                label: 'Swimming',
                items: [
                  { label: 'Kickboard' },
                  { label: 'Nose Clip' },
                  { label: 'Swimsuits' },
                  { label: 'Paddles' },
                ],
              },
            ],
            [
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
          ],
        },
        {
          label: 'Đồ chơi',
          items: [
            [
              {
                label: 'Football',
                items: [
                  { label: 'Kits' },
                  { label: 'Shoes' },
                  { label: 'Shorts' },
                  { label: 'Training' },
                ],
              },
            ],
            [
              {
                label: 'Running',
                items: [
                  { label: 'Accessories' },
                  { label: 'Shoes' },
                  { label: 'T-Shirts' },
                  { label: 'Shorts' },
                ],
              },
            ],
            [
              {
                label: 'Swimming',
                items: [
                  { label: 'Kickboard' },
                  { label: 'Nose Clip' },
                  { label: 'Swimsuits' },
                  { label: 'Paddles' },
                ],
              },
            ],
            [
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
          ],
        },
      ],
      responsiveOptions: [
        {
          breakpoint: '1400px',
          numVisible: 6,
          numScroll: 6,
        },
        {
          breakpoint: '1199px',
          numVisible: 4,
          numScroll: 4,
        },
        {
          breakpoint: '767px',
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: '575px',
          numVisible: 2,
          numScroll: 2,
        },
      ],
      products: [
        { image: '', title: 'Thời trang' },
        { image: '', title: 'Thiết bị điện tử' },
        { image: '', title: 'Mỹ phẩm' },
        { image: '', title: 'Sức khoẻ' },
        { image: '', title: 'Gia dụng' },
        { image: '', title: 'Đồ chơi' },
      ],
      images: [
        {
          src: 'https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lpsw5nzzb2fse2',
          title:
            'Tai Nghe Không Dây TWS 5.3 Kết Nối Bluetooth Chống Thấm Nước Có Micro Âm Thanh Nổi Tiện Dụng',
          price: 45000,
          sold: 1000,
        },
        {
          src: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsju67bhbp38c4',
          title:
            'Áo thun tay nữ lỡ form rộng chất cotton số 99phong cách Hàn Quốc COLASTORE M09',
          price: 10000,
          sold: 1000,
        },
        {
          src: 'https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-louxf20vdj6k7a',
          title:
            'Đồng hồ điện tử màn hình LED với thiết kế tối giản phong cách Hàn Quốc',
          price: 10000,
          sold: 10000,
        },
        {
          src: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpnfrqubsspnb2',
          title:
            '(Kèm 1 sốt tắc + ớt rim) COMBO Ú Ù (Bánh tráng + Tóp mỡ + túi Bơ + Ruốc hành phi)',
          price: 59000,
          sold: 1200,
        },
        {
          src: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lt3kk0q3sr1902',
          title:
            'JUSTSL 2024 Giày bóng rổ trẻ em giày thể thao cổ cao phiên bản Hàn Quốc mới cỡ 28-39',
          price: 149000,
          sold: 1220,
        },
        {
          src: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfnfflaabkw48d',
          title: 'Kệ góc tường tam giác 3-4 tầng có bánh xe di chuyển',
          price: 1000,
          sold: 2365,
        },
        {
          src: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljz7hhpx43yaf9',
          title: 'Gấu gối chăn/mền văn phòng 🔥Gấu bông nhập ngoại',
          price: 275000,
          sold: 8726,
        },
        {
          src: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lpu9n23456hkeb',
          title:
            'Hqai h1 tws Tai nghe không dây Phong Cách Thể Thao Cho Tất Cả Các Dòng phoneearpods',
          price: 63000,
          sold: 256,
        },
        {
          src: 'https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-lutiwuvnw1029c',
          title:
            'Bút Gel Bút Bi Nước Mực Gel Đen Xanh Đỏ Khô Nhanh Ngòi 0.5mm, Mực Đều, Nét Chữ Đẹp Đủ Màu MiGA',
          price: 1000,
          sold: 30326,
        },
        {
          src: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rd50-lv54pi31fk6nac',
          title:
            'ZHUANGYUN Balo cặp đi học 2024 NEW Thời trang giản dị Giá rẻ Thời trang Thiết kế độc đáo GSJ2450C4U 19Z240511',
          price: 189000,
          sold: 2692,
        },
        {
          src: 'https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lkf7797h7r1y6f',
          title:
            'Kính Mát Phân Cực Phong Cách Hàn Quốc Thời Trang Cho Nam Và Nữ',
          price: 10000,
          sold: 3266,
        },
        {
          src: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk0ifurm8s1ub7',
          title:
            'Set 2 Vợt cầu lông , tặng kèm 3 quả cầu lông chất lượng cao , bảo hành 12 tháng',
          price: 20000,
          sold: 1000,
        },
      ],
      isOpen: false,
    }
  },

  methods: {
    openMenu() {
      this.isOpen = true
    },
  },
}
</script>

<style lang="scss">
.navbar {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 0 !important;
}
</style>
