<template>
  <div class="w-full h-screen flex justify-center items-center bg__img">
    <div :class="'container' + (isActive ? ' active' : '')" id="container">
      <div class="form-container sign-up">
        <a-form
          :model="formState"
          class="form"
          :rules="rules"
          name="form_signin"
          ref="formRef"
          autocomplete="off"
        >
          <h1 class="text-2xl font-bold text-orange-600 mb-6">
            Create Account
          </h1>
          <a-form-item name="username" class="w-full">
            <a-input
              placeholder="Username"
              class="bg-[#eee] border-transparent px-4 py-2"
              v-model:value="formState.username"
            />
          </a-form-item>

          <a-form-item name="password" class="w-full">
            <a-input-password
              placeholder="Password"
              class="bg-[#eee] border-transparent px-4 py-2"
              v-model:value="formState.password"
            />
          </a-form-item>

          <a-form-item name="checkPass" class="w-full">
            <a-input-password
              placeholder="Password confirm"
              v-model:value="formState.checkPass"
              class="bg-[#eee] border-transparent px-4 py-2"
              type="password"
              autocomplete="off"
            />
          </a-form-item>

          <a-form-item class="mt-4 mb-0">
            <div class="flex justify-center items-center flex-col">
              <a-button
                class="bg-[#f12711] px-8 py-[18px] flex justify-center items-center font-semibold uppercase"
                type="primary"
                html-type="submit"
                @click="handleRegister"
              >
                Register
              </a-button>
              <a-alert
                v-if="isShow"
                message="Success Tips"
                type="success"
                show-icon
              />
            </div>
          </a-form-item>
        </a-form>
      </div>
      <div class="form-container sign-in" :class="isActive ? 'hidden' : ''">
        <a-form
          :model="formState"
          class="form"
          :rules="rules"
          name="form_login"
          ref="formRef"
          autocomplete="off"
        >
          <h1 class="text-2xl font-bold text-orange-600">Sign In</h1>
          <div class="social-icons">
            <a href="#" class="icon">
              <i class="pi pi-google"></i>
            </a>
            <a href="#" class="icon">
              <i class="pi pi-facebook"></i>
            </a>
          </div>
          <span class="mb-4">or use your email and password</span>
          <a-form-item name="username" class="w-full">
            <a-input
              placeholder="Username"
              class="bg-[#eee] border-transparent px-4 py-2"
              v-model:value="formState.username"
            />
          </a-form-item>

          <a-form-item name="password" class="w-full">
            <a-input-password
              placeholder="Password"
              class="bg-[#eee] border-transparent px-4 py-2"
              v-model:value="formState.password"
            />
          </a-form-item>

          <a-form-item name="remember" class="w-full mb-2">
            <a-checkbox v-model:checked="formState.remember">
              Remember me
            </a-checkbox>
          </a-form-item>

          <a-form-item>
            <div class="flex justify-center items-center flex-col">
              <a-button
                class="bg-[#f12711] px-8 py-[18px] flex justify-center items-center font-semibold uppercase"
                type="primary"
                html-type="submit"
                @click="handleLogin"
              >
                Log in
              </a-button>
              <p class="text-center mt-2">Forgot your email or password?</p>
            </div>
          </a-form-item>
        </a-form>
      </div>
      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of the site's features</p>
            <button
              :class="isActive ? '' : 'hidden'"
              id="login"
              @click="togglePanel"
            >
              Sign In
            </button>
          </div>
          <div class="toggle-panel toggle-right">
            <h1>Hello, User!</h1>
            <p>
              Register with your personal details to use all of the site's
              features
            </p>
            <button
              :class="isActive ? 'hidden' : ''"
              id="register"
              @click="togglePanel"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification'

