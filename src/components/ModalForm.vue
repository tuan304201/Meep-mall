<!-- ModalForm.vue -->
<template>
  <a-modal
    :open="open"
    :title="title"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-form :model="formState" layout="vertical" class="mt-4">
      <a-form-item
        label="Category name"
        :rules="[{ required: true, message: 'Please input category name!' }]"
      >
        <a-input
          v-model:value="formState.name"
          placeholder="Category name..."
        />
      </a-form-item>
      <a-form-item
        label="SPU"
        :rules="[{ required: true, message: 'Please input SPU!' }]"
      >
        <a-input v-model:value="formState.spu" placeholder="SPU..." />
      </a-form-item>
      <a-form-item label="Status">
        <a-radio-group v-model:value="formState.status">
          <a-radio value="Published">Published</a-radio>
          <a-radio value="Unpublished">Unpublished</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  props: {
    open: Boolean,
    title: String,
    confirmLoading: Boolean,
    formState: Object,
  },
  methods: {
    handleOk() {
      this.$emit("submit")
    },
    handleCancel() {
      this.$emit("update:open", false)
    },
  },
}
</script>
