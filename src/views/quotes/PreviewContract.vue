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
    import { normalizeStyle, ref, reactive, computed, watch, onMounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Quote from '@/components/Quotes/Quote.vue'
    import AddEditQuote from '@/components/Quotes/AddEditQuote.vue'
    import { useStoreQuotes } from '@/stores/StoreQuotes'
    import { useStoreLeads } from '@/stores/StoreLeads'
    import { useStoreSysVars } from '@/stores/StoreSysVars'
    import { useStoreCatalogue } from '@/stores/StoreCatalogue'



import { defineComponent } from 'vue';

    const route = useRoute()
    const router = useRouter()


    const storeQuotes = useStoreQuotes()
    const storeLeads = useStoreLeads()
    const storeSysVars = useStoreSysVars()

    const oldquote = storeQuotes.getQuote(route.params.id)
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



const catalogueStore = useStore(Catalogue)








const catalogue = reactive(catalogueStore.catalogue)
const options = ['a','b']
const value = ref()
const brand = ref()
const model = ref()
const plumbing = ref()

let quote = reactive (
    {
    "machine": {
      "model": "xx",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "waterOption": {
      "description": "",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "warranty": {
      "term": "",
      "cover": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "cardMachine": {
      "package": "0",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "marketing": {
      "package": "0",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "merchandising": {
      "package": "0",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "drinkPack": {
      "package": "0",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "subTotal": {
      "model": "",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "discount": {
      "percentage": 0,
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "additions": {
      "model": "",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "total": {
      "model": "",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "finance": {
      "model": "",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "financeFee": {
      "fee": "",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "finalPrice": {
      "model": "",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "financeBreakdown": {
      "model": "",
      "monthly": "",
      "weekly": 0,
      "daily7": 0,
      "daily5": 0
    },
    "commission": {
      "leadSource": "",
      "providedLead": 0,
      "selfGenerated": 0,
      "percentageOfDeal": 0,
      "status": "closed",
      "success": "won"
    }
  }
)

quote.cardMachine.rrPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.cardMachine.package == catalogue[option].id) {
            return catalogue[option].field.rrPrice
        }
    }
})

quote.cardMachine.wsPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.cardMachine.package == catalogue[option].id) {
            return catalogue[option].field.wsPrice
        }
    }
})

quote.marketing.rrPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.marketing.package == catalogue[option].id) {
            return catalogue[option].field.rrPrice
        }
    }
})

quote.marketing.wsPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.marketing.package == catalogue[option].id) {
            return catalogue[option].field.wsPrice
        }
    }
})

quote.merchandising.rrPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.merchandising.package == catalogue[option].id) {
            return catalogue[option].field.rrPrice
        }
    }
})

quote.merchandising.wsPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.merchandising.package == catalogue[option].id) {
            return catalogue[option].field.wsPrice
        }
    }
})

quote.drinkPack.rrPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.drinkPack.package == catalogue[option].id) {
            return catalogue[option].field.rrPrice
        }
    }
})

quote.drinkPack.wsPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.drinkPack.package == catalogue[option].id) {
            return catalogue[option].field.wsPrice
        }
    }
})

quote.machine.profit = computed(() => {
    return parseInt(quote.machine.rrPrice) - parseInt(quote.machine.wsPrice)
})
quote.waterOption.profit = computed(() => {
    return parseInt(quote.waterOption.rrPrice) - parseInt(quote.waterOption.wsPrice)
})
quote.warranty.profit = computed(() => {
    return parseInt(quote.warranty.rrPrice) - parseInt(quote.warranty.wsPrice)
})
quote.cardMachine.profit = computed(() => {
    return parseInt(quote.cardMachine.rrPrice) - parseInt(quote.cardMachine.wsPrice)
})
quote.marketing.profit = computed(() => {
    return parseInt(quote.marketing.rrPrice) - parseInt(quote.marketing.wsPrice)
})
quote.merchandising.profit = computed(() => {
    return parseInt(quote.merchandising.rrPrice) - parseInt(quote.merchandising.wsPrice)
})
quote.drinkPack.profit = computed(() => {
    return parseInt(quote.drinkPack.rrPrice) - parseInt(quote.drinkPack.wsPrice)
})
quote.subTotal.profit = computed(() => {
    return parseInt(quote.subTotal.rrPrice) - parseInt(quote.subTotal.wsPrice)
})
quote.discount.rrPrice = computed(() => {
    return parseInt( - quote.subTotal.rrPrice) * parseInt(quote.discount.percentage) / 100
})
quote.discount.profit = computed(() => {
    return parseInt(quote.discount.rrPrice)
})
quote.additions.profit = computed(() => {
    return parseInt(quote.additions.rrPrice) - parseInt(quote.additions.wsPrice)
})
quote.total.profit = computed(() => {
    return parseInt(quote.total.rrPrice) - parseInt(quote.total.wsPrice)
})
quote.finance.profit = computed(() => {
    return parseInt(quote.finance.rrPrice) - parseInt(quote.finance.wsPrice)
})
quote.financeFee.profit = computed(() => {
    return parseInt(quote.financeFee.rrPrice) - parseInt(quote.financeFee.wsPrice)
})
quote.finalPrice.profit = computed(() => {
    return parseInt(quote.finalPrice.rrPrice) - parseInt(quote.finalPrice.wsPrice)
})
quote.financeBreakdown.monthly = computed(() => {
    return parseInt(quote.finalPrice.rrPrice) / 12 / parseInt(quote.finance.term)
})
quote.financeBreakdown.weekly = computed(() => {
    return parseInt(quote.finalPrice.rrPrice) / 52 / parseInt(quote.finance.term)
})
quote.financeBreakdown.daily7 = computed(() => {
    return parseInt(quote.finalPrice.rrPrice) / 52 / 7 / parseInt(quote.finance.term)
})
quote.financeBreakdown.daily5 = computed(() => {
    return parseInt(quote.finalPrice.rrPrice) / 52 / 5 / parseInt(quote.finance.term)
})
quote.commission.providedLead = computed(() => {
    return parseInt(quote.finalPrice.rrPrice) / 100 * 50
})
quote.commission.selfGenerated = computed(() => {
    return parseInt(quote.finalPrice.rrPrice) / 100 * 75
})
// TODO: Put actual lead source in here
quote.commission.percentageOfDeal = computed(() => {
    return (
        parseInt(quote.finalPrice.rrPrice) ?
        parseInt(quote.commission.selfGenerated) / parseInt(quote.finalPrice.rrPrice) * 100 :
        0
    )
})

