<template>

    <AddEditQuote
        v-model:first-field="newQuote.firstField"
        v-model:second-field="newQuote.secondField"
        ref="addEditQuoteRef"
    >
        <template #buttons>
            <button
                    @click="addQuote"
                    :disabled="!newQuote"
                    class="button is-link has-background-link"
                >
                    Save New Quote
                </button>
        </template>
    </AddEditQuote>

    <!-- this should be the bulma table -->
    <Quote
        v-for="quote in storeQuotes.quotes"
        :key="quote.id"
        :quote="quote"
    />

</template>

<script setup>
    import { normalizeStyle, ref, reactive } from 'vue'
    import Quote from '@/components/Quotes/Quote.vue'
    import AddEditQuote from '@/components/Quotes/AddEditQuote.vue'
    import { useStoreQuotes } from '@/stores/StoreQuotes'

    const newQuote = reactive({
        firstField: '',
        secondField: ''
    })
    const addEditQuoteRef = ref(null)
    const storeQuotes = useStoreQuotes()

    const addQuote = () => {
        console.log('new quote to store', newQuote)
        storeQuotes.addQuote(newQuote)
        newQuote.value = {}
        addEditQuoteRef.value.focusTextArea()
    }





</script>