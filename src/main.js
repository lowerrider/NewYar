import "./assets/main.css";

import { createApp } from "vue";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

import App from "./App.vue";

const app = createApp(App);
const vuetify = createVuetify();
app.use(vuetify);

app.mount("#app");
