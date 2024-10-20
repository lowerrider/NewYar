<template>
  <div class="members" v-auto-animate>
    <Member
      v-for="item in items"
      :id="item.id"
      :key="item.id"
      :title="item.title" />
  </div>
</template>

<script setup>
import Member from "./Member.vue";
defineProps({
  items: Array,
});
</script>

<style scoped>
.members {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
