<template>
  <div class="bg-[#171717] py-4 flex justify-between px-4">
    <div class="flex items-center">
      <i
        class="pi pi-bars text-2xl text-white cursor-pointer"
        @click="toggleSidebar"
      ></i>
    </div>

    <div class="text-white flex justify-center items-center gap-2">
      <a-avatar :size="48" class="flex justify-center items-center bg-white">
        <template #icon><UserOutlined class="text-black" /></template>
      </a-avatar>
      <div>
        <div>Administrators</div>
        <div class="text-sm cursor-pointer">Đăng xuất</div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserOutlined } from "@ant-design/icons-vue"
export default {
  components: {
    UserOutlined,
  },
  data() {
    return {
      sidebarOpen: true,
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
      this.$emit("toggle-sidebar", this.sidebarOpen)
    },
  },
}
</script>

<style lang="scss" scoped></style>
