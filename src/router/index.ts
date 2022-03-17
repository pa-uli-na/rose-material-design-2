import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";

// 1. Define route components.
// These can be imported from other files
const Home = { template: "<div>Home</div>" };
import Login from "../view/Login.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/login", name: "login", component: Login },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
