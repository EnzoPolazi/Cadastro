import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Sobre from '@/views/Sobre'
import Cadastro from '@/views/Cadastro'
import Login from '@/views/Login'
import Logout from '@/views/Logout'
import Edit from '@/views/Edit'

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
    },
    {
        name: 'edit',
        path: '/edit',
        component: Edit
    },
    {
        name: 'logout',
        path: '/logout',
        component: Logout
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router