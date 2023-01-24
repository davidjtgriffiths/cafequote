<template>
    <div
        class="card mb-4"
    >
        <div class="card-content">
            <div class="content">
                <div>{{ sysVar.firstName }}</div>
                <div>{{ sysVar.lastName }}</div>
                <div class="has-text-right mt-2">
                    <small>Date {{ dateFormatted }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink
                :to="`/editSysVar/${ sysVar.id }`"
                href="#"
                class="card-footer-item"
            >
                Edit
            </RouterLink>
            <a
                @click.prevent="modals.deleteSysVar = true"
                href="#"
                class="card-footer-item">Delete</a
            >
            <a
                @click.prevent="gotoQuote(sysVar.id)"
                href="#"
                class="card-footer-item">Quote</a
            >

        </footer>
        <ModalDeleteSysVar
            v-if="modals.deleteSysVar"
            v-model="modals.deleteSysVar"
            :sysVarId="sysVar.id"
        />
    </div>
</template>

<script setup>
    import { reactive, computed } from 'vue'
    import ModalDeleteSysVar from '@/components/SysVars/ModalDeleteSysVar.vue';
    import { useStoreSysVars } from '@/stores/StoreSysVars'
    import { useStoreQuotes } from '@/stores/StoreQuotes'
    import { useDateFormat } from '@vueuse/core';
    import AddEditQuote from '../Quotes/AddEditQuote.vue';
    import { useRoute, useRouter } from 'vue-router'
    import ViewSysVars from '../../views/sysVars/ViewSysVars.vue';

    const storeSysVars = useStoreSysVars()
    const storeQuotes = useStoreQuotes()
    const router = useRouter()

    const dateFormatted = computed(() => {
        let date = new Date(parseInt(props.sysVar.date))
        return useDateFormat(date, 'YYYY-MM-DD HH:mm:ss').value
    })

    const props = defineProps({
        sysVar: {
            type: Object,
            required: true
        }
    })

    const emit = defineEmits(['deleteClicked'])

    const modals = reactive({
        deleteSysVar: false
    })

    // this should poss go in module or ViewSysVars.vue
    const gotoQuote = async (sysVarId) => {
        console.log('find or create quote')
        let quote = null
        // Find quote in storeQuotes
        quote = storeQuotes.getQuoteFromSysVarId(sysVarId)
        console.log('found quote in gotoQuote', quote)
        // If no quote, create one - IN THE STORE but dont wait for firebase
        // But I do need to wait for firebase because i need quiteid to edit it!!!
        if (!quote) {
            let x = await storeQuotes.addQuote(quote, sysVarId)
            //TODO:not getting past here when click quote on sysVar w/ no quote
            console.log('x', x)
        }
        //get Quote by sysVar id
        quote = storeQuotes.getQuoteFromSysVarId(sysVarId)
        // Jump to edit
        console.log('quoteid returned from addquote', quote)
        router.push(`/editQuote/${ quote }`)

    }

</script>