const toast = useToast()
export default {
  data() {
    return {
      isActive: false,
      isShow: false,
      formState: {
        username: '',
        password: '',
        checkPass: '',
        remember: true,
      },
      rules: {
        username: [
          {
            required: true,
            validator: this.validateUsername,
            trigger: 'change',
          },
        ],
        password: [
          { required: true, validator: this.validatePass, trigger: 'change' },
        ],
        checkPass: [{ validator: this.validatePassConfirm, trigger: 'change' }],
      },
    }
  },
  methods: {
    validateUsername(rule, value) {
      return new Promise((resolve, reject) => {
        if (value === '') {
          reject('Please input the username')
        } else {
          resolve()
        }
      })
    },
    validatePass(rule, value) {
      return new Promise((resolve, reject) => {
        if (value === '') {
          reject('Please input the password')
        } else {
          if (this.formState.checkPass !== '') {
            this.$refs.formRef.validateFields(['checkPass'])
          }
          resolve()
        }
      })
    },
    validatePassConfirm(rule, value) {
      return new Promise((resolve, reject) => {
        if (value === '') {
          reject('Please input the password again')
        } else if (value !== this.formState.password) {
          reject("Two inputs don't match!")
        } else {
          resolve()
        }
      })
    },
    togglePanel() {
      this.isActive = !this.isActive
    },
    handleRegister() {
      this.$refs.formRef
        .validate()
        .then(() => {
          toast.success('Register Success!')
          setTimeout(() => {
            this.isActive = !this.isActive
            this.resetFormState()
          }, 1500)
        })
        .catch(() => {
          toast.error('Please check the form for errors.')
        })
    },
    handleLogin() {
      this.$refs.formRef
        .validate()
        .then(() => {
          toast.success('Login Success!')
          setTimeout(() => {
            this.isActive = !this.isActive
            this.$router.push({ path: '/home' })
          }, 1500)
        })
        .catch(() => {
          toast.error('Please check the form for errors.')
        })
    },
    resetFormState() {
      this.formState = {
        username: '',
        password: '',
        checkPass: '',
        remember: true,
      }
    },
  },
}
</script>

<style scoped>
.bg__img {
  background-image: url('/src/assets/images/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

#login,
#register {
  background-color: transparent;
  border: 2px solid #fff;
  padding: 6px 18px;
  border-radius: 8px;
  margin-top: 30px;
  font-weight: bold;
}

#login:hover,
#register:hover {
  border-color: black;
  color: black;
}

.container .form {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.active .sign-in {
  transform: translateX(100%);
}

.sign-up {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.active .sign-up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: move 0.6s;
}

@keyframes move {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.social-icons {
  margin: 20px 0;
}

.social-icons a {
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
}

.toggle-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;
}

.container.active .toggle-container {
  transform: translateX(-100%);
  border-radius: 0 150px 100px 0;
}

.toggle {
  background-color: #f12711;
  height: 100%;
  background: linear-gradient(to right, #f12711, #f5af19);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.container.active .toggle {
  transform: translateX(50%);
}

.toggle-panel {
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.toggle-left {
  transform: translateX(-200%);
}

.container.active .toggle-left {
  transform: translateX(0);
}

.toggle-right {
  right: 0;
  transform: translateX(0);
}

.container.active .toggle-right {
  transform: translateX(200%);
}

/* ADAPTIVE  for mobile devices */

@media only screen and (min-width: 320px) and (max-width: 767px) {
  .container {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: center;
    overflow: hidden;
    width: 330px;
    max-width: 100%;
    min-height: 500px;
  }
  .social-icons a {
    font-size: 10px;
    border-radius: 30%;
    margin: 1px 3px 3px;
    justify-content: center;
    width: 30px;
    height: 30px;
  }
  .toggle-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    border-radius: 75px 0 0 50px;
    z-index: 500;
  }
  h1 {
    font-size: 20px;
  }
  .span {
    font-size: 3px;
  }
  a {
    font-size: 5px;
  }
  .container form {
    font-size: 15px;
  }
  .container input {
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 10px;
    border-radius: 8px;
    width: 120%;
    outline: none;
  }
  .container button {
    background-color: #f12711;
    color: #fff;
    font-size: 11px;
    padding: 5px 25px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 15px;
    cursor: pointer;
  }
  .sign-in {
    left: 0;
    width: 50%;
    z-index: 1;
  }
  .sign-up {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }
}
</style>
>
