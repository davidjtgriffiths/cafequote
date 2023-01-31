<template>
    <div
        class="card mb-4"
    >
        <div class="card-content">
            <div class="content">
                <div>{{ itemOption.item }}</div>
                <div>{{ itemOption.option }}</div>
                <div class="has-text-right mt-2">
                    <small>Date {{ dateFormatted }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink
                :to="`/edititemoption/${ itemOption.id }`"
                href="#"
                class="card-footer-item"
            >
                Edit
            </RouterLink>
            <a
                @click.prevent="modals.deleteItemOption = true"
                href="#"
                class="card-footer-item">Delete</a
            >
            <a
                @click.prevent="gotoQuote(itemOption.id)"
                href="#"
                class="card-footer-item">Quote</a
            >

        </footer>
        <ModalDeleteItemOption
            v-if="modals.deleteItemOption"
            v-model="modals.deleteItemOption"
            :itemOptionId="itemOption.id"
        />
    </div>
</template>

<script setup>
    import { reactive, computed } from 'vue'
    import ModalDeleteItemOption from '@/components/Itemoptions/ModalDeleteItemOption.vue';
    import { useStoreItemOptions } from '@/stores/StoreItemOptions'
    import { useStoreQuotes } from '@/stores/StoreQuotes'
    import { useDateFormat } from '@vueuse/core';
    import AddEditQuote from '../Quotes/AddEditQuote.vue';
    import { useRoute, useRouter } from 'vue-router'
    import ViewItemOptions from '../../views/itemoptions/ViewItemOptions.vue';

    const storeItemOptions = useStoreItemOptions()
    const storeQuotes = useStoreQuotes()
    const router = useRouter()

    const dateFormatted = computed(() => {
        let date = new Date(parseInt(props.itemOption.date))
        return useDateFormat(date, 'YYYY-MM-DD HH:mm:ss').value
    })

    const props = defineProps({
        itemOption: {
            type: Object,
            required: true
        }
    })

    const emit = defineEmits(['deleteClicked'])

    const modals = reactive({
        deleteItemOption: false
    })


</script>