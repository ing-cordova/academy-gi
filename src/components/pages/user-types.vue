<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AdminIcon from '../../components/icons/admin.svg'
import ForSchoolIcon from '../../components/icons/forschool.svg'
import ForTeachersIcon from '../../components/icons/forteacher.svg'
import privateRoutes from '@/router/routes-private.js'

const router = useRouter()

const itemsOfCards = ref([
  {
    id: 1,
    title: 'Administrator',
    icon: AdminIcon,
    path: privateRoutes.DASHBOARD.WELCOME_ROLE
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

const redirectTo = (path) => {
  console.log('redirecting to: ',path)
  router.push(path)
}

</script>

<template>
  <div class="m-5 font-pop">
    <h1 class="text-3xl font-bold text-monochrome-main select-none">User Types</h1>
    <p class="text-monochrome-secondary mt-2 select-none">First, you need to select a user type to continue.</p>
    <div class="flex mt-10">
      <button
        v-for="item in itemsOfCards" :key="item.id"
        class="bg-monochrome-main hover:bg-monochrome-secondary text-white w-1/2 h-56 rounded-xl flex-row p-3 mr-1 text-center"
        @click="redirectTo(item.path)"
      >
        <img :src="item.icon" :alt="item.title" class="mx-auto w-1/3 h-1/3">
        <span class="font-bold select-none text-2xl mt-4">{{ item.title.toUpperCase() }}</span>
      </button>
    </div>
  </div>
</template>