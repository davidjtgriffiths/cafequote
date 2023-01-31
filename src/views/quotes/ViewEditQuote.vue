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
            :value= catalogueItem.description

        >
        {{ catalogueItem.name }}
        </option>
        </select>




    </div>
    <br><br>

    <div v-if="buildQuote" class="quote-container ">

<!-- Start Row -->
<div class="font-bold">
    Machine
</div>

<div>

</div>

<div class="font-bold">
    RRP
</div>

<div class="font-bold">
    WSP
</div>

<div class="font-bold">
    NET
</div>
<!-- End Row -->


<!-- Start Row -->
<div>
    <select v-model="buildQuote" label="Model" :options="options" />
</div>

<div>
    <select v-model="buildQuote.machine.model.variant" label="Variant" :options="options" />
</div>

<div class="rrp">
    <input readonly v-model="buildQuote.machine.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="buildQuote.machine.wsp" />
</div>

<div class="net">
    <input readonly v-model="buildQuote.machine.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div>
    <select v-model="buildQuote.waterOption.description" label="Water Option" :options="options" />
</div>

<div>

</div>

<div>
    <input readonly v-model="buildQuote.waterOption.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="buildQuote.waterOption.wsp" />
</div>

<div class="net">
    <input readonly v-model="buildQuote.waterOption.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="font-bold">
    Warranty
</div>

<div>

</div>

<div>

</div>

<div class="wsp">

</div>

<div class="net">

</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <select v-model="buildQuote.warranty.term" label="Term" :options="options" />
</div>

<div class="text-green-800 font-semibold">
    <select v-model="buildQuote.warranty.term.cover" label="Cover" :options="options" />
</div>

<div>
    <input readonly v-model="buildQuote.warranty.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="buildQuote.warranty.wsp" />
</div>

<div class="net">
    <input readonly v-model="buildQuote.warranty.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="font-bold">
    Options
</div>

<div>

</div>

<div>

</div>

<div class="wsp">

</div>

<div class="net">

</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <select
        v-model="buildQuote.cardMachine.package"
        label="Card Machine"
        :options="catalogue"
        :text-by="(catalogue)=>catalogue.field.description"
        :value-by="(catalogue)=>catalogue.id"
    />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="buildQuote.cardMachine.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="buildQuote.cardMachine.wsp" />
</div>

<div class="net">
    <input readonly v-model="buildQuote.cardMachine.net" />
</div>
<!-- End Row -->


<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <select
        v-model="buildQuote.marketing.package"
        label="Marketing Pack"
        :options="options"
        :text-by="(catalogue)=>catalogue.field.description"
        :value-by="(catalogue)=>catalogue.id"
    />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="buildQuote.marketing.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="buildQuote.marketing.wsp" />
</div>

<div class="net">
    <input readonly v-model="buildQuote.marketing.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">

    <!-- TODO: jiojodd -->
    <select
        v-model="buildQuote.merchandising.package"
        label="Merchandising"
        :options="catalogue"
        :text-by="(catalogue)=>catalogue.field.description"
        :value-by="(catalogue)=>catalogue.id"
    />
  </div>

<div class="text-green-800 font-semibold">

</div>

<div class="rrp">
    <input readonly v-model="buildQuote.merchandising.rrp" />
</div>

<div class="wsp">
    <input readonly initial="0" v-model="buildQuote.merchandising.wsp" />
</div>

<div class="net">
    <input readonly v-model="buildQuote.merchandising.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <select
        v-model="buildQuote.drinkPack.package"
        label="Drink Pack"
        :options="options"
        :text-by="(catalogue)=>catalogue.field.description"
        :value-by="(catalogue)=>catalogue.id"
    />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="buildQuote.drinkPack.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="buildQuote.drinkPack.wsp" />
</div>

<div class="net">
    <input readonly v-model="buildQuote.drinkPack.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="font-bold">
    Subtotal
</div>

<div>

</div>

<div class="font-bold">
    RRP
</div>

<div class="font-bold">
    WSP
</div>

<div class="font-bold">
    net
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="font-bold">

</div>

<div>

</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.subTotal.rrp" />
</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.subTotal.wsp" />
</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.subTotal.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="font-bold">
    Adjustments
</div>

<div class="text-green-800 font-semibold">

</div>

<div>

</div>

<div class="wsp">

</div>

<div class="net">

</div>
<!-- End Row -->




<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <input v-model="buildQuote.additions.rrp" label="Additions" />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="buildQuote.additions.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="buildQuote.additions.wsp" />
</div>

<div class="net">
    <input readonly v-model="buildQuote.additions.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <input v-model="buildQuote.discount.percentage" label="Discount %" />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="buildQuote.discount.rrp" />
</div>

<div class="wsp">

</div>

<div class="net">
    <input readonly v-model="buildQuote.discount.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="font-bold">
    Total
</div>

<div>

</div>

<div class="font-bold">
    RRP
</div>

<div class="font-bold">
    WSP
</div>

<div class="font-bold">
    net
</div>
<!-- End Row -->


<!-- Start Row -->
<div class="font-bold">

</div>

<div>

</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.total.rrp" />
</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.total.wsp" />
</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.total.net" />
</div>
<!-- End Row -->


