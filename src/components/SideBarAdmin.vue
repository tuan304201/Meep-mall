<template>
  <div>
    <div class="flex justify-center text-white py-2">
      <RouterLink to="/admin" class="font-extrabold text-5xl">
        MEEP
      </RouterLink>
    </div>
    <ul class="mt-3">
      <router-link
        v-for="item in items"
        :key="item.name"
        :to="item.link"
        active-class="active"
        @click.native="setActive(item.name)"
      >
        <li
          :class="{ active: item.name === activeItem }"
          class="flex gap-4 items-center"
        >
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "dashboard",
          link: "/admin",
          label: "Dashboard",
          icon: "pi pi-home",
        },
        {
          name: "category",
          link: "/admin/category",
          label: "Category",
          icon: "pi pi-th-large",
        },
        {
          name: "product",
          link: "/admin/product",
          label: "Product",
          icon: "pi pi-box",
        },
        {
          name: "account",
          link: "/admin/account",
          label: "Account",
          icon: "pi pi-id-card",
        },
        {
          name: "order",
          link: "/admin/order",
          label: "Order",
          icon: "pi pi-shopping-cart",
        },
      ],
      activeItem: "dashboard",
    }
  },
  methods: {
    setActive(item) {
      this.activeItem = item
      this.$emit("updatePage", item)
    },
  },
  watch: {
    $route(to) {
      const active = this.items.find((item) => item.link === to.path)
      if (active) {
        this.activeItem = active.name
      }
    },
  },
  created() {
    const active = this.items.find((item) => item.link === this.$route.path)
    if (active) {
      this.activeItem = active.name
    }
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 8px;
  font-weight: 600;
  color: white;
}

li:hover {
  background-color: #212121;
}

li.active {
  background-color: #212121;
  color: white;
}
</style>
