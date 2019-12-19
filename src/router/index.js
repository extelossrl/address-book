import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routerContainer = {
  template: `<router-view />`
};

const routes = [
  {
    path: "/",
    redirect: "/contacts/list"
  },
  {
    path: "/contacts",
    component: routerContainer,
    children: [
      {
        path: "list",
        component: () => import("../views/contacts/list.vue")
      },
      {
        path: "new",
        component: () => import("../views/contacts/new.vue")
      },
      {
        path: "modify/:id",
        component: () => import("../views/contacts/modify/_id.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
