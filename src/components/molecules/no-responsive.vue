<script setup>
</script>

<template>
  <div class="no-responsive">
      <h1>We're sorry, but your screen is too small</h1>
    <p>We are currently working on a better experience, please use a larger screen in the meanwhile.</p>
  </div>
</template>

<style>
.no-responsive {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #4A47A3;
}

.no-responsive h1 {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

.no-responsive p {
  margin-top: 1rem;
  font-size: 1rem;
  color: white;
  font-family: 'Poppins', sans-serif;
  text-align: center;
}
</style>