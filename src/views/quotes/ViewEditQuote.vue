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
                class="button is-link has-background-link mr-2"
            >
                Save Changes
            </button>
            <button
                @click="$router.push(`/previewContract/${ quote.id }`)"
                class="button is-link has-background-link"
            >
                Show Agreement {{  quote.id }}
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
            v-for="item in storeItemOptions.getItemOptionsByParentAndItem(quote.quoteFields.machine.description, 'warranty')"
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
    <input @change="dropDownChanged($event)" v-model="quote.quoteFields.additions.rrp" label="Additions" />
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
    <input @change="dropDownChanged($event)" v-model="quote.quoteFields.discount.description" label="Discount %" />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="quote.quoteFields.discount.rrp" />
</div>

<div class="wsp">

</div>

<div class="net">
    <input v-model="quote.quoteFields.discount.net" />
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
    <input @change="dropDownChanged($event)" v-model="quote.quoteFields.financeFee.description" label="Acceptance Fee???" />
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

    import { getCurrentInstance } from 'vue';






import { defineComponent } from 'vue';

    // let quote = ref({})
    let quote = {}
    const storeLeads = useStoreLeads()
    const storeQuotes = useStoreQuotes()
    const storeCatalogue = useStoreCatalogue()
    const storeItemOptions = useStoreItemOptions()
    const storeSysVars = useStoreSysVars()
    const route = useRoute()
    const router = useRouter()

    let test = ref()
    let options = storeCatalogue.getCatalogue('merchandising')
    let lead = ref()

    quote = {
        quoteFields
    }
    quote = storeQuotes.getQuote(route.params.id)
    lead = storeLeads.getLead(quote.leadId)
    quote.quoteFields = storeQuotes.getQuote(route.params.id).quoteFields
    console.log('quote back to view edit', quote)
    console.log('quotefields', storeQuotes.getQuote(route.params.id).quoteFields)


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
const warrantyKey = ref(0)

function dropDownChanged($event) {
    console.log('the dropdown changed event', $event.target.nodeName)
    if ( $event.target.nodeName == 'SELECT' ) {
    quote.quoteFields[$event.srcElement.id].rrp = storeItemOptions.getItemFieldByItemAndOption('rrp', $event.srcElement.id, $event.target.value)
    quote.quoteFields[$event.srcElement.id].wsp = storeItemOptions.getItemFieldByItemAndOption('wsp', $event.srcElement.id, $event.target.value)
    }

quote.quoteFields.machine.net = parseInt(quote.quoteFields.machine.rrp) - parseInt(quote.quoteFields.machine.wsp)

quote.quoteFields.waterOption.net = parseInt(quote.quoteFields.waterOption.rrp) - parseInt(quote.quoteFields.waterOption.wsp)

quote.quoteFields.warranty.net = parseInt(quote.quoteFields.warranty.rrp) - parseInt(quote.quoteFields.warranty.wsp)

quote.quoteFields.cardMachine.net = parseInt(quote.quoteFields.cardMachine.rrp) - parseInt(quote.quoteFields.cardMachine.wsp)

quote.quoteFields.marketing.net = parseInt(quote.quoteFields.marketing.rrp) - parseInt(quote.quoteFields.marketing.wsp)

quote.quoteFields.merchandising.net = parseInt(quote.quoteFields.merchandising.rrp) - parseInt(quote.quoteFields.merchandising.wsp)

quote.quoteFields.drinkPack.net = parseInt(quote.quoteFields.drinkPack.rrp) - parseInt(quote.quoteFields.drinkPack.wsp)

quote.quoteFields.subTotal.net == parseInt(quote.quoteFields.subTotal.rrp) - parseInt(quote.quoteFields.subTotal.wsp)

quote.quoteFields.discount.rrp = parseInt( - quote.quoteFields.subTotal.rrp) * parseInt(quote.quoteFields.discount.description) / 100
console.log('additions ',parseInt(quote.quoteFields.discount.rrp) - parseInt(quote.quoteFields.additions.wsp))

quote.quoteFields.discount.net = parseInt(quote.quoteFields.discount.rrp)

quote.quoteFields.additions.net = parseInt(quote.quoteFields.additions.rrp) - parseInt(quote.quoteFields.additions.wsp)
quote.quoteFields.total.net = parseInt(quote.quoteFields.total.rrp) - parseInt(quote.quoteFields.total.wsp)

quote.quoteFields.finance.net = parseInt(quote.quoteFields.finance.rrp) - parseInt(quote.quoteFields.finance.wsp)

quote.quoteFields.financeFee.rrp = parseInt(quote.quoteFields.financeFee.description ? quote.quoteFields.financeFee.description : 0)

quote.quoteFields.financeFee.net = parseInt(quote.quoteFields.financeFee.rrp) - parseInt(quote.quoteFields.financeFee.wsp)

quote.quoteFields.finalPrice.net = parseInt(quote.quoteFields.finalPrice.rrp) - parseInt(quote.quoteFields.finalPrice.wsp)

// TODO: Repeat for T2 & 3 once ive calculated total cost of finance from here .....
quote.quoteFields.financeBreakdownT1.monthly =
    quote.quoteFields.finance.description ?
    parseInt(quote.quoteFields.finalPrice.rrp) / 1000 * parseInt(storeItemOptions.getItemFieldByItemAndOption('rrp', 'finance', quote.quoteFields.finance.description)) :
    ""

if (quote.quoteFields.financeBreakdownT1.monthly != "") quote.quoteFields.financeBreakdownT1.weekly = parseInt(quote.quoteFields.financeBreakdownT1.monthly) * 12 / 52
if (quote.quoteFields.financeBreakdownT1.monthly != "") quote.quoteFields.financeBreakdownT1.weeklyCups = parseInt(quote.quoteFields.financeBreakdownT1.weekly) / parseInt(storeSysVars.getSysVarByName('rrpPerCup').val)
if (quote.quoteFields.financeBreakdownT1.monthly != "") quote.quoteFields.financeBreakdownT1.daily7 = parseInt(quote.quoteFields.financeBreakdownT1.weekly) / 7
if (quote.quoteFields.financeBreakdownT1.monthly != "") quote.quoteFields.financeBreakdownT1.daily7Cups = parseInt(quote.quoteFields.financeBreakdownT1.weekly) / 7 / parseInt(storeSysVars.getSysVarByName('rrpPerCup').val)
if (quote.quoteFields.financeBreakdownT1.monthly != "") quote.quoteFields.financeBreakdownT1.daily5 = parseInt(quote.quoteFields.financeBreakdownT1.weekly) / 5
if (quote.quoteFields.financeBreakdownT1.monthly != "") quote.quoteFields.financeBreakdownT1.daily5Cups = parseInt(quote.quoteFields.financeBreakdownT1.weekly) / 5 / parseInt(storeSysVars.getSysVarByName('rrpPerCup').val)

// TODO: ....to here

quote.quoteFields.commission.providedLead = parseInt(quote.quoteFields.finalPrice.rrp) / 100 * 50

quote.quoteFields.commission.selfGenerated = parseInt(quote.quoteFields.finalPrice.rrp) / 100 * 75

// TODO: Put actual lead source in here
quote.quoteFields.commission.percentageOfDeal =
        parseInt(quote.quoteFields.finalPrice.rrp) ?
        parseInt(quote.quoteFields.commission.selfGenerated) / parseInt(quote.quoteFields.finalPrice.rrp) * 100 :
        0
console.log('doing subtotal')
quote.quoteFields.subTotal.rrp =
        parseInt(quote.quoteFields.machine.rrp) +
        parseInt(quote.quoteFields.waterOption.rrp) +
        parseInt(quote.quoteFields.warranty.rrp) +
        parseInt(quote.quoteFields.cardMachine.rrp) +
        parseInt(quote.quoteFields.marketing.rrp) +
        parseInt(quote.quoteFields.merchandising.rrp) +
        parseInt(quote.quoteFields.drinkPack.rrp)

quote.quoteFields.subTotal.wsp =
        parseInt(quote.quoteFields.machine.wsp) +
        parseInt(quote.quoteFields.waterOption.wsp) +
        parseInt(quote.quoteFields.warranty.wsp) +
        parseInt(quote.quoteFields.cardMachine.wsp) +
        parseInt(quote.quoteFields.marketing.wsp) +
        parseInt(quote.quoteFields.merchandising.wsp) +
        parseInt(quote.quoteFields.drinkPack.wsp)

quote.quoteFields.subTotal.net =
        parseInt(quote.quoteFields.machine.net) +
        parseInt(quote.quoteFields.waterOption.net) +
        parseInt(quote.quoteFields.warranty.net) +
        parseInt(quote.quoteFields.cardMachine.net) +
        parseInt(quote.quoteFields.marketing.net) +
        parseInt(quote.quoteFields.merchandising.net) +
        parseInt(quote.quoteFields.drinkPack.net)

quote.quoteFields.total.rrp =
        parseInt(quote.quoteFields.machine.rrp) +
        parseInt(quote.quoteFields.waterOption.rrp) +
        parseInt(quote.quoteFields.warranty.rrp) +
        parseInt(quote.quoteFields.cardMachine.rrp) +
        parseInt(quote.quoteFields.marketing.rrp) +
        parseInt(quote.quoteFields.merchandising.rrp) +
        parseInt(quote.quoteFields.drinkPack.rrp) +
        parseInt(quote.quoteFields.discount.rrp) +
        parseInt(quote.quoteFields.additions.rrp)

quote.quoteFields.total.wsp =
        parseInt(quote.quoteFields.machine.wsp) +
        parseInt(quote.quoteFields.waterOption.wsp) +
        parseInt(quote.quoteFields.warranty.wsp) +
        parseInt(quote.quoteFields.cardMachine.wsp) +
        parseInt(quote.quoteFields.marketing.wsp) +
        parseInt(quote.quoteFields.merchandising.wsp) +
        parseInt(quote.quoteFields.drinkPack.wsp) +
        parseInt(quote.quoteFields.discount.wsp) +
        parseInt(quote.quoteFields.additions.wsp)

quote.quoteFields.total.net =
        parseInt(quote.quoteFields.machine.net) +
        parseInt(quote.quoteFields.waterOption.net) +
        parseInt(quote.quoteFields.warranty.net) +
        parseInt(quote.quoteFields.cardMachine.net) +
        parseInt(quote.quoteFields.marketing.net) +
        parseInt(quote.quoteFields.merchandising.net) +
        parseInt(quote.quoteFields.drinkPack.net) +
        parseInt(quote.quoteFields.discount.net) +
        parseInt(quote.quoteFields.additions.net)

quote.quoteFields.finalPrice.rrp =
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


quote.quoteFields.finalPrice.wsp =
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

quote.quoteFields.finalPrice.net =
        parseInt(quote.quoteFields.machine.net) +
        parseInt(quote.quoteFields.waterOption.net) +
        parseInt(quote.quoteFields.warranty.net) +
        parseInt(quote.quoteFields.cardMachine.net) +
        parseInt(quote.quoteFields.marketing.net) +
        parseInt(quote.quoteFields.merchandising.net) +
        parseInt(quote.quoteFields.drinkPack.net) +
        parseInt(quote.quoteFields.discount.net) +
        parseInt(quote.quoteFields.additions.net) +
        parseInt(quote.quoteFields.financeFee.net)
}

// const actual = ref(null)





</script>