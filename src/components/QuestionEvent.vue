<script setup>
import VueSelect from "vue3-select-component";
import axios from "axios";
import { ref, onMounted, computed, defineEmits, watch } from "vue";

const props = defineProps({
  title: String,
  subTitle: String,
  id: String,
  selected: Number,
});

const emit = defineEmits(["update:selected"]);

const selected = ref("");

// Хранит элементы для выбора
const items = ref([]);

// Функция для получения данных
const fetchItems = async () => {
  try {
    const { data } = await axios.get(
      "https://5730997ff4827f80.mokky.dev/members"
    );
    items.value = data;
  } catch (e) {
    console.error("Ошибка при получении данных:", e);
  }
};

// Опции для компонента VueSelect
const options = computed(() =>
  items.value.map((e) => ({
    label: e.title,
    value: e.id,
  }))
);

// Синхронизация выбранного значения с родительским компонентом
watch(
  () => props.selected,
  (newValue) => {
    selected.value = newValue; // Сохраняем выбранное значение
  },
  { immediate: true } // Срабатывает сразу, чтобы отобразить выбранное значение при первом рендере
);

// Эмитим значение при изменении
watch(selected, (newValue) => {
  emit("update:selected", { id: props.id, value: newValue });
});

// Получение данных при монтировании компонента
onMounted(fetchItems);
</script>

<template>
  <div class="content2">
    <div class="inputSize">
      <h2 class="textTitle">{{ title }}</h2>
      <h3 class="textSubTitle">{{ subTitle }}</h3>

      <VueSelect
        class="select"
        :inputId="id"
        v-model="selected"
        :options="options"
        placeholder="Выберите победителя" />
    </div>
  </div>
</template>

<style scoped>
.textTitle {
  margin: 20px;
}
.textSubTitle {
  margin: 30px;
}
.select {
  margin: 60px auto; /* Центрируем селект */
  width: 100%; /* Делаем ширину 100% */
  max-width: 600px; /* Максимальная ширина для адаптивности */
}
.content2 {
  display: flex;
  justify-content: center;
  text-align: center;
}
.inputSize {
  width: 70%;
  text-align: center;
}
</style>
