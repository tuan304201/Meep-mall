<template>
  <AdminLayout>
    <div class="bg-white p-4 rounded">
      <div class="w-full flex justify-end mb-4">
        <a-button
          type="primary"
          size="medium"
          class="font-semibold flex items-center gap-2"
          @click="openCreateModal"
        >
          <i class="pi pi-plus text-xs font-semibold"></i>Add Category
        </a-button>
      </div>

      <TableComponent
        :columns="columns"
        :data="data"
        @edit="getDataToForm"
        @delete="confirm"
        :pagination="{ pageSize: 8 }"
      />

      <ModalForm
        :open="openModalUpdate"
        title="Update Category"
        :confirm-loading="confirmLoading"
        :formState="formState"
        @submit="handleUpdate"
        @update:open="handleModalUpdate"
      />

      <ModalForm
        :open="openModalCreate"
        title="Create Category"
        :confirm-loading="confirmLoading"
        :formState="formState"
        @submit="handleCreate"
        @update:open="handleModalCreate"
      />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "../Layout/AdminLayout.vue"
import TableComponent from "../components/VTable.vue"
import ModalForm from "../components/ModalForm.vue"

export default {
  components: {
    AdminLayout,
    TableComponent,
    ModalForm,
  },

  data() {
    return {
      openModalUpdate: false,
      openModalCreate: false,
      confirmLoading: false,
      currentRecordKey: null,

      formState: {
        name: "",
        spu: "",
        status: "",
      },

      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "SPU",
          dataIndex: "spu",
          key: "spu",
          filters: [
            { text: "PHN", value: "PHN" },
            { text: "CLT", value: "CLT" },
            { text: "FOD", value: "FOD" },
          ],
          onFilter: (value, record) => record.spu.includes(value),
        },
        { title: "Quantity", dataIndex: "quantity", key: "quantity" },
        { title: "Status", key: "status", dataIndex: "status" },
        { title: "Action", key: "action" },
      ],

      data: [
        {
          key: "1",
          name: "John Brown",
          spu: "PHN",
          quantity: 123,
          status: "Published",
        },
        {
          key: "2",
          name: "Jim Green",
          spu: "CLT",
          quantity: 456,
          status: "Published",
        },
        {
          key: "3",
          name: "Joe Black",
          spu: "FOD",
          quantity: 789,
          status: "Unpublished",
        },
        {
          key: "4",
          name: "Joe Black",
          spu: "FOD",
          quantity: 789,
          status: "Unpublished",
        },
        {
          key: "5",
          name: "Joe Black",
          spu: "FOD",
          quantity: 789,
          status: "Unpublished",
        },
        {
          key: "6",
          name: "Joe Black",
          spu: "FOD",
          quantity: 789,
          status: "Unpublished",
        },
        {
          key: "7",
          name: "Joe Black",
          spu: "FOD",
          quantity: 789,
          status: "Unpublished",
        },
        {
          key: "8",
          name: "Joe Black",
          spu: "FOD",
          quantity: 789,
          status: "Unpublished",
        },
        {
          key: "9",
          name: "Joe Black",
          spu: "FOD",
          quantity: 789,
          status: "Unpublished",
        },
        {
          key: "10",
          name: "Joe Black",
          spu: "FOD",
          quantity: 789,
          status: "Unpublished",
        },
        {
          key: "11",
          name: "Joe Black",
          spu: "FOD",
          quantity: 789,
          status: "Unpublished",
        },
      ],
    }
  },

  methods: {
    openCreateModal() {
      this.resetFormState()
      this.openModalCreate = true
    },

    getDataToForm(record) {
      this.formState = { ...record }
      this.currentRecordKey = record.key
      this.openModalUpdate = true
    },

    confirm(record) {
      const index = this.data.findIndex((item) => item.key === record.key)
      if (index !== -1) {
        this.data.splice(index, 1)
      }
    },

    handleUpdate() {
      this.confirmLoading = true
      const index = this.data.findIndex(
        (item) => item.key === this.currentRecordKey
      )
      if (index !== -1) {
        this.data.splice(index, 1, {
          ...this.formState,
          key: this.currentRecordKey,
        })
      }
      setTimeout(() => {
        this.openModalUpdate = false
        this.confirmLoading = false
      }, 2000)
    },

    handleCreate() {
      this.confirmLoading = true
      const newKey = this.data.length
        ? Math.max(...this.data.map((item) => item.key)) + 1
        : 1
      this.data.push({ ...this.formState, key: newKey })
      setTimeout(() => {
        this.openModalCreate = false
        this.confirmLoading = false
        this.resetFormState()
      }, 2000)
    },

    handleModalUpdate(value) {
      this.openModalUpdate = value
    },

    handleModalCreate(value) {
      this.openModalCreate = value
    },

    resetFormState() {
      this.formState = {
        name: "",
        spu: "",
        status: "",
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