quote.subTotal.rrPrice = computed(() => {
    const t =
        parseInt(quote.machine.rrPrice) +
        parseInt(quote.waterOption.rrPrice) +
        parseInt(quote.warranty.rrPrice) +
        parseInt(quote.cardMachine.rrPrice) +
        parseInt(quote.marketing.rrPrice) +
        parseInt(quote.merchandising.rrPrice) +
        parseInt(quote.drinkPack.rrPrice)
    return t
})
quote.subTotal.wsPrice = computed(() => {
    const t =
        parseInt(quote.machine.wsPrice) +
        parseInt(quote.waterOption.wsPrice) +
        parseInt(quote.warranty.wsPrice) +
        parseInt(quote.cardMachine.wsPrice) +
        parseInt(quote.marketing.wsPrice) +
        parseInt(quote.merchandising.wsPrice) +
        parseInt(quote.drinkPack.wsPrice)
    return t
})

quote.total.rrPrice = computed(() => {
    const t =
        parseInt(quote.machine.rrPrice) +
        parseInt(quote.waterOption.rrPrice) +
        parseInt(quote.warranty.rrPrice) +
        parseInt(quote.cardMachine.rrPrice) +
        parseInt(quote.marketing.rrPrice) +
        parseInt(quote.merchandising.rrPrice) +
        parseInt(quote.drinkPack.rrPrice) +
        parseInt(quote.discount.rrPrice) +
        parseInt(quote.additions.rrPrice)

    return t
})
quote.total.wsPrice = computed(() => {
    const t =
    parseInt(quote.machine.wsPrice) +
        parseInt(quote.waterOption.wsPrice) +
        parseInt(quote.warranty.wsPrice) +
        parseInt(quote.cardMachine.wsPrice) +
        parseInt(quote.marketing.wsPrice) +
        parseInt(quote.merchandising.wsPrice) +
        parseInt(quote.drinkPack.wsPrice) +
        parseInt(quote.discount.wsPrice) +
        parseInt(quote.additions.wsPrice)
    return t
})

quote.finalPrice.rrPrice = computed(() => {
    const t =
        parseInt(quote.machine.rrPrice) +
        parseInt(quote.waterOption.rrPrice) +
        parseInt(quote.warranty.rrPrice) +
        parseInt(quote.cardMachine.rrPrice) +
        parseInt(quote.marketing.rrPrice) +
        parseInt(quote.merchandising.rrPrice) +
        parseInt(quote.drinkPack.rrPrice) +
        parseInt(quote.discount.rrPrice) +
        parseInt(quote.additions.rrPrice) +
        parseInt(quote.financeFee.rrPrice) +
        parseInt(quote.finance.rrPrice)


    return t
})
quote.finalPrice.wsPrice = computed(() => {
    const t =
    parseInt(quote.machine.wsPrice) +
        parseInt(quote.waterOption.wsPrice) +
        parseInt(quote.warranty.wsPrice) +
        parseInt(quote.cardMachine.wsPrice) +
        parseInt(quote.marketing.wsPrice) +
        parseInt(quote.merchandising.wsPrice) +
        parseInt(quote.drinkPack.wsPrice) +
        parseInt(quote.discount.wsPrice) +
        parseInt(quote.additions.wsPrice) +
        parseInt(quote.financeFee.wsPrice) +
        parseInt(quote.finance.wsPrice)
    return t
})

// TODO: delete this
quote.finance.term = 3

const actual = ref(null)





</script>