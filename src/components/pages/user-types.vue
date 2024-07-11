<script setup>
import { ref } from 'vue'
import AdminIcon from '../../components/icons/admin.svg'
import ForSchoolIcon from '../../components/icons/forschool.svg'
import ForTeachersIcon from '../../components/icons/forteacher.svg'

const itemsOfCards = ref([
  {
    id: 1,
    title: 'Administrator',
    icon: AdminIcon,
    path: '#'
  },
  {
    id: 2,
    title: 'Teacher',
    icon: ForTeachersIcon,
    path: '#'
  },
  {
    id: 3,
    title: 'Student',
    icon: ForSchoolIcon,
    path: '#'
  }
])

</script>

<template>
  <div class="m-5 font-pop">
    <h1 class="text-3xl font-bold text-monochrome-main select-none">User Types</h1>
    <p class="text-monochrome-secondary mt-2 select-none">Please select a user type</p>
    <div class="flex mt-10">
      <button
        v-for="item in itemsOfCards" :key="item.id"
        class="bg-monochrome-main hover:bg-monochrome-secondary text-white w-1/2 h-56 rounded-xl flex-row p-3 mr-1 text-center"
        >
        <img :src="item.icon" :alt="item.title" class="mx-auto w-1/3 h-1/3">
        <span class="font-bold select-none text-2xl mt-4">{{ item.title.toUpperCase() }}</span>
      </button>
    </div>
  </div>
</template>