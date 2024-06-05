<template>
  <a-modal
    :open="visible"
    title="Địa chỉ của tôi"
    @ok="handleOk"
    @cancel="handleCancel"
    width="fit-content"
  >
    <template #footer>
      <a-button key="back" @click="handleCancel">Huỷ</a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="loading"
        @click="handleOk"
      >
        Xác nhận
      </a-button>
    </template>
    <a-form
      ref="formAddress"
      class="my-4 flex flex-col"
      :model="formState"
      :rules="rules"
      name="formAddress"
      autocomplete="off"
    >
      <div class="flex gap-4">
        <a-form-item name="fullName">
          <a-input v-model:value="formState.fullName" placeholder="Họ và tên" />
        </a-form-item>

        <a-form-item name="phoneNumber">
          <a-input
            v-model:value="formState.phoneNumber"
            placeholder="Số điện thoại"
          />
        </a-form-item>
      </div>
      <div class="flex gap-3">
        <a-form-item name="selectTinh">
          <a-select
            v-model="formState.selectTinh"
            @change="fetchQuanHuyen"
            style="width: 200px"
            placeholder="Tỉnh/Thành phố"
          >
            <a-select-option value="">Tỉnh/Thành phố</a-select-option>
            <a-select-option
              v-for="tinh in tinhList"
              :key="tinh.id"
              :value="tinh.id"
            >
              {{ tinh.full_name }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item name="selectQuanHuyen">
          <a-select
            v-model="formState.selectQuanHuyen"
            @change="fetchPhuongXa"
            style="width: 200px"
            :disabled="formState.selectTinh === ''"
            placeholder="Quận/Huyện"
          >
            <a-select-option value="">Quận/Huyện</a-select-option>
            <a-select-option
              v-for="quan in quanList"
              :key="quan.id"
              :value="quan.id"
            >
              {{ quan.full_name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item name="selectPhuong">
          <a-select
            v-model="formState.selectPhuong"
            @change="handleSelectPhuong"
            style="width: 200px"
            :disabled="formState.selectQuanHuyen === ''"
            placeholder="Phường/Xã"
          >
            <a-select-option value="">Phường/Xã</a-select-option>
            <a-select-option
              v-for="phuong in phuongList"
              :key="phuong.id"
              :value="phuong.id"
            >
              {{ phuong.full_name }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </div>
      <a-form-item name="addressLocal">
        <a-input
          v-model:value="formState.addressLocal"
          placeholder="Địa chỉ cụ thể"
        />
      </a-form-item>
      <div class="bg-neutral-100 p-4 rounded">
        {{
          "Địa chỉ: " +
          (formState.addressLocal ? formState.addressLocal + ", " : "") +
          address
        }}
      </div>
    </a-form>
  </a-modal>
</template>

<script>
import axios from "axios"

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tinhList: [],
      quanList: [],
      phuongList: [],
      loading: false,
      formState: {
        fullName: "",
        phoneNumber: "",
        selectTinh: "",
        selectQuanHuyen: "",
        selectPhuong: "",
        addressLocal: "",
      },
      rules: {
        fullName: [
          { required: true, message: "Vui lòng nhập tên", trigger: "change" },
        ],
        phoneNumber: [
          {
            required: true,
            validator: this.validatePhoneNumber,
            trigger: "change",
          },
        ],
        selectTinh: [
          {
            required: true,
            message: "Vui lòng chọn Tỉnh/Thành phố",
            trigger: "change",
          },
        ],
        selectQuanHuyen: [
          {
            required: true,
            message: "Vui lòng chọn Quận/Huyện",
            trigger: "change",
          },
        ],
        selectPhuong: [
          {
            required: true,
            message: "Vui lòng chọn Phường/Xã",
            trigger: "change",
          },
        ],
        addressLocal: [
          {
            required: true,
            message: "Vui lòng nhập địa chỉ cụ thể",
            trigger: "change",
          },
        ],
      },
    }
  },
  mounted() {
    this.fetchTinhThanh()
  },
  computed: {
    address() {
      const tinh = this.tinhList.find(
        (tinh) => tinh.id === this.formState.selectTinh
      )
      const quan = this.quanList.find(
        (quan) => quan.id === this.formState.selectQuanHuyen
      )
      const phuong = this.phuongList.find(
        (phuong) => phuong.id === this.formState.selectPhuong
      )
      let fullAddress = ""
      if (tinh) {
        fullAddress += tinh.full_name
      }
      if (quan) {
        if (fullAddress !== "") {
          fullAddress += ", "
        }
        fullAddress += quan.full_name
      }
      if (phuong) {
        if (fullAddress !== "") {
          fullAddress += ", "
        }
        fullAddress += phuong.full_name
      }

      return fullAddress
    },
  },
  methods: {
    async fetchTinhThanh() {
      try {
        const response = await axios.get(
          "https://esgoo.net/api-tinhthanh/1/0.htm"
        )
        if (response.data.error === 0) {
          this.tinhList = response.data.data
        }
      } catch (error) {
        console.error("Error fetching Tinh Thanh:", error)
      }
    },

    async fetchQuanHuyen(selectedTinh) {
      this.formState.selectTinh = selectedTinh
      this.formState.selectQuanHuyen = ""
      this.formState.selectPhuong = ""
      if (this.formState.selectTinh !== "") {
        try {
          const response = await axios.get(
            `https://esgoo.net/api-tinhthanh/2/${this.formState.selectTinh}.htm`
          )
          if (response.data.error === 0) {
            this.quanList = response.data.data
            this.phuongList = [] // Reset phuongList
          }
        } catch (error) {
          console.error("Error fetching Quan Huyen:", error)
        }
      }
    },

    async fetchPhuongXa(selectedQuan) {
      this.formState.selectQuanHuyen = selectedQuan
      this.formState.selectPhuong = ""
      if (this.formState.selectQuanHuyen !== "") {
        try {
          const response = await axios.get(
            `https://esgoo.net/api-tinhthanh/3/${this.formState.selectQuanHuyen}.htm`
          )
          if (response.data.error === 0) {
            this.phuongList = response.data.data
          }
        } catch (error) {
          console.error("Error fetching Phuong Xa:", error)
        }
      }
    },

    handleSelectPhuong(selectedPhuong) {
      this.formState.selectPhuong = selectedPhuong
    },

    handleOk() {
      this.$refs.formAddress
        .validate()
        .then((valid) => {
          if (valid) {
            this.loading = true
            setTimeout(() => {
              this.loading = false
              this.$emit("onOk", {
                fullName: this.formState.fullName,
                phoneNumber: this.formState.phoneNumber,
                addressLocal: this.formState.addressLocal,
                address: this.address,
              })
            }, 2000)
          } else {
            console.log("error submit!!")
          }
        })
        .catch((error) => {
          console.log("validation failed:", error)
        })
    },

    handleCancel() {
      this.$emit("onCancel")
    },

    validatePhoneNumber(rule, value) {
      return new Promise((resolve, reject) => {
        const regexPhoneNumber = /^(84|0[3|5|7|8|9])[0-9]{8}$/
        if (value === "") {
          reject("Vui lòng nhập số điện thoại")
        } else if (!regexPhoneNumber.test(value)) {
          reject("Số điện thoại không đúng định dạng")
        } else {
          resolve()
        }
      })
    },
  },
}
</script>
