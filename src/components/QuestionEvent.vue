<script setup>
import VueSelect from "vue3-select-component";
import axios from "axios";
import { ref, onMounted, computed } from "vue";

defineProps({
  title: String,
  subTitle: String,
});

const selected = ref("");

const items = ref([]);

const fetchItems = async () => {
  try {
    const { data } = await axios.get(
      "https://5730997ff4827f80.mokky.dev/members"
    );
    items.value = data;
  } catch (e) {
    console.log(e);
  }
};

console.log(selected);

const options = computed(() =>
  items.value.map((e, i) => {
    return {
      label: e.title,
      value: e.id,
    };
  })
);

onMounted(fetchItems);
</script>

<template>
  <div class="content2">
    <div class="inputSize">
      <h2>{{ title }}</h2>
      <h3>{{ subTitle }}</h3>
      <VueSelect
        v-model="selected"
        :options="options"
        placeholder="Выберите победителя"
      />
    </div>

    <h3>change - {{ selected }}</h3>
  </div>
</template>

<style scoped>
.content2 {
  display: flex;
  justify-content: center;
  margin: 140px;
}
.inputSize {
  width: 70%;
  text-align: center;
}
</style>
