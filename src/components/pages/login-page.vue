<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LogoutImage from '/src/components/icons/logout.png'
import ButtonGeneral from '@/components/atoms/button-general.vue'
// import InputComponent from '@/components/atoms/input-component.vue'
import NoResponsive from '@/components/molecules/no-responsive.vue'
import { useRouter } from 'vue-router'

const isSmallScreen = ref(window.innerWidth < 1024)
const router = useRouter()

const email = ref('')
const password = ref('')

function handleResize() {
  isSmallScreen.value = window.innerWidth < 1024
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})


function login() {
  const inputCheckBox = document.getElementById('check')
  if (!inputCheckBox.checked) {
    console.log('Please agree to the terms of service and privacy policy')
  } else {
    console.log(email.value, password.value)
    router.push('/dashboard')
  }
}
</script>

<template>
  <NoResponsive v-if="isSmallScreen" />
  <div v-else class="font-pop h-screen w-screen bg-monochrome-main flex">
    <!--    Child Component-->
    <div class="flex shadow-2xl h-3/4 w-2/3 m-auto rounded-xl">
      <!--      Color Side-->
      <div class="bg-monochrome-main w-1/2 rounded-l-xl">
        <div class="mt-10 ml-20 mr-20 flex flex-col">
          <!--        Image-->
          <div class="w-14 m-auto">
            <img :src="LogoutImage" alt="logout">
          </div>
          <h1 class="text-white text-center select-none font-bold text-3xl mt-4">Welcome back! Let's get started where
            you
            left.</h1>


          <div class="flex mt-20">
            <div class="bg-white w-1/2 rounded-xl mt-4 mb-4 ml-4 p-3 text-right">
              <label class="font-bold text-xl text-monochrome-main select-none">BELS</label>
            </div>
            <div class="bg-monochrome-main text-white text-xl w-1/2 mt-4 mb-4 p-3">
              <label class="select-none">GI</label>
            </div>
          </div>


        </div>
      </div>
      <!--      White Side-->
      <div class="bg-white w-1/2 rounded-r-xl">
        <div class="mt-10 ml-10 mr-10">
          <label class="font-bold text-4xl select-none">Login</label>
          <div class="flex items-center gap-2 mt-4">
            <div class="w-1/4 border-t-2 border-monochrome-main h-0.5"></div>
            <label class="font-bold select-none text-sm text-monochrome-main ml-2">Login with</label>
          </div>

          <div class="flex flex-row">
            <ButtonGeneral iconSrc="/src/components/icons/google.png" text="Google" />
            <ButtonGeneral iconSrc="/src/components/icons/facebook.png" text="Facebook" />
          </div>

          <form @submit.prevent="login">
            <div class="flex flex-col">
              <label class="select-none text-sm text-black mt-4">Email</label>
              <input v-model="email" type="email"
                     class="border-2 border-monochrome-main bg-monochrome-input rounded-xl text-md w-auto mr-2 p-2"
                     required>
            </div>
            <div class="flex flex-col ">
              <label class="select-none text-sm text-black mt-4">Password</label>
              <!--              <InputComponent @input="password" placeholder="Email" type="password" />-->
              <input v-model="password" type="password"
                     class="border-2 border-monochrome-main bg-monochrome-input rounded-xl text-md w-auto mr-2 p-2"
                     required>
            </div>

            <div class="flex">
              <input id="check" type="checkbox" class="mt-4 checked:bg-monochrome-main" required>
              <label class="text-xs text-monochrome-main select-none font-semibold mt-4 ml-2">I've read and agree with
                Terms of Service and our Privacy Policy</label>
            </div>

            <button @click="login"
                    class="bg-monochrome-main text-white text-xl shadow-xl w-full mt-4 mb-4 p-2 rounded-xl">Login
            </button>
          </form>
          <p class="text-center text-xs text-monochrome-main select-none mt-6">
            Don't have an account?
            <a href="#" class="text-monochrome-main font-bold">Sign up</a></p>
        </div>
      </div>
    </div>
    <!--    End Child Component-->
  </div>
</template>

<style scoped></style>