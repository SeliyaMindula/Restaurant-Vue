import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
import AddResto from './components/AddResto.vue';
import UpdateResto from './components/UpdateResto.vue'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: "Home-c",
        component: Home,
        path: '/'
    },
    {
        name: "SignUp",
        component: SignUp,
        path: '/SignUp'
    },
    {
        name: "Login-c",
        component: Login,
        path: '/Login'
    },
    {
        name: "AddResto",
        component: AddResto,
        path: '/Add'
    },
    {
        name: "UpdateResto",
        component: UpdateResto,
        path: '/Update/:id'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;