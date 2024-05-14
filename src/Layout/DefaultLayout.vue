<template>
  <div class="w-full">
    <div>
      <Header />
      <slot> </slot>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

export default {
  components: {
    Footer,
    Header,
  },
}
</script>

<style lang="scss" scoped></style>
