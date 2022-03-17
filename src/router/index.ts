import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../layout/Default.vue"),
    children: [],
  },
  {
    path: "/login",
    component: () => import("../layout/Unlogged.vue"),
    children: [
      {
        path: "",
        component: () => import("../view/Login.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
