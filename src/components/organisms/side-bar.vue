<script setup>
import { ref } from 'vue'
import HomeIcon from '../icons/home-icon.svg'
import TeacherIcon from '../icons/badge.svg'
import PaymentIcon from '../icons/credit-card.svg'
import IconComponent from '@/components/atoms/icon-component.vue'

const itemsOfMenu = ref([
  {
    id: 1,
    title: 'Home',
    icon: HomeIcon,
    path: '/dashboard',
    isWindowActive: true
  },
  {
    id: 2,
    title: 'Teachers',
    path: '/teachers',
    icon: TeacherIcon,
    isWindowActive: false
  },
  {
    id: 3,
    title: 'Payments',
    path: '/payment',
    icon: PaymentIcon,
    isWindowActive: false
  }
])

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
    </div>
  </aside>
</template>