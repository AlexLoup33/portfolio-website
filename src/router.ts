import { createWebHistory, createRouter } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import("./components/Home.vue"),
        props: true
    },
    {
        path: "/work",
        name: "work",
        component: () => import("./components/Work.vue"),
        props: true
    },
    {
        path: "/blog",
        name: "blog",
        component: () => import ("./components/Blog.vue"),
        props: true
    },
    {
        path: "/blog/takuzu",
        name: "Takuzu 2077",
        component: () => import ("./components/articles/Takuzu.vue"),
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;