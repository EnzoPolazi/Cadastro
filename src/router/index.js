import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Sobre from '@/views/Sobre'
import Cadastro from '@/views/Cadastro'
import Login from '@/views/Login'

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
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router