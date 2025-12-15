import { createWebHistory, createRouter } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import("./components/Home.vue")
    },
    {
        path: "/work",
        name: "work",
        component: () => import("./components/Work.vue")
    },
    {
        path: "/blog",
        name: "blog",
        component: () => import("./components/Blog.vue")
    },
    {
        path: "/blog/takuzu",
        name: "Takuzu2077",
        component: () => import("./components/articles/Takuzu.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("./components/NotFound.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
