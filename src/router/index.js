import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Sobre from '@/views/Sobre'
import Form from '@/views/Form'

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'sobre',
        path: '/sobre',
        component: Sobre
    },
    {
        name: 'form',
        path: '/form',
        component: Form
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router