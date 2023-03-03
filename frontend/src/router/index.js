import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/storesystem",
    name: "StoreSystem",
    component: () => import("@/views/StoreSystem.vue"),
  },
  {
    path: "/introduce",
    name: "Introduce",
    component: () => import("@/views/Introduce.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/RegisterPage.vue"),
  },
  {
    path: "/cartStore",
    name: "Cart",
    component: () => import("@/views/CartPage.vue"),
  },
  {
    path: "/detail/:id",
    name: "Details",
    component: () => import("@/views/DetailsProduct.vue"),
  },
  {
    path: "/findProduct/:name",
    name: "FindProduct",
    component: () => import("@/views/FindProduct.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
