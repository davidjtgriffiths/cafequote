import { createRouter, createWebHashHistory } from 'vue-router'
import ViewLeads from '@/views/ViewLeads.vue'
import ViewEditLead from '@/views/ViewEditLead.vue'
import ViewQuotes from '@/views/ViewQuotes.vue'
import ViewAuth from '@/views/ViewAuth.vue'

const routes = [
    {
        path: '/',
        name: 'leads',
        component: ViewLeads
    },
    {
        path: '/editLead/:id',
        name: 'edit-lead',
        component: ViewEditLead
    },
    {
        path: '/quotes',
        name: 'quotes',
        component: ViewQuotes
    },
    {
        path: '/auth',
        name: 'auth',
        component: ViewAuth
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router