import {createRouter, createWebHistory} from 'vue-router'
import contentComponent from "@/components/contentComponent";
import Home from "@/components/Home";

const routes = [
    {path: '/',name:'home', component: Home},
    {path: '/project',name:'project', component: contentComponent},
    {path: '/project/:name',name:'project-name', component: contentComponent},
    {path: '/project/:name/detail/:id', component: contentComponent},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;