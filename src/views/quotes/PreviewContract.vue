<template>
<h1>preview of contract </h1>
<h2>quote</h2>
<p>{{ quote }}</p>
<h2>lead</h2>
<p>{{ lead }}</p>
<button
                @click="makePdf"
                class="button is-link has-background-link"
            >
                Make PDF
            </button>
</template>

<script setup>
    import { normalizeStyle, ref, reactive } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Quote from '@/components/Quotes/Quote.vue'
    import AddEditQuote from '@/components/Quotes/AddEditQuote.vue'
    import { useStoreQuotes } from '@/stores/StoreQuotes'
    import { useStoreLeads } from '@/stores/StoreLeads'

    const route = useRoute()
    const router = useRouter()


    const storeQuotes = useStoreQuotes()
    const storeLeads = useStoreLeads()

    const quote = storeQuotes.getQuote(route.params.id)
    const lead = storeLeads.getLead(quote.leadId)


    const makePdf = () => {
        console.log('make a fucking pdf init?')

    }




</script>