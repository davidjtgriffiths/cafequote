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


            <div class="field">
            <div class="control">
                <textarea
                    v-model="varName"
                    class="textarea mt-4"
                    placeholder="First Name"
                    ref="textareaRef"
                >
                </textarea>
            </div>
            <div class="control">
                <textarea
                    v-model="varVal"
                    class="textarea mt-4"
                    placeholder="val"
                    ref="lastNameRef"
                >
                </textarea>
            </div>
            <button
            @click="howMuch()">
                how much?
            </button>
        </div>
</template>

<script setup>
    import { normalizeStyle, ref, reactive } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Quote from '@/components/Quotes/Quote.vue'
    import AddEditQuote from '@/components/Quotes/AddEditQuote.vue'
    import { useStoreQuotes } from '@/stores/StoreQuotes'
    import { useStoreLeads } from '@/stores/StoreLeads'
    import { useStoreSysVars } from '@/stores/StoreSysVars'

    const route = useRoute()
    const router = useRouter()


    const storeQuotes = useStoreQuotes()
    const storeLeads = useStoreLeads()
    const storeSysVars = useStoreSysVars()

    const quote = storeQuotes.getQuote(route.params.id)
    const lead = storeLeads.getLead(quote.leadId)

    let varVal = ref(null)
    let varName = ref(null)


    const makePdf = () => {
        console.log('make a fucking pdf init?')

    }

    const howMuch = () => {
        console.log('how much?')
        varVal.value = storeSysVars.getSysVarByName(varName.value).val
        console.log(varVal.value)

    }




</script>