<template>
  <div class="center">
    <div>
      <h2>НАСЛЕДИЕ ЮНЕСКО</h2>
      <h3>
        Сотрудник, работой с которым в одной команде гордится вся компания!
      </h3>
    </div>

    <input
      @input="onChangeSearchInput"
      class="inputText"
      type="text"
      placeholder="Поиск..."
    />
    <MemberList :items="items" />
  </div>
</template>

<script setup>
import MemberList from "./MemberList.vue";
import { reactive, watch, ref, onMounted } from "vue";
import axios from "axios";

const items = ref([]);

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    };
    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`;
    }
    const { data } = await axios.get(
      "https://5730997ff4827f80.mokky.dev/members",
      {
        params,
      }
    );
    items.value = data;
  } catch (err) {
    console.log(err);
  }
};

const filters = reactive({
  sortBy: "title",
  searchQuery: "",
});

const onChangeSearchInput = (ev) => {
  filters.searchQuery = ev.target.value;
};

onMounted(fetchItems);
watch(filters, fetchItems);
</script>

<style>
.center {
  margin-top: 50vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.inputText {
  padding: 0 0 0 40px;
  width: 70%;
  height: 48px;
  border-radius: 16px;
  margin: 20px;
}
</style>
