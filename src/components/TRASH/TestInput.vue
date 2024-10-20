<template>
  <v-app>
    <v-container>
      <v-form @submit.prevent="submitForm">
        <v-select
          v-model="selectedFruitId"
          :items="filteredFruits"
          label="Выберите фрукт"
          item-text="name"
          item-value="id"
          @change="filterFruits"
          clearable
          hide-details
        >
          <template v-slot:prepend-item>
            <v-list-item ripple @click="clearSearch">
              <v-list-item-content>
                <v-list-item-title>Очистить поиск</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-select>

        <v-btn type="submit" color="primary">Отправить</v-btn>
      </v-form>

      <div v-if="selectedFruit">
        <p>Вы выбрали: {{ selectedFruit.name }}</p>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const fruits = ref([
      { id: 1, name: "Яблоко" },
      { id: 2, name: "Банан" },
      { id: 3, name: "Апельсин" },
      { id: 4, name: "Виноград" },
      { id: 5, name: "Ананас" },
    ]);

    const selectedFruitId = ref(null);
    const searchTerm = ref("");

    const filteredFruits = computed(() => {
      return fruits.value.filter((fruit) =>
        fruit.name.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    const selectedFruit = computed(() => {
      return (
        fruits.value.find((fruit) => fruit.id === selectedFruitId.value) || null
      );
    });

    const clearSearch = () => {
      searchTerm.value = "";
      selectedFruitId.value = null;
    };

    const submitForm = () => {
      console.log("Отправлено:", selectedFruit.value);
    };

    return {
      fruits,
      selectedFruitId,
      filteredFruits,
      selectedFruit,
      clearSearch,
      submitForm,
    };
  },
};
</script>

<style scoped>
.v-container {
  max-width: 400px;
  margin: auto;
}
</style>
