<template>
  <div class="flex bg-[#212121]">
    <SideBarAdmin
      :class="sidebarOpen ? 'sidebar-open' : 'sidebar'"
    ></SideBarAdmin>
    <div class="bg-[#212121] w-full">
      <HeaderAdmin @toggle-sidebar="toggleSidebar"></HeaderAdmin>
      <div class="p-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAdmin from "../components/HeaderAdmin.vue"
import SideBarAdmin from "../components/SideBarAdmin.vue"

export default {
  components: {
    HeaderAdmin,
    SideBarAdmin,
  },
  data() {
    return {
      sidebarOpen: true,
    }
  },
  methods: {
    toggleSidebar(open) {
      this.sidebarOpen = open
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 0;
  height: 100vh;
  visibility: hidden;
  overflow: hidden;
  transition: ease-in-out 0.5s;
}

.sidebar-open {
  visibility: visible;
  width: 250px;
  height: 100vh;
  background-color: #171717;
  transition: ease-in-out 0.5s;
  padding: 10px;
}
</style>
