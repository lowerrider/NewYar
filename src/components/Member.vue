<template>
  <div class="member">
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style scoped>
.member {
  border: 2px solid white;
  margin: 4px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 1s ease;
}

.member:hover {
  background-color: black;
  transition: all 1s ease;
}
</style>
