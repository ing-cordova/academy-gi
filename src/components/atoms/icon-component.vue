<script setup>
defineProps({
  icono: String,
  altText: String,
  svgClass: String
})
</script>
<template>
  <img :src="icono" :class="svgClass" :alt="altText">
</template>