<!-- Start Row -->
<div class="font-bold">
    Finance (est.)
</div>

<div>

</div>

<div>

</div>

<div class="wsp">

</div>

<div class="net">

</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <select v-model="buildQuote.finance.term" label="Term" :options="options" />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="buildQuote.finance.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="buildQuote.finance.wsp" />
</div>

<div class="net">
    <input readonly v-model="buildQuote.finance.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <input readonly v-model="buildQuote.financeFee.fee" label="Acceptance Fee???" />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="buildQuote.financeFee.fee" />
</div>

<div class="wsp">
    <input readonly v-model="buildQuote.financeFee.wsp" />
</div>

<div class="net">
    <input readonly v-model="buildQuote.financeFee.net" />
</div>
<!-- End Row -->



<!-- Start Row -->
<div class="font-bold">
    Final Price
</div>

<div>

</div>

<div class="font-bold">
    RRP
</div>

<div class="font-bold">
    WSP
</div>

<div class="font-bold">
    net
</div>
<!-- End Row -->


<!-- Start Row -->
<div class="font-bold">

</div>

<div>

</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.finalPrice.rrp" />
</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.finalPrice.wsp" />
</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.finalPrice.net" />
</div>
<!-- End Row -->


<!-- Put this in footer -->
<!-- Start Row -->
<div class="font-bold">
    Finance Breakdown
</div>

<div class="font-bold">
    Monthly
</div>

<div class="font-bold two-col-col">
    <div>Weekly</div>
    <div>Cups</div>
</div>
<div class="font-bold">
    Daily 7
</div>
<div class="font-bold">
    Daily 5
</div>
<!-- End Row -->


<!-- Start Row -->
<div class="font-bold">
    Tier 1
</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.financeBreakdown.monthly" />
</div>
<div class="font-bold two-col-col">
    <div>
    <input class="border border-solid border-gray-300 block mb-2 text-sm font-medium text-gray-900" readonly v-model="buildQuote.financeBreakdown.weekly" />
    </div>
    <div>
    <input readonly v-model="buildQuote.financeBreakdown.weekly" />
    </div>
</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.financeBreakdown.daily7" />
</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.financeBreakdown.daily5" />
</div>
<!-- End Row -->

<!-- Put this in footer -->
<!-- Start Row -->
<div class="font-bold">
    Commission
</div>

<div>

</div>

<div class="font-bold">
    Provided Lead
</div>
<div class="font-bold">
    Self Generated
</div>
<div class="font-bold">
    % of Deal
</div>
<!-- End Row -->



<!-- Start Row -->
<div class="font-bold">
    <input readonly v-model="buildQuote.commission.leadSource" />
</div>

<div class="font-bold">

</div>
<div class="font-bold">
    <input readonly v-model="buildQuote.commission.providedLead" />
</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.commission.selfGenerated" />
</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.commission.percentageOfDeal" />
</div>
<!-- End Row -->










</div>


</template>

<script setup>

    import { useRoute, useRouter } from 'vue-router'
    import AddEditQuote from '@/components/Quotes/AddEditQuote.vue'
    import { useStoreQuotes } from '@/stores/StoreQuotes'
    import { useStoreCatalogue } from '@/stores/StoreCatalogue'
    import { normalizeStyle, ref, reactive, computed, watch, onMounted } from 'vue'

    import Quote from '@/components/Quotes/Quote.vue'
 

    import { useStoreLeads } from '@/stores/StoreLeads'
    import { useStoreSysVars } from '@/stores/StoreSysVars'




import { defineComponent } from 'vue';

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











// TODO: HERE IS NEXT 
// const catalogue = reactive(catalogueStore.catalogue)
// using storeCatalogue.getCatalogueOptions(option)

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

// USE THIS INSTEAD storeCatalogue.getCatalogueOptions(option)
buildQuote.cardMachine.rrp = storeCatalogue.getCatalogueOptions('cardMachine')
console.log('card options',storeCatalogue.getCatalogueOptions('cardMachine'))
// buildQuote.cardMachine.rrp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.cardMachine.package == catalogue[option].id) {
//             return catalogue[option].field.rrp
//         }
//     }
// })

// buildQuote.cardMachine.wsp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.cardMachine.package == catalogue[option].id) {
//             return catalogue[option].field.wsp
//         }
//     }
// })

// buildQuote.marketing.rrp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.marketing.package == catalogue[option].id) {
//             return catalogue[option].field.rrp
//         }
//     }
// })

// buildQuote.marketing.wsp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.marketing.package == catalogue[option].id) {
//             return catalogue[option].field.wsp
//         }
//     }
// })

// buildQuote.merchandising.rrp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.merchandising.package == catalogue[option].id) {
//             return catalogue[option].field.rrp
//         }
//     }
// })

// buildQuote.merchandising.wsp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.merchandising.package == catalogue[option].id) {
//             return catalogue[option].field.wsp
//         }
//     }
// })

// buildQuote.drinkPack.rrp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.drinkPack.package == catalogue[option].id) {
//             return catalogue[option].field.rrp
//         }
//     }
// })

// buildQuote.drinkPack.wsp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.drinkPack.package == catalogue[option].id) {
//             return catalogue[option].field.wsp
//         }
//     }
// })

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