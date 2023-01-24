<template>
    <div
        class="card mb-4"
    >
        <div class="card-content">
            <div class="content">
                <div>{{ sysVar.var }}</div>
                <div>{{ sysVar.val }}</div>
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
    import ModalDeleteSysVar from '@/components/Sysvars/ModalDeleteSysVar.vue';
    import { useStoreSysVars } from '@/stores/StoreSysVars'
    import { useStoreQuotes } from '@/stores/StoreQuotes'
    import { useDateFormat } from '@vueuse/core';
    import AddEditQuote from '../Quotes/AddEditQuote.vue';
    import { useRoute, useRouter } from 'vue-router'
    import ViewSysVars from '../../views/sysvars/ViewSysVars.vue';

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


</script>