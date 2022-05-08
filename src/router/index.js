import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import SidePage from "../views/SidePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/SidePage",
      name: "sidePage",
      component: SidePage,
    },
  ],
});

export default router;
