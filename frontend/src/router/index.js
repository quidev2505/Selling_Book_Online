import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/admin",
    name: "HomePageAdmin",
    component: () => import("@/views/HomePageAdmin.vue"),
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
  {
    path: "/categoryBook/:name",
    name: "CategoryBook",
    component: () => import("@/views/CategoryBook.vue"),
  },
  {
    path: "/editBook/:id",
    name: "EditBook",
    component: () => import("@/views/EditBook.vue"),
  },
  {
    path: "/editCategory/:id",
    name: "EditCategory",
    component: () => import("@/views/EditCategory.vue"),
  },
  {
    path: "/editAuthor/:id",
    name: "EditAuthor",
    component: () => import("@/views/EditAuthor.vue"),
  },
  {
    path: "/editBookType/:id",
    name: "EditBookType",
    component: () => import("@/views/EditBookType.vue"),
  },
  {
    path: "/order",
    name: "OrderPage",
    component: () => import("@/views/OrderPage.vue"),
  },
  {
    path: "/order_complete/:id",
    name: "OrderCompletPage",
    component: ()=> import("@/views/OrderComplete.vue"),
  },
  {
    path: "/infoUser/:id",
    name: "infoUser",
    component: ()=>import("@/views/InfoUser.vue"),
  }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
