<template>
<h1>preview of contract </h1>
<h2>buildQuote</h2>
<p>{{ buildQuote }}</p>
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



const catalogueStore = useStore(Catalogue)








const catalogue = reactive(catalogueStore.catalogue)
const options = ['a','b']
const value = ref()
const brand = ref()
const model = ref()
const plumbing = ref()

let buildQuote = reactive (
    {
    "machine": {
      "model": "xx",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "waterOption": {
      "description": "",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "warranty": {
      "term": "",
      "cover": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "cardMachine": {
      "package": "0",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "marketing": {
      "package": "0",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "merchandising": {
      "package": "0",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "drinkPack": {
      "package": "0",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "subTotal": {
      "model": "",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "discount": {
      "percentage": 0,
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "additions": {
      "model": "",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "total": {
      "model": "",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "finance": {
      "model": "",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "financeFee": {
      "fee": "",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "finalPrice": {
      "model": "",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
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

buildQuote.cardMachine.rrp = computed(() => {
    for (let option in catalogue) {
        if (buildQuote.cardMachine.package == catalogue[option].id) {
            return catalogue[option].field.rrp
        }
    }
})

buildQuote.cardMachine.wsp = computed(() => {
    for (let option in catalogue) {
        if (buildQuote.cardMachine.package == catalogue[option].id) {
            return catalogue[option].field.wsp
        }
    }
})

buildQuote.marketing.rrp = computed(() => {
    for (let option in catalogue) {
        if (buildQuote.marketing.package == catalogue[option].id) {
            return catalogue[option].field.rrp
        }
    }
})

buildQuote.marketing.wsp = computed(() => {
    for (let option in catalogue) {
        if (buildQuote.marketing.package == catalogue[option].id) {
            return catalogue[option].field.wsp
        }
    }
})

buildQuote.merchandising.rrp = computed(() => {
    for (let option in catalogue) {
        if (buildQuote.merchandising.package == catalogue[option].id) {
            return catalogue[option].field.rrp
        }
    }
})

buildQuote.merchandising.wsp = computed(() => {
    for (let option in catalogue) {
        if (buildQuote.merchandising.package == catalogue[option].id) {
            return catalogue[option].field.wsp
        }
    }
})

buildQuote.drinkPack.rrp = computed(() => {
    for (let option in catalogue) {
        if (buildQuote.drinkPack.package == catalogue[option].id) {
            return catalogue[option].field.rrp
        }
    }
})

buildQuote.drinkPack.wsp = computed(() => {
    for (let option in catalogue) {
        if (buildQuote.drinkPack.package == catalogue[option].id) {
            return catalogue[option].field.wsp
        }
    }
})

buildQuote.machine.net = computed(() => {
    return parseInt(buildQuote.machine.rrp) - parseInt(buildQuote.machine.wsp)
})
buildQuote.waterOption.net = computed(() => {
    return parseInt(buildQuote.waterOption.rrp) - parseInt(buildQuote.waterOption.wsp)
})
buildQuote.warranty.net = computed(() => {
    return parseInt(buildQuote.warranty.rrp) - parseInt(buildQuote.warranty.wsp)
})
buildQuote.cardMachine.net = computed(() => {
    return parseInt(buildQuote.cardMachine.rrp) - parseInt(buildQuote.cardMachine.wsp)
})
buildQuote.marketing.net = computed(() => {
    return parseInt(buildQuote.marketing.rrp) - parseInt(buildQuote.marketing.wsp)
})
buildQuote.merchandising.net = computed(() => {
    return parseInt(buildQuote.merchandising.rrp) - parseInt(buildQuote.merchandising.wsp)
})
buildQuote.drinkPack.net = computed(() => {
    return parseInt(buildQuote.drinkPack.rrp) - parseInt(buildQuote.drinkPack.wsp)
})
buildQuote.subTotal.net = computed(() => {
    return parseInt(buildQuote.subTotal.rrp) - parseInt(buildQuote.subTotal.wsp)
})
buildQuote.discount.rrp = computed(() => {
    return parseInt( - buildQuote.subTotal.rrp) * parseInt(buildQuote.discount.percentage) / 100
})
buildQuote.discount.net = computed(() => {
    return parseInt(buildQuote.discount.rrp)
})
buildQuote.additions.net = computed(() => {
    return parseInt(buildQuote.additions.rrp) - parseInt(buildQuote.additions.wsp)
})
buildQuote.total.net = computed(() => {
    return parseInt(buildQuote.total.rrp) - parseInt(buildQuote.total.wsp)
})
buildQuote.finance.net = computed(() => {
    return parseInt(buildQuote.finance.rrp) - parseInt(buildQuote.finance.wsp)
})
buildQuote.financeFee.net = computed(() => {
    return parseInt(buildQuote.financeFee.rrp) - parseInt(buildQuote.financeFee.wsp)
})
buildQuote.finalPrice.net = computed(() => {
    return parseInt(buildQuote.finalPrice.rrp) - parseInt(buildQuote.finalPrice.wsp)
})
buildQuote.financeBreakdown.monthly = computed(() => {
    return parseInt(buildQuote.finalPrice.rrp) / 12 / parseInt(buildQuote.finance.term)
})
buildQuote.financeBreakdown.weekly = computed(() => {
    return parseInt(buildQuote.finalPrice.rrp) / 52 / parseInt(buildQuote.finance.term)
})
buildQuote.financeBreakdown.daily7 = computed(() => {
    return parseInt(buildQuote.finalPrice.rrp) / 52 / 7 / parseInt(buildQuote.finance.term)
})
buildQuote.financeBreakdown.daily5 = computed(() => {
    return parseInt(buildQuote.finalPrice.rrp) / 52 / 5 / parseInt(buildQuote.finance.term)
})
buildQuote.commission.providedLead = computed(() => {
    return parseInt(buildQuote.finalPrice.rrp) / 100 * 50
})
buildQuote.commission.selfGenerated = computed(() => {
    return parseInt(buildQuote.finalPrice.rrp) / 100 * 75
})
// TODO: Put actual lead source in here
buildQuote.commission.percentageOfDeal = computed(() => {
    return (
        parseInt(buildQuote.finalPrice.rrp) ?
        parseInt(buildQuote.commission.selfGenerated) / parseInt(buildQuote.finalPrice.rrp) * 100 :
        0
    )
})

buildQuote.subTotal.rrp = computed(() => {
    const t =
        parseInt(buildQuote.machine.rrp) +
        parseInt(buildQuote.waterOption.rrp) +
        parseInt(buildQuote.warranty.rrp) +
        parseInt(buildQuote.cardMachine.rrp) +
        parseInt(buildQuote.marketing.rrp) +
        parseInt(buildQuote.merchandising.rrp) +
        parseInt(buildQuote.drinkPack.rrp)
    return t
})
buildQuote.subTotal.wsp = computed(() => {
    const t =
        parseInt(buildQuote.machine.wsp) +
        parseInt(buildQuote.waterOption.wsp) +
        parseInt(buildQuote.warranty.wsp) +
        parseInt(buildQuote.cardMachine.wsp) +
        parseInt(buildQuote.marketing.wsp) +
        parseInt(buildQuote.merchandising.wsp) +
        parseInt(buildQuote.drinkPack.wsp)
    return t
})

buildQuote.total.rrp = computed(() => {
    const t =
        parseInt(buildQuote.machine.rrp) +
        parseInt(buildQuote.waterOption.rrp) +
        parseInt(buildQuote.warranty.rrp) +
        parseInt(buildQuote.cardMachine.rrp) +
        parseInt(buildQuote.marketing.rrp) +
        parseInt(buildQuote.merchandising.rrp) +
        parseInt(buildQuote.drinkPack.rrp) +
        parseInt(buildQuote.discount.rrp) +
        parseInt(buildQuote.additions.rrp)

    return t
})
buildQuote.total.wsp = computed(() => {
    const t =
    parseInt(buildQuote.machine.wsp) +
        parseInt(buildQuote.waterOption.wsp) +
        parseInt(buildQuote.warranty.wsp) +
        parseInt(buildQuote.cardMachine.wsp) +
        parseInt(buildQuote.marketing.wsp) +
        parseInt(buildQuote.merchandising.wsp) +
        parseInt(buildQuote.drinkPack.wsp) +
        parseInt(buildQuote.discount.wsp) +
        parseInt(buildQuote.additions.wsp)
    return t
})

buildQuote.finalPrice.rrp = computed(() => {
    const t =
        parseInt(buildQuote.machine.rrp) +
        parseInt(buildQuote.waterOption.rrp) +
        parseInt(buildQuote.warranty.rrp) +
        parseInt(buildQuote.cardMachine.rrp) +
        parseInt(buildQuote.marketing.rrp) +
        parseInt(buildQuote.merchandising.rrp) +
        parseInt(buildQuote.drinkPack.rrp) +
        parseInt(buildQuote.discount.rrp) +
        parseInt(buildQuote.additions.rrp) +
        parseInt(buildQuote.financeFee.rrp) +
        parseInt(buildQuote.finance.rrp)


    return t
})
buildQuote.finalPrice.wsp = computed(() => {
    const t =
    parseInt(buildQuote.machine.wsp) +
        parseInt(buildQuote.waterOption.wsp) +
        parseInt(buildQuote.warranty.wsp) +
        parseInt(buildQuote.cardMachine.wsp) +
        parseInt(buildQuote.marketing.wsp) +
        parseInt(buildQuote.merchandising.wsp) +
        parseInt(buildQuote.drinkPack.wsp) +
        parseInt(buildQuote.discount.wsp) +
        parseInt(buildQuote.additions.wsp) +
        parseInt(buildQuote.financeFee.wsp) +
        parseInt(buildQuote.finance.wsp)
    return t
})

// TODO: delete this
buildQuote.finance.term = 3

const actual = ref(null)





</script>