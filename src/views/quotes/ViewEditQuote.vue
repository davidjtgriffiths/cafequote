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

    <div class="card xhas-background-link-dark p-4 mb-5">
        <label style="display: block" for="merchandising">        {{ storeCatalogue.getCatalogueOptions('cardMachine') }}</label>

        <select
            name="merchandising"
            v-model="test"
            @change="selectChanged(test)"

        >
        <option
            v-for="catalogueItem in storeCatalogue.items"
            :value= catalogueItem.price

        >
        {{ catalogueItem.name }}
        </option>
        </select>




    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import AddEditQuote from '@/components/Quotes/AddEditQuote.vue'
    import { useStoreQuotes } from '@/stores/StoreQuotes'
    import { useStoreCatalogue } from '@/stores/StoreCatalogue'

    let quote = ref({})
    const storeQuotes = useStoreQuotes()
    const storeCatalogue = useStoreCatalogue()
    const route = useRoute()
    const router = useRouter()

    let test = ref()
    let options = storeCatalogue.getCatalogue('merchandising')
    console.log('options', options)

    quote = storeQuotes.getQuote(route.params.id)

    const handleSavedClicked = () => {
        storeQuotes.updateQuote(route.params.id, quote)
        router.back()
    }
    const selectChanged = (event) => {
console.log(event)
    }

</script>