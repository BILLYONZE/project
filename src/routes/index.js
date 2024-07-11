import{createRouter, createWebHistory} from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ContactUs from '../components/ContactUs.vue'
import Products from '@/components/Products.vue'
import Cart from '@/components/Cart.vue'
import AboutUs from '../components/AboutUs.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/aboutus',
        name: 'About Us',
        component: AboutUs,
    },
    {
        path: '/contactus',
        name: 'Contact Us',
        component: ContactUs,
    },
    {
        path: '/products',
        name: 'Products',
        component: Products,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    })
    export default router