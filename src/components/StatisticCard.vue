<template>
  <div
    class="bg-[#171717] py-4 px-6 flex justify-between items-center border-l-4 rounded"
    :style="`border-color: ${color}`"
  >
    <div>
      <h2 class="text-xl font-bold" :style="`color: ${color}`">{{ title }}</h2>
      <h3 class="text-white text-lg font-semibold mt-2">{{ value }}</h3>
    </div>
    <a-avatar
      :size="54"
      class="flex items-center justify-center"
      :style="`background-color: ${color}`"
    >
      <template #icon><i :class="`pi pi-${icon} text-2xl`"></i></template>
    </a-avatar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    value: {
      type: Number,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped></style>
