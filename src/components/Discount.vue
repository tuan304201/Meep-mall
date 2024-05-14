<template>
  <div class="coupon_item">
    <div class="coupon_icon mr-4">
      <a
        href="https://ega-cosmetic.mysapo.net/collections/all"
        title="https://ega-cosmetic.mysapo.net/collections/all"
      >
        <img
          class="w-full h-auto"
          src="//bizweb.dktcdn.net/thumb/medium/100/426/076/themes/917889/assets/coupon_1_img.png?1692086228721"
          alt="coupon_1_img.png"
          width="79"
          height="70"
        />
      </a>
    </div>
    <div class="w-full">
      <div>
        <h3 class="font-bold text-red-700">NHẬP MÃ: EGA10</h3>
        <div class="text-xs text-neutral-500 py-1">
          Mã giảm 10% cho đơn hàng tối thiểu 500k.
        </div>
      </div>
      <div class="flex items-center flex-wrap justify-end mt-1">
        <a-button type="primary" class="bg-red-700">
          <span>Sao chép</span>
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.coupon_item {
  position: relative;
  background: #fff;
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.15));
  padding: 10px;
  display: flex;
  width: 100%;
  min-height: 120px;
  border-radius: 5px;
  min-height: 100px;
}

.coupon_item:before {
  content: '';
  position: absolute;
  top: 0;
  left: -3px;
  height: 100%;
  width: 10px;
  color: #fff;
  background-clip: padding-box;
  background:
    repeating-linear-gradient(
        #e5e5e5,
        #e5e5e5 5px,
        transparent 0,
        transparent 9px,
        #e5e5e5 0,
        #e5e5e5 10px
      )
      0/1px 100% no-repeat,
    radial-gradient(
        circle at 0 7px,
        transparent,
        transparent 2px,
        #e5e5e5ee 0,
        #e5e5e5 3px,
        currentColor 0
      )
      1px 0/100% 10px repeat-y;
}

.coupon_item .coupon_icon {
  width: 103px;
  flex: 0 0 103px;
}
</style>
