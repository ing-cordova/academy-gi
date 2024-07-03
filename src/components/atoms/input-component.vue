<script setup>
defineProps({
  placeholder: String,
  type: String
})
</script>

<template>
  <input :type="type" class="border-2 border-monochrome-main bg-monochrome-input rounded-xl text-md w-auto mr-2 p-2">
</template>