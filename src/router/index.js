import { createRouter, createWebHashHistory } from 'vue-router'
import ViewLeads from '@/views/ViewLeads.vue'
import ViewEditLead from '@/views/ViewEditLead.vue'
import ViewQuotes from '@/views/ViewQuotes.vue'

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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router