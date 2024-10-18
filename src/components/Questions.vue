<template>
  <div class="contentQuest">
    <!-- <QuestionEvent
      v-for="nom in nomination"
      :title="nom.title"
      :subTitle="nom.subTitle"
    /> -->

    <TestInput />
  </div>
</template>

<script setup>
import QuestionEvent from "./QuestionEvent.vue";
import TestInput from "./TestInput.vue";
const nomination = [
  {
    title: "НАСЛЕДИЕ ЮНЕСКО",
    subTitle:
      "Сотрудник, работой с которым в одной команде гордится вся компания!",
  },
  {
    title: "ЗАГАДОЧНЫЙ МАЙЯ",
    subTitle:
      "Внимательно следит за деталями, улавливает тонкости, которые другие могут упустить (тихий наблюдательный, философский взгляд на жизнь).",
  },
  {
    title: "ТЕКИЛА ЛЮБОВЬ",
    subTitle: "Самый обаятельный и привлекательный даже без текилы.",
  },
  {
    title: "ОСТРЫЙ КАК ПЕРЕЦ ЧИЛИ",
    subTitle: "Самый остроумный и веселый сотрудник компании.",
  },
  {
    title: "ГРЯЗНЫЙ САНЧЕС",
    subTitle:
      "Сотрудник, который больше всех работает по мнению окружающих, трудоголик",
  },
];
</script>

<style scoped>
.contentQuest {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .content {
  padding: 400px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
} */
</style>
