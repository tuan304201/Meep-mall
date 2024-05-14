<template>
  <div class="flash-sale-progress">
    <div class="progress-bar">
      <div
        class="progress-bar-fill"
        :style="{ width: progressPercentage + '%' }"
      >
        <div class="progress-text">{{ sold }} đã bán</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlashSaleProgress',
  props: {
    sold: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  computed: {
    progressPercentage() {
      return ((this.sold / this.total) * 100).toFixed(2)
    },
  },
}
</script>

<style scoped>
.flash-sale-progress {
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  text-align: center;
}

.progress-bar {
  position: relative;
  height: 20px;
  background-color: #ffbda6;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 5px;
}

.progress-bar-fill {
  height: 100%;
  background-color: #ff5722;
  transition: width 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.progress-text {
  position: absolute;
  right: 0;
  left: 0;
  font-size: 12px;
}
</style>
