<script setup>
import { ref } from 'vue'
import HomeIcon from '../icons/home-icon.svg'
import TeacherIcon from '../icons/badge.svg'
import StudentIcon from '../icons/students.svg'
import PaymentIcon from '../icons/credit-card.svg'
import IconComponent from '@/components/atoms/icon-component.vue'
import { useRouter } from 'vue-router'
import privateRoutes from '@/router/routes-private.js'

const router = useRouter()

const itemsOfMenu = ref([
  {
    id: 1,
    title: 'Home',
    icon: HomeIcon,
    path: privateRoutes.DASHBOARD.MAIN,
    isWindowActive: false
  },
  {
    id: 2,
    title: 'Users',
    path: privateRoutes.DASHBOARD.TYPES,
    icon: StudentIcon,
    isWindowActive: false
  },
  {
    id: 3,
    title: 'Payments',
    path: '#',
    icon: PaymentIcon,
    isWindowActive: false
  }
])

const logout = () => {
  console.log('Logout')
  router.push(privateRoutes.LOGIN)
}

</script>

<template>
  <aside class="flex">
    <div
      class="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-monochrome-main dark:border-gray-700">
      <a href="#">
        <img class="w-auto h-6" src="https://merakiui.com/images/logo.svg" alt="main-image">
      </a>

      <a v-for="item in itemsOfMenu" :key="item.id" :href="item.path"
         :class="{ 'bg-monochrome-tertiary': item.isWindowActive }"
         class="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-blue-600 dark:hover:bg-monochrome-tertiary hover:bg-gray-100 ">
        <IconComponent
          :icono="item.icon"
          :svgClass="'w-6 h-6 fill-red-500'"
          :altText="item.title"
        />
      </a>

      <button
        @click="logout"
        class="mt-auto p-1.5 text-gray-500 focus:outline-none transition-colors duration-200 rounded-lg dark:text-blue-600 bg-red-400"
      >
        <img src="../../components/icons/logout.svg" alt="logout">
      </button>
    </div>
    <div class="flex-1">
      <!--      <h1>Content</h1>-->
      <slot>
        <router-view></router-view>
      </slot>
    </div>
  </aside>
</template>