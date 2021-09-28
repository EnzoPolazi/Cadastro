import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Cadastro from '@/views/Cadastro'
import Login from '@/views/Login'
import Edit from '@/views/Edit'
import Logout from '@/views/Logout'
import AlterarSenha from '@/views/AlterarSenha'

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
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
    },
    {
        name: 'alterar-senha',
        path: '/alterar-senha',
        component: AlterarSenha
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router