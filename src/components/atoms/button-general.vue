<script setup>

defineProps({
  iconSrc: String,
  text: String
})

</script>

<template>
  <button
    class="flex items-center bg-white hover:bg-monochrome-tertiary hover:text-white select-none text-monochrome-main border-2 border-monochrome-main rounded-xl text-md w-auto mt-2 mb-2 mr-2 p-2">
    <img :src="iconSrc" :alt="text" class="mr-2"> {{ text }}
  </button>
</template>