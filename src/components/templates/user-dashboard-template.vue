<script setup>
</script>

<template>
  <div class="m-5 font-pop">
    <slot name="title"></slot>

    <div class="flex items-center gap-2 mt-4">
      <slot name="buttons"></slot>
    </div>
    <div class="card tabla fixed right-[45px] left-[75px]">
      <slot name="table"></slot>
    </div>
  </div>
</template>

<style scoped>
</style>