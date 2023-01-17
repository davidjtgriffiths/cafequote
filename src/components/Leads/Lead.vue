<template>
    <div
        class="card mb-4"
    >
        <div class="card-content">
            <div class="content">
                <div>{{ lead.firstName }}</div>
                <div>{{ lead.lastName }}</div>
                <div class="has-text-right mt-2">
                    <small>Date {{ dateFormatted }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink
                :to="`/editLead/${ lead.id }`"
                href="#"
                class="card-footer-item"
            >
                Edit
            </RouterLink>
            <a
                @click.prevent="modals.deleteLead = true"
                href="#"
                class="card-footer-item">Delete</a
            >
            <a
                @click.prevent="gotoQuote(lead.id)"
                href="#"
                class="card-footer-item">Quote</a
            >

        </footer>
        <ModalDeleteLead
            v-if="modals.deleteLead"
            v-model="modals.deleteLead"
            :leadId="lead.id"
        />
    </div>
</template>

<script setup>
    import { reactive, computed } from 'vue'
    import ModalDeleteLead from '@/components/Leads/ModalDeleteLead.vue';
    import { useStoreLeads } from '@/stores/StoreLeads'
    import { useStoreQuotes } from '@/stores/StoreQuotes'
    import { useDateFormat } from '@vueuse/core';
    import AddEditQuote from '../Quotes/AddEditQuote.vue';
    import { useRoute, useRouter } from 'vue-router'
    import ViewLeads from '../../views/leads/ViewLeads.vue';

    const storeLeads = useStoreLeads()
    const storeQuotes = useStoreQuotes()
    const router = useRouter()

    const dateFormatted = computed(() => {
        let date = new Date(parseInt(props.lead.date))
        return useDateFormat(date, 'YYYY-MM-DD HH:mm:ss').value
    })

    const props = defineProps({
        lead: {
            type: Object,
            required: true
        }
    })

    const emit = defineEmits(['deleteClicked'])

    const modals = reactive({
        deleteLead: false
    })

    // this should poss go in module or ViewLeads.vue
    const gotoQuote = async (leadId) => {
        console.log('find or create quote')
        let quote = null
        // Find quote in storeQuotes
        quote = storeQuotes.getQuoteFromLeadId(leadId)
        console.log('found quote in gotoQuote', quote)
        // If no quote, create one - IN THE STORE but dont wait for firebase
        // But I do need to wait for firebase because i need quiteid to edit it!!!
        if (!quote) {
            let x = await storeQuotes.addQuote(quote, leadId)
            //TODO:not getting past here when click quote on lead w/ no quote
            console.log('x', x)
        }
        //get Quote by lead id
        quote = storeQuotes.getQuoteFromLeadId(leadId)
        // Jump to edit
        console.log('quoteid returned from addquote', quote)
        router.push(`/editQuote/${ quote }`)

    }

</script>