import { createRouter, createWebHistory } from "vue-router";
import TLContainer from "@/components/TLContainer.vue";

const routes = [
  {
    path: "/",
    redirect: "/red",
  },
  {
    path: "/:color",
    redirect: "/red",
  },
  {
    path: "/:color(red|yellow|green)",
    component: TLContainer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
