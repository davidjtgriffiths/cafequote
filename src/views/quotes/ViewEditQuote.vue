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

<div v-if="quote" class="quote-container ">

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
        v-model="quote.quoteFields.machine.description"
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
    <input readonly v-model="quote.quoteFields.machine.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="quote.quoteFields.machine.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.quoteFields.machine.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div>
    <select
        v-model="quote.quoteFields.waterOption.description"
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
    <input readonly v-model="quote.quoteFields.waterOption.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="quote.quoteFields.waterOption.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.quoteFields.waterOption.net" />
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
        v-model="quote.quoteFields.warranty.description"
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
    <input readonly v-model="quote.quoteFields.warranty.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="quote.quoteFields.warranty.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.quoteFields.warranty.net" />
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
        v-model="quote.quoteFields.cardMachine.description"
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
    <input readonly v-model="quote.quoteFields.cardMachine.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="quote.quoteFields.cardMachine.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.quoteFields.cardMachine.net" />
</div>
<!-- End Row -->


<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <select
        v-model="quote.quoteFields.marketing.description"
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
    <input readonly v-model="quote.quoteFields.marketing.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="quote.quoteFields.marketing.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.quoteFields.marketing.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">

    <!-- TODO: jiojodd -->
    <select
        v-model="quote.quoteFields.merchandising.description"
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
    <input readonly v-model="quote.quoteFields.merchandising.rrp"/>
</div>

<div class="wsp">
    <input readonly initial="0" v-model="quote.quoteFields.merchandising.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.quoteFields.merchandising.net"/>
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <select
        v-model="quote.quoteFields.drinkPack.description"
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
    <input readonly v-model="quote.quoteFields.drinkPack.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="quote.quoteFields.drinkPack.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.quoteFields.drinkPack.net" />
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
    <input readonly v-model="quote.quoteFields.subTotal.rrp" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.quoteFields.subTotal.wsp" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.quoteFields.subTotal.net" />
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
    <input v-model="quote.quoteFields.additions.rrp" label="Additions" />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="quote.quoteFields.additions.rrp" />
</div>

<div class="wsp">

</div>

<div class="net">
    <input readonly v-model="quote.quoteFields.additions.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <input v-model="quote.quoteFields.discount.description" label="Discount %" />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="quote.quoteFields.discount.rrp" />
</div>

<div class="wsp">

</div>

<div class="net">
    <input readonly v-model="quote.quoteFields.discount.net" />
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
    <input readonly v-model="quote.quoteFields.total.rrp" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.quoteFields.total.wsp" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.quoteFields.total.net" />
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
        v-model="quote.quoteFields.finance.description"
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
    <input v-model="quote.quoteFields.financeFee.description" label="Acceptance Fee???" />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="quote.quoteFields.financeFee.description" />
</div>

<div class="wsp">

</div>

<div class="net">
    <input readonly v-model="quote.quoteFields.financeFee.net" />
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
    <input readonly v-model="quote.quoteFields.finalPrice.rrp" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.quoteFields.finalPrice.wsp" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.quoteFields.finalPrice.net" />
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
    <input readonly v-model="quote.quoteFields.financeBreakdownT1.monthly" />
</div>
<div class="font-bold two-col-col">
    <div>
    <input readonly v-model="quote.quoteFields.financeBreakdownT1.weekly" />
    </div>
    <div>
    <input readonly v-model="quote.quoteFields.financeBreakdownT1.weeklyCups" />
    </div>
</div>

<div class="font-bold two-col-col">
    <div>
        <input readonly v-model="quote.quoteFields.financeBreakdownT1.daily7" />
    </div>
    <div>
        <input readonly v-model="quote.quoteFields.financeBreakdownT1.daily7Cups" />
    </div>
</div>

<div class="font-bold two-col-col">
    <div>
        <input readonly v-model="quote.quoteFields.financeBreakdownT1.daily5" />
    </div>
    <div>
        <input readonly v-model="quote.quoteFields.financeBreakdownT1.daily5Cups" />
    </div>
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="font-bold">
    Tier 2
</div>

<div class="font-bold">
    <input readonly v-model="quote.quoteFields.financeBreakdownT2.monthly" />
</div>
<div class="font-bold two-col-col">
    <div>
    <input readonly v-model="quote.quoteFields.financeBreakdownT2.weekly" />
    </div>
    <div>
    <input readonly v-model="quote.quoteFields.financeBreakdownT2.weeklyCups" />
    </div>
</div>

<div class="font-bold two-col-col">
    <div>
        <input readonly v-model="quote.quoteFields.financeBreakdownT2.daily7" />
    </div>
    <div>
        <input readonly v-model="quote.quoteFields.financeBreakdownT2.daily7Cups" />
    </div>
</div>

<div class="font-bold two-col-col">
    <div>
        <input readonly v-model="quote.quoteFields.financeBreakdownT2.daily5" />
    </div>
    <div>
        <input readonly v-model="quote.quoteFields.financeBreakdownT2.daily5Cups" />
    </div>
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="font-bold">
    Tier 3
</div>

<div class="font-bold">
    <input readonly v-model="quote.quoteFields.financeBreakdownT3.monthly" />
</div>
<div class="font-bold two-col-col">
    <div>
    <input readonly v-model="quote.quoteFields.financeBreakdownT3.weekly" />
    </div>
    <div>
    <input readonly v-model="quote.quoteFields.financeBreakdownT3.weeklyCups" />
    </div>
</div>

<div class="font-bold two-col-col">
    <div>
        <input readonly v-model="quote.quoteFields.financeBreakdownT3.daily7" />
    </div>
    <div>
        <input readonly v-model="quote.quoteFields.financeBreakdownT3.daily7Cups" />
    </div>
</div>

<div class="font-bold two-col-col">
    <div>
        <input readonly v-model="quote.quoteFields.financeBreakdownT3.daily5" />
    </div>
    <div>
        <input readonly v-model="quote.quoteFields.financeBreakdownT3.daily5Cups" />
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
    <input readonly v-model="quote.quoteFields.commission.leadSource" />
</div>

<div class="font-bold">

</div>
<div class="font-bold">
    <input readonly v-model="quote.quoteFields.commission.providedLead" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.quoteFields.commission.selfGenerated" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.quoteFields.commission.percentageOfDeal" />
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
    import { quoteFields } from '@/js/quoteFields'





import { defineComponent } from 'vue';

    // let quote = ref({})
    let quote = {}
    const storeQuotes = useStoreQuotes()
    const storeCatalogue = useStoreCatalogue()
    const storeItemOptions = useStoreItemOptions()
    const storeSysVars = useStoreSysVars()
    const route = useRoute()
    const router = useRouter()

    let test = ref()
    let options = storeCatalogue.getCatalogue('merchandising')


    quote = {
        quoteFields
    }
    quote = storeQuotes.getQuote(route.params.id)


    const handleSavedClicked = () => {
        // const quoteCopy = Object.assign(quote)
        console.log('saving',JSON.parse(JSON.stringify(quote)))
        const quoteCopy = JSON.parse(JSON.stringify(quote))
        storeQuotes.updateQuote(route.params.id, quoteCopy)
        router.back()
    }

const value = ref()
const brand = ref()
const model = ref()
const plumbing = ref()

function dropDownChanged($event) {
    quote.quoteFields[$event.srcElement.id].rrp = storeItemOptions.getItemFieldByItemAndOption('rrp', $event.srcElement.id, $event.target.value)
    quote.quoteFields[$event.srcElement.id].wsp = storeItemOptions.getItemFieldByItemAndOption('wsp', $event.srcElement.id, $event.target.value)


quote.quoteFields.machine.net = computed(() => {
    return parseInt(quote.quoteFields.machine.rrp) - parseInt(quote.quoteFields.machine.wsp)
})
quote.quoteFields.waterOption.net = computed(() => {
    return parseInt(quote.quoteFields.waterOption.rrp) - parseInt(quote.quoteFields.waterOption.wsp)
})
quote.quoteFields.warranty.net = computed(() => {
    return parseInt(quote.quoteFields.warranty.rrp) - parseInt(quote.quoteFields.warranty.wsp)
})
quote.quoteFields.cardMachine.net = computed(() => {
    return parseInt(quote.quoteFields.cardMachine.rrp) - parseInt(quote.quoteFields.cardMachine.wsp)
})
quote.quoteFields.marketing.net = computed(() => {
    return parseInt(quote.quoteFields.marketing.rrp) - parseInt(quote.quoteFields.marketing.wsp)
})
quote.quoteFields.merchandising.net = computed(() => {
    return parseInt(quote.quoteFields.merchandising.rrp) - parseInt(quote.quoteFields.merchandising.wsp)
})
quote.quoteFields.drinkPack.net = computed(() => {
    return parseInt(quote.quoteFields.drinkPack.rrp) - parseInt(quote.quoteFields.drinkPack.wsp)
})
quote.quoteFields.subTotal.net = computed(() => {
    return parseInt(quote.quoteFields.subTotal.rrp) - parseInt(quote.quoteFields.subTotal.wsp)
})
quote.quoteFields.discount.rrp = computed(() => {
    return parseInt( - quote.quoteFields.subTotal.rrp) * parseInt(quote.quoteFields.discount.description) / 100
})
quote.quoteFields.discount.net = computed(() => {
    return parseInt(quote.quoteFields.discount.rrp)
})
quote.quoteFields.additions.net = computed(() => {
    return parseInt(quote.quoteFields.additions.rrp) - parseInt(quote.quoteFields.additions.wsp)
})
quote.quoteFields.total.net = computed(() => {
    return parseInt(quote.quoteFields.total.rrp) - parseInt(quote.quoteFields.total.wsp)
})
quote.quoteFields.finance.net = computed(() => {
    return parseInt(quote.quoteFields.finance.rrp) - parseInt(quote.quoteFields.finance.wsp)
})
quote.quoteFields.financeFee.rrp = computed(() => {
    return parseInt(quote.quoteFields.financeFee.description ? quote.quoteFields.financeFee.description : 0)
})
quote.quoteFields.financeFee.net = computed(() => {
    return parseInt(quote.quoteFields.financeFee.rrp) - parseInt(quote.quoteFields.financeFee.wsp)
})
quote.quoteFields.finalPrice.net = computed(() => {
    return parseInt(quote.quoteFields.finalPrice.rrp) - parseInt(quote.quoteFields.finalPrice.wsp)
})
// TODO: Repeat for T2 & 3 once ive calculated total cost of finance from here .....
quote.quoteFields.financeBreakdownT1.monthly = computed(() => { //TODO: This is bollocks!
    if (quote.quoteFields.finance.description) {
        console.log('rate',storeItemOptions.getItemFieldByItemAndOption('rrp', 'finance', quote.quoteFields.finance.description))
        return parseInt(quote.quoteFields.finalPrice.rrp) / 1000 * parseInt(storeItemOptions.getItemFieldByItemAndOption('rrp', 'finance', quote.quoteFields.finance.description))
    }
    return ""
    })
quote.quoteFields.financeBreakdownT1.weekly = computed(() => {
    if (quote.quoteFields.financeBreakdownT1.monthly != "") return parseInt(quote.quoteFields.financeBreakdownT1.monthly) * 12 / 52
})
quote.quoteFields.financeBreakdownT1.weeklyCups = computed(() => {
    if (quote.quoteFields.financeBreakdownT1.monthly != "") return parseInt(quote.quoteFields.financeBreakdownT1.weekly) / parseInt(storeSysVars.getSysVarByName('rrpPerCup').val)
})
quote.quoteFields.financeBreakdownT1.daily7 = computed(() => {
    if (quote.quoteFields.financeBreakdownT1.monthly != "") return parseInt(quote.quoteFields.financeBreakdownT1.weekly) / 7
})
quote.quoteFields.financeBreakdownT1.daily7Cups = computed(() => {
    if (quote.quoteFields.financeBreakdownT1.monthly != "") return parseInt(quote.quoteFields.financeBreakdownT1.weekly) / 7 / parseInt(storeSysVars.getSysVarByName('rrpPerCup').val)
})
quote.quoteFields.financeBreakdownT1.daily5 = computed(() => {
    if (quote.quoteFields.financeBreakdownT1.monthly != "") return parseInt(quote.quoteFields.financeBreakdownT1.weekly) / 5
})
quote.quoteFields.financeBreakdownT1.daily5Cups = computed(() => {
    if (quote.quoteFields.financeBreakdownT1.monthly != "") return parseInt(quote.quoteFields.financeBreakdownT1.weekly) / 5 / parseInt(storeSysVars.getSysVarByName('rrpPerCup').val)
})
// TODO: ....to here
quote.quoteFields.commission.providedLead = computed(() => {
    return parseInt(quote.quoteFields.finalPrice.rrp) / 100 * 50
})
quote.quoteFields.commission.selfGenerated = computed(() => {
    return parseInt(quote.quoteFields.finalPrice.rrp) / 100 * 75
})
// TODO: Put actual lead source in here
quote.quoteFields.commission.percentageOfDeal = computed(() => {
    return (
        parseInt(quote.quoteFields.finalPrice.rrp) ?
        parseInt(quote.quoteFields.commission.selfGenerated) / parseInt(quote.quoteFields.finalPrice.rrp) * 100 :
        0
    )
})

quote.quoteFields.subTotal.rrp = computed(() => {
    const t =
        parseInt(quote.quoteFields.machine.rrp) +
        parseInt(quote.quoteFields.waterOption.rrp) +
        parseInt(quote.quoteFields.warranty.rrp) +
        parseInt(quote.quoteFields.cardMachine.rrp) +
        parseInt(quote.quoteFields.marketing.rrp) +
        parseInt(quote.quoteFields.merchandising.rrp) +
        parseInt(quote.quoteFields.drinkPack.rrp)
    return t
})
quote.quoteFields.subTotal.wsp = computed(() => {
    const t =
        parseInt(quote.quoteFields.machine.wsp) +
        parseInt(quote.quoteFields.waterOption.wsp) +
        parseInt(quote.quoteFields.warranty.wsp) +
        parseInt(quote.quoteFields.cardMachine.wsp) +
        parseInt(quote.quoteFields.marketing.wsp) +
        parseInt(quote.quoteFields.merchandising.wsp) +
        parseInt(quote.quoteFields.drinkPack.wsp)
    return t
})

quote.quoteFields.total.rrp = computed(() => {
    const t =
        parseInt(quote.quoteFields.machine.rrp) +
        parseInt(quote.quoteFields.waterOption.rrp) +
        parseInt(quote.quoteFields.warranty.rrp) +
        parseInt(quote.quoteFields.cardMachine.rrp) +
        parseInt(quote.quoteFields.marketing.rrp) +
        parseInt(quote.quoteFields.merchandising.rrp) +
        parseInt(quote.quoteFields.drinkPack.rrp) +
        parseInt(quote.quoteFields.discount.rrp) +
        parseInt(quote.quoteFields.additions.rrp)

    return t
})
quote.quoteFields.total.wsp = computed(() => {
    const t =
        parseInt(quote.quoteFields.machine.wsp) +
        parseInt(quote.quoteFields.waterOption.wsp) +
        parseInt(quote.quoteFields.warranty.wsp) +
        parseInt(quote.quoteFields.cardMachine.wsp) +
        parseInt(quote.quoteFields.marketing.wsp) +
        parseInt(quote.quoteFields.merchandising.wsp) +
        parseInt(quote.quoteFields.drinkPack.wsp) +
        parseInt(quote.quoteFields.discount.wsp) +
        parseInt(quote.quoteFields.additions.wsp)
    return t
})

quote.quoteFields.finalPrice.rrp = computed(() => {
    const t =
        parseInt(quote.quoteFields.machine.rrp) +
        parseInt(quote.quoteFields.waterOption.rrp) +
        parseInt(quote.quoteFields.warranty.rrp) +
        parseInt(quote.quoteFields.cardMachine.rrp) +
        parseInt(quote.quoteFields.marketing.rrp) +
        parseInt(quote.quoteFields.merchandising.rrp) +
        parseInt(quote.quoteFields.drinkPack.rrp) +
        parseInt(quote.quoteFields.discount.rrp) +
        parseInt(quote.quoteFields.additions.rrp) +
        parseInt(quote.quoteFields.financeFee.rrp)


    return t
})
quote.quoteFields.finalPrice.wsp = computed(() => {
    const t =
        parseInt(quote.quoteFields.machine.wsp) +
        parseInt(quote.quoteFields.waterOption.wsp) +
        parseInt(quote.quoteFields.warranty.wsp) +
        parseInt(quote.quoteFields.cardMachine.wsp) +
        parseInt(quote.quoteFields.marketing.wsp) +
        parseInt(quote.quoteFields.merchandising.wsp) +
        parseInt(quote.quoteFields.drinkPack.wsp) +
        parseInt(quote.quoteFields.discount.wsp) +
        parseInt(quote.quoteFields.additions.wsp) +
        parseInt(quote.quoteFields.financeFee.wsp)
    return t
})
}

const actual = ref(null)





</script>