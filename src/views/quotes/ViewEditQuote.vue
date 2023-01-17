<template>
    <AddEditQuote
        v-model:first-field="quote.firstField"
        v-model:second-field="quote.secondField"
        label="Editing Quote"
        ref="addEditQuoteRef"
    >
        <template #buttons>
            <button
                @click="$router.back()"
                class="button is-link has-background-danger mr-2"
            >
                Cancel
            </button>
            <button
                @click="handleSavedClicked"
                class="button is-link has-background-link"
            >
                Save Changes
            </button>
        </template>
    </AddEditQuote>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import AddEditQuote from '@/components/Quotes/AddEditQuote.vue'
    import { useStoreQuotes } from '@/stores/StoreQuotes'

    let quote = ref({})
    const storeQuotes = useStoreQuotes()
    const route = useRoute()
    const router = useRouter()

    quote = storeQuotes.getQuote(route.params.id)

    const handleSavedClicked = () => {
        storeQuotes.updateQuote(route.params.id, quote)
        router.back()
    }

</script>