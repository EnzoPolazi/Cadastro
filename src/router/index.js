import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Sobre from '@/views/Sobre'
import Cadastro from '@/views/Cadastro'

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
        name: 'cadastro',
        path: '/cadastro',
        component: Cadastro
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router