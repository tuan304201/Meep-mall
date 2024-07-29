<template>
  <AdminLayout>
    <a-row :span="24" :gutter="16">
      <a-col v-for="(stat, index) in stats" :key="index" :span="6">
        <StatisticCard
          :color="stat.color"
          :icon="stat.icon"
          :title="stat.title"
          :value="stat.value"
        />
      </a-col>
    </a-row>
  </AdminLayout>
</template>

<script>
import AdminLayout from "../Layout/AdminLayout.vue"
import StatisticCard from "../components/StatisticCard.vue"

export default {
  components: {
    AdminLayout,
    StatisticCard,
  },
  data() {
    return {
      stats: [
        { color: "#3b82f6", icon: "user", title: "Total Users", value: 10000 },
        {
          color: "#22c55e",
          icon: "dollar",
          title: "Earning (Monthly)",
          value: 10000,
        },
        {
          color: "#dc2626",
          icon: "shopping-cart",
          title: "Total Orders",
          value: 10000,
        },
        {
          color: "#eab308",
          icon: "comments",
          title: "Pending Request",
          value: 10000,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
