<!-- TableComponent.vue -->
<template>
  <a-table :columns="columns" :data-source="data">
    <template #headerCell="{ column }">
      {{ column.title }}
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'status'">
        <span>
          <a-tag
            :color="record.status === 'Published' ? 'green' : 'yellow'"
            class="font-semibold"
          >
            {{ record.status }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <div class="flex gap-2">
          <a-button type="primary" @click="$emit('edit', record)"
            >Edit</a-button
          >
          <a-popconfirm
            title="Are you sure delete this record?"
            ok-text="Yes"
            cancel-text="No"
            @confirm="$emit('delete', record)"
          >
            <a-button type="primary" danger>Delete</a-button>
          </a-popconfirm>
        </div>
      </template>
    </template>
  </a-table>
</template>

<script>
export default {
  props: {
    columns: Array,
    data: Array,
  },
}
</script>
