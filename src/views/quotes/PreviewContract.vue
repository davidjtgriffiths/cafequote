<template>
<h1>preview of contract </h1>
<h2>buildQuote</h2>

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

<div id="pdf">
            <h1>Ok heres the fucking quote!</h1>
<p>{{ quote }}</p>
<p>

</p>
    <!-- <div> test the fucking long description{{storeItemOptions.getItemFieldByItemAndOption('longDescription', 'machine', 'VISTA GAIA EASY')}}</div> -->
</div>    
</template>

<script setup>
    import { normalizeStyle, ref, reactive, computed, watch, onMounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Quote from '@/components/Quotes/Quote.vue'
    import AddEditQuote from '@/components/Quotes/AddEditQuote.vue'
    import { useStoreQuotes } from '@/stores/StoreQuotes'
    import { useStoreLeads } from '@/stores/StoreLeads'
    import { useStoreSysVars } from '@/stores/StoreSysVars'
    import { useStoreItemOptions } from '@/stores/StoreItemOptions'



import { defineComponent } from 'vue';
import html2pdf from "html2pdf.js"

    const route = useRoute()
    const router = useRouter()


    const storeQuotes = useStoreQuotes()
    const storeLeads = useStoreLeads()
    const storeSysVars = useStoreSysVars()
    const storeItemOptions = useStoreItemOptions()

    const quote = storeQuotes.getQuote(route.params.id)
    console.log('contract trying to get lead for this quote', route.params.id)
    const lead = storeLeads.getLead(quote.leadId)

    let varVal = ref(null)
    let varName = ref(null)


    const makePdf = () => {
        console.log('make a fucking pdf init?')
        html2pdf(document.getElementById("pdf"), {
				margin: 1,
  			filename: "i-was-html.pdf",
			});
    }

    const howMuch = () => {
        console.log('how much?')
        varVal.value = storeSysVars.getSysVarByName(varName.value).val
        console.log(varVal.value)

    }















</script>