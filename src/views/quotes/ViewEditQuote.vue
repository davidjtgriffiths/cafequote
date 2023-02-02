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
    <select
        v-model="buildQuote.machine.description"
        name="machine"
        id="machine"
        @change="dropDownChanged($event)"
    >
        <option
            v-for="item in storeItemOptions.getItemOptionsByItem('machine')"
            :value="item"
        >
            {{ item }}
        </option>
    </select>
</div>

<div>

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
    <select
        v-model="buildQuote.waterOption.description"
        name="waterOption"
        id="waterOption"
        @change="dropDownChanged($event)"
    >
        <option
            v-for="item in storeItemOptions.getItemOptionsByItem('waterOption')"
            :value="item"
        >
            {{ item }}
        </option>
    </select>
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
    <select
        v-model="buildQuote.warranty.description"
        name="warranty"
        id="warranty"
        @change="dropDownChanged($event)"
    >
        <option
            v-for="item in storeItemOptions.getItemOptionsByItem('warranty')"
            :value="item"
        >
            {{ item }}
        </option>
    </select>
</div>

<div class="text-green-800 font-semibold">

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
        v-model="buildQuote.cardMachine.description"
        name="cardMachine"
        id="cardMachine"
        @change="dropDownChanged($event)"
    >
        <option
            v-for="item in storeItemOptions.getItemOptionsByItem('cardMachine')"
            :value="item"
        >
            {{ item }}
        </option>
    </select>
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
        v-model="buildQuote.marketing.description"
        name="marketing"
        id="marketing"
        @change="dropDownChanged($event)"
    >
        <option
            v-for="item in storeItemOptions.getItemOptionsByItem('marketing')"
            :value="item"
        >
            {{ item }}
        </option>
    </select>
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
        v-model="buildQuote.merchandising.description"
        name="merchandising"
        id="merchandising"
        @change="dropDownChanged($event)"
    >
        <option
            v-for="item in storeItemOptions.getItemOptionsByItem('merchandising')"
            :value="item"
        >
            {{ item }}
        </option>
    </select>
  </div>

<div class="text-green-800 font-semibold">

</div>

<div class="rrp">
    <input readonly v-model="buildQuote.merchandising.rrp"/>
</div>

<div class="wsp">
    <input readonly initial="0" v-model="buildQuote.merchandising.wsp" />
</div>

<div class="net">
    <input readonly v-model="buildQuote.merchandising.net"/>
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <select
        v-model="buildQuote.drinkPack.description"
        name="drinkPack"
        id="drinkPack"
        @change="dropDownChanged($event)"
    >
        <option
            v-for="item in storeItemOptions.getItemOptionsByItem('drinkPack')"
            :value="item"
        >
            {{ item }}
        </option>
    </select>
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
    NET
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
    NET
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
    Finance
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
        v-model="buildQuote.finance.description"
        name="finance"
        id="finance"
        @change="dropDownChanged($event)"
    >
        <option
            v-for="item in storeItemOptions.getItemOptionsByItem('finance')"
            :value="item"
        >
            {{ item }}
        </option>
    </select>
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
    NET
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

<div class="font-bold two-col-col">
    <div>Daily7</div>
    <div>Cups</div>
</div>

<div class="font-bold two-col-col">
    <div>Daily5</div>
    <div>Cups</div>
</div>
<!-- End Row -->


<!-- Start Row -->
<div class="font-bold">
    Tier 1
</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.financeBreakdownT1.monthly" />
</div>
<div class="font-bold two-col-col">
    <div>
    <input readonly v-model="buildQuote.financeBreakdownT1.weekly" />
    </div>
    <div>
    <input readonly v-model="buildQuote.financeBreakdownT1.weeklyCups" />
    </div>
</div>

<div class="font-bold two-col-col">
    <div>
        <input readonly v-model="buildQuote.financeBreakdownT1.daily7" />
    </div>
    <div>
        <input readonly v-model="buildQuote.financeBreakdownT1.daily7Cups" />
    </div>
</div>

<div class="font-bold two-col-col">
    <div>
        <input readonly v-model="buildQuote.financeBreakdownT1.daily5" />
    </div>
    <div>
        <input readonly v-model="buildQuote.financeBreakdownT1.daily5Cups" />
    </div>
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="font-bold">
    Tier 2
</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.financeBreakdownT2.monthly" />
</div>
<div class="font-bold two-col-col">
    <div>
    <input readonly v-model="buildQuote.financeBreakdownT2.weekly" />
    </div>
    <div>
    <input readonly v-model="buildQuote.financeBreakdownT2.weeklyCups" />
    </div>
</div>

<div class="font-bold two-col-col">
    <div>
        <input readonly v-model="buildQuote.financeBreakdownT2.daily7" />
    </div>
    <div>
        <input readonly v-model="buildQuote.financeBreakdownT2.daily7Cups" />
    </div>
</div>

<div class="font-bold two-col-col">
    <div>
        <input readonly v-model="buildQuote.financeBreakdownT2.daily5" />
    </div>
    <div>
        <input readonly v-model="buildQuote.financeBreakdownT2.daily5Cups" />
    </div>
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="font-bold">
    Tier 3
</div>

<div class="font-bold">
    <input readonly v-model="buildQuote.financeBreakdownT3.monthly" />
</div>
<div class="font-bold two-col-col">
    <div>
    <input readonly v-model="buildQuote.financeBreakdownT3.weekly" />
    </div>
    <div>
    <input readonly v-model="buildQuote.financeBreakdownT3.weeklyCups" />
    </div>
</div>

<div class="font-bold two-col-col">
    <div>
        <input readonly v-model="buildQuote.financeBreakdownT3.daily7" />
    </div>
    <div>
        <input readonly v-model="buildQuote.financeBreakdownT3.daily7Cups" />
    </div>
</div>

<div class="font-bold two-col-col">
    <div>
        <input readonly v-model="buildQuote.financeBreakdownT3.daily5" />
    </div>
    <div>
        <input readonly v-model="buildQuote.financeBreakdownT3.daily5Cups" />
    </div>
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
    import { useStoreItemOptions } from '@/stores/StoreItemOptions'





import { defineComponent } from 'vue';

    let quote = ref({})
    const storeQuotes = useStoreQuotes()
    const storeCatalogue = useStoreCatalogue()
    const storeItemOptions = useStoreItemOptions()
    const storeSysVars = useStoreSysVars()
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
      "description": "0",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "marketing": {
      "description": "0",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "merchandising": {
      "description": "0",
      "variant": "",
      "rrp": 0,
      "wsp": 0,
      "net": 0
    },
    "drinkPack": {
      "description": "0",
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
    "financeBreakdownT1": {
      "model": "",
      "monthly": "",
      "weekly": 0,
      "daily7": 0,
      "daily5": 0
    },
    "financeBreakdownT2": {
      "model": "",
      "monthly": "",
      "weekly": 0,
      "daily7": 0,
      "daily5": 0
    },
    "financeBreakdownT3": {
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

function dropDownChanged($event) {
    console.log('event', $event)
    console.log('event', $event.srcElement.id)// need the parent / child id
    console.log('event', $event.target.value) // option selected
    buildQuote[$event.srcElement.id].rrp = storeItemOptions.getItemFieldByItemAndOption('rrp', $event.srcElement.id, $event.target.value)
    buildQuote[$event.srcElement.id].wsp = storeItemOptions.getItemFieldByItemAndOption('wsp', $event.srcElement.id, $event.target.value)
}

// USE THIS INSTEAD storeCatalogue.getCatalogueOptions(option)
// buildQuote.cardMachine.rrp = storeCatalogue.getCatalogueOptions('cardMachine')
console.log('card options',storeCatalogue.getCatalogueOptions('cardMachine'))
// buildQuote.cardMachine.rrp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.cardMachine.description == catalogue[option].id) {
//             return catalogue[option].field.rrp
//         }
//     }
// })

// buildQuote.cardMachine.wsp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.cardMachine.description == catalogue[option].id) {
//             return catalogue[option].field.wsp
//         }
//     }
// })

// buildQuote.marketing.rrp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.marketing.description == catalogue[option].id) {
//             return catalogue[option].field.rrp
//         }
//     }
// })

// buildQuote.marketing.wsp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.marketing.description == catalogue[option].id) {
//             return catalogue[option].field.wsp
//         }
//     }
// })

// buildQuote.merchandising.rrp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.merchandising.description == catalogue[option].id) {
//             return catalogue[option].field.rrp
//         }
//     }
// })

// buildQuote.merchandising.wsp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.merchandising.description == catalogue[option].id) {
//             return catalogue[option].field.wsp
//         }
//     }
// })

// buildQuote.drinkPack.rrp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.drinkPack.description == catalogue[option].id) {
//             return catalogue[option].field.rrp
//         }
//     }
// })

// buildQuote.drinkPack.wsp = computed(() => {
//     for (let option in catalogue) {
//         if (buildQuote.drinkPack.description == catalogue[option].id) {
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
// TODO: Repeat for T2 & 3 once ive calculated total cost of finance from here .....
// buildQuote.financeBreakdownT1.monthly = computed(() => { //TODO: This is bollocks!
//     return parseInt(buildQuote.finalPrice.rrp) * parseInt(storeItemOptions.getItemFieldByItemAndOption('wsp', 'finance', buildQuote.finance.wsp)) / 12 / parseInt(buildQuote.finance.term)
// })
buildQuote.financeBreakdownT1.weekly = computed(() => {
    return parseInt(buildQuote.finalPrice.rrp) / 52 / parseInt(buildQuote.finance.term)
})
buildQuote.financeBreakdownT1.weeklyCups = computed(() => {
    return parseInt(buildQuote.financeBreakdownT1.weekly) / parseInt(storeSysVars.getSysVarByName('rrpPerCup').val)
})
buildQuote.financeBreakdownT1.daily7 = computed(() => {
    return parseInt(buildQuote.finalPrice.rrp) / 52 / 7 / parseInt(buildQuote.finance.term)
})
buildQuote.financeBreakdownT1.daily7Cups = computed(() => {
    return parseInt(buildQuote.financeBreakdownT1.daily7) / parseInt(storeSysVars.getSysVarByName('rrpPerCup').val)
})
buildQuote.financeBreakdownT1.daily5 = computed(() => {
    return parseInt(buildQuote.finalPrice.rrp) / 52 / 5 / parseInt(buildQuote.finance.term)
})
buildQuote.financeBreakdownT1.daily5Cups = computed(() => {
    return parseInt(buildQuote.financeBreakdownT1.daily5) / parseInt(storeSysVars.getSysVarByName('rrpPerCup').val)
})
// TODO: ....to here
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
        parseInt(buildQuote.financeFee.rrp)


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
        parseInt(buildQuote.financeFee.wsp)
    return t
})

// TODO: delete this
buildQuote.finance.term = 3

const actual = ref(null)





</script>