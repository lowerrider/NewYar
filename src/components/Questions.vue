<template>
  <div class="contentQuest">
    <form class="form" @submit.prevent>
      <transition name="fade" mode="out-in">
        <QuestionEvent
          v-if="currentNomination"
          :key="currentNomination.id"
          :title="currentNomination.title"
          :subTitle="currentNomination.subTitle"
          :id="currentNomination.id"
          :selected="selectedValues[currentNomination.id]"
          @update:selected="updateSelected" />
      </transition>
      <div v-if="message" class="error-message">{{ message }}</div>
      <div class="buttons">
        <button
          type="button"
          @click="previousQuestion"
          :disabled="isFirstQuestion"
          :class="{ 'disabled-button': isFirstQuestion }">
          Предыдущий вопрос
        </button>
        <button
          type="button"
          @click="nextQuestion"
          :disabled="isLastQuestion"
          :class="{ 'disabled-button': isLastQuestion }">
          Следующий вопрос
        </button>
        <button type="button" @click="handleSubmit">Отправить</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import QuestionEvent from "./QuestionEvent.vue";
import { ref, computed } from "vue";

const nomination = [
  {
    title: "НАСЛЕДИЕ ЮНЕСКО",
    subTitle: "Сотрудник, работой с которым гордится вся компания!",
    id: "unesko",
  },
  {
    title: "ЗАГАДОЧНЫЙ МАЙЯ",
    subTitle: "Внимательно следит за деталями, улавливает тонкости...",
    id: "maya",
  },
  {
    title: "ТЕКИЛА ЛЮБОВЬ",
    subTitle: "Самый обаятельный и привлекательный даже без текилы.",
    id: "tekila",
  },
  {
    title: "ОСТРЫЙ КАК ПЕРЕЦ ЧИЛИ",
    subTitle: "Самый остроумный и веселый сотрудник компании.",
    id: "chily",
  },
  {
    title: "ГРЯЗНЫЙ САНЧЕС",
    subTitle: "Сотрудник, который больше всех работает по мнению окружающих.",
    id: "derty",
  },
];

const selectedValues = ref({});
const currentIndex = ref(0);
const message = ref("");

const currentNomination = computed(() => nomination[currentIndex.value]);
const isLastQuestion = computed(
  () => currentIndex.value === nomination.length - 1
);
const isFirstQuestion = computed(() => currentIndex.value === 0);
const isAnyQuestionUnanswered = computed(() =>
  nomination.some((n) => !selectedValues.value[n.id])
);

const updateSelected = ({ id, value }) => {
  selectedValues.value[id] = value;
  message.value = ""; // Сброс сообщения при выборе ответа
};

const nextQuestion = () => {
  if (!isLastQuestion.value) {
    currentIndex.value++;
  }
};

const previousQuestion = () => {
  if (!isFirstQuestion.value) {
    currentIndex.value--;
  }
};

const handleSubmit = () => {
  const unansweredIndex = nomination.findIndex(
    (n) => !selectedValues.value[n.id]
  );

  if (unansweredIndex !== -1) {
    message.value = "Вы ответили не на все вопросы";
    currentIndex.value = unansweredIndex; // Возвращаем к первому неотвеченному вопросу
    console.log(`Возвращаемся к вопросу с индексом: ${unansweredIndex}`);
  } else {
    message.value = ""; // Сброс сообщения
    console.log("Отправка данных:", selectedValues.value);
    // Здесь можно добавить логику отправки данных, например, через API
  }
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 20px;
  text-align: center; /* Центрируем текст */
  width: 100%; /* Задаем ширину 100% */
}
.form {
  width: 100%;
  max-width: 1100px;
  min-height: 500px;
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.contentQuest {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.disabled-button {
  background-color: #cccccc; /* Серый цвет для отключенной кнопки */
  color: #666666; /* Более светлый текст */
  cursor: not-allowed; /* Указываем, что кнопка неактивна */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active в <2.1.8 */ {
  opacity: 0;
}
</style>
