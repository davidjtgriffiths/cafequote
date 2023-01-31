import { createRouter, createWebHashHistory } from 'vue-router'
import ViewLeads from '@/views/leads/ViewLeads.vue'
import ViewEditLead from '@/views/leads/ViewEditLead.vue'
import ViewQuotes from '@/views/quotes/ViewQuotes.vue'
import ViewEditQuote from '@/views/quotes/ViewEditQuote.vue'
import ViewSysVars from '@/views/sysvars/ViewSysVars.vue'
import ViewEditSysVar from '@/views/sysvars/ViewEditSysVar.vue'
import ViewItemOptions from '@/views/itemoptions/ViewItemOptions.vue'
import ViewEditItemOption from '@/views/itemoptions/ViewEditItemOption.vue'
import PreviewContract from '@/views/quotes/PreviewContract.vue'
import ViewAuth from '@/views/auth/ViewAuth.vue'
import { useStoreAuth } from '@/stores/StoreAuth.js'

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
        path: '/editQuote/:id',
        name: 'edit-quote',
        component: ViewEditQuote
    },
    {
        path: '/sysvars',
        name: 'sysvars',
        component: ViewSysVars
    },
    {
        path: '/editsysvar/:id',
        name: 'edit-sysvar',
        component: ViewEditSysVar
    },
    {
        path: '/itemoptions',
        name: 'itemoptions',
        component: ViewItemOptions
    },
    {
        path: '/edititemoption/:id',
        name: 'edit-itemoption',
        component: ViewEditItemOption
    },
    {
        path: '/previewContract/:id',
        name: 'preview-contract',
        component: PreviewContract
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

router.beforeEach(async (to, from) => {
    // TODO: admin only for sysVars
    const storeAuth = useStoreAuth()
if (!storeAuth.user.id && to.name !== 'auth') {
    return { name: 'auth'}
}
if (storeAuth.user.id && to.name == 'auth') {
    return false
}
  })