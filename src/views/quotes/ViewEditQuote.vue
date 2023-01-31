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
    <select v-model="quote" label="Model" :options="options" />
</div>

<div>
    <select v-model="quote.machine.model.variant" label="Variant" :options="options" />
</div>

<div class="rrp">
    <input readonly v-model="quote.machine.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="quote.machine.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.machine.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div>
    <select v-model="quote.waterOption.description" label="Water Option" :options="options" />
</div>

<div>

</div>

<div>
    <input readonly v-model="quote.waterOption.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="quote.waterOption.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.waterOption.net" />
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
    <select v-model="quote.warranty.term" label="Term" :options="options" />
</div>

<div class="text-green-800 font-semibold">
    <select v-model="quote.warranty.term.cover" label="Cover" :options="options" />
</div>

<div>
    <input readonly v-model="quote.warranty.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="quote.warranty.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.warranty.net" />
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
        v-model="quote.cardMachine.package"
        label="Card Machine"
        :options="catalogue"
        :text-by="(catalogue)=>catalogue.field.description"
        :value-by="(catalogue)=>catalogue.id"
    />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="quote.cardMachine.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="quote.cardMachine.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.cardMachine.net" />
</div>
<!-- End Row -->


<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <select
        v-model="quote.marketing.package"
        label="Marketing Pack"
        :options="options"
        :text-by="(catalogue)=>catalogue.field.description"
        :value-by="(catalogue)=>catalogue.id"
    />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="quote.marketing.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="quote.marketing.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.marketing.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">

    <!-- TODO: jiojodd -->
    <select
        v-model="quote.merchandising.package"
        label="Merchandising"
        :options="catalogue"
        :text-by="(catalogue)=>catalogue.field.description"
        :value-by="(catalogue)=>catalogue.id"
    />
  </div>

<div class="text-green-800 font-semibold">

</div>

<div class="rrp">
    <input readonly v-model="quote.merchandising.rrp" />
</div>

<div class="wsp">
    <input readonly initial="0" v-model="quote.merchandising.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.merchandising.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <select
        v-model="quote.drinkPack.package"
        label="Drink Pack"
        :options="options"
        :text-by="(catalogue)=>catalogue.field.description"
        :value-by="(catalogue)=>catalogue.id"
    />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="quote.drinkPack.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="quote.drinkPack.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.drinkPack.net" />
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
    <input readonly v-model="quote.subTotal.rrp" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.subTotal.wsp" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.subTotal.net" />
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
    <input v-model="quote.additions.rrp" label="Additions" />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="quote.additions.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="quote.additions.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.additions.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <input v-model="quote.discount.percentage" label="Discount %" />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="quote.discount.rrp" />
</div>

<div class="wsp">

</div>

<div class="net">
    <input readonly v-model="quote.discount.net" />
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
    <input readonly v-model="quote.total.rrp" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.total.wsp" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.total.net" />
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
    <select v-model="quote.finance.term" label="Term" :options="options" />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="quote.finance.rrp" />
</div>

<div class="wsp">
    <input readonly v-model="quote.finance.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.finance.net" />
</div>
<!-- End Row -->

<!-- Start Row -->
<div class="text-green-800 font-semibold">
    <input readonly v-model="quote.financeFee.fee" label="Acceptance Fee???" />
</div>

<div class="text-green-800 font-semibold">

</div>

<div>
    <input readonly v-model="quote.financeFee.fee" />
</div>

<div class="wsp">
    <input readonly v-model="quote.financeFee.wsp" />
</div>

<div class="net">
    <input readonly v-model="quote.financeFee.net" />
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
    <input readonly v-model="quote.finalPrice.rrp" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.finalPrice.wsp" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.finalPrice.net" />
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
    <input readonly v-model="quote.financeBreakdown.monthly" />
</div>
<div class="font-bold two-col-col">
    <div>
    <input class="border border-solid border-gray-300 block mb-2 text-sm font-medium text-gray-900" readonly v-model="quote.financeBreakdown.weekly" />
    </div>
    <div>
    <input readonly v-model="quote.financeBreakdown.weekly" />
    </div>
</div>

<div class="font-bold">
    <input readonly v-model="quote.financeBreakdown.daily7" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.financeBreakdown.daily5" />
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
    <input readonly v-model="quote.commission.leadSource" />
</div>

<div class="font-bold">

</div>
<div class="font-bold">
    <input readonly v-model="quote.commission.providedLead" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.commission.selfGenerated" />
</div>

<div class="font-bold">
    <input readonly v-model="quote.commission.percentageOfDeal" />
</div>
<!-- End Row -->










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