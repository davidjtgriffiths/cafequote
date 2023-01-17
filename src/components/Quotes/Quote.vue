<template>
    <div
        class="card mb-4"
    >
        <div class="card-content">
            <div class="content">
                <div>
                    {{ quote.firstField }}
                </div>
                <div>
                    {{ quote.secondField }}
                </div>
                <div class="has-text-right mt-2">
                    <small>Date {{ dateFormatted }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink
                :to="`/editQuote/${ quote.id }`"
                href="#"
                class="card-footer-item"
            >
                Edit
            </RouterLink>
            <a
                @click.prevent="modals.deleteQuote = true"
                href="#"
                class="card-footer-item">Delete</a
            >
        </footer>
        <ModalDeleteQuote
            v-if="modals.deleteQuote"
            v-model="modals.deleteQuote"
            :quoteId="quote.id"
        />
    </div>
</template>

<script setup>
    import { reactive, computed } from 'vue'
    import ModalDeleteQuote from '@/components/Quotes/ModalDeleteQuote.vue';
    import { useStoreQuotes } from '@/stores/StoreQuotes'
    import { useDateFormat } from '@vueuse/core';
    import ViewQuotes from '@/views/quotes/ViewQuotes.vue';

    const storeQuotes = useStoreQuotes()

    const dateFormatted = computed(() => {
        let date = new Date(parseInt(props.quote.date))
        return useDateFormat(date, 'YYYY-MM-DD HH:mm:ss').value
    })

    const props = defineProps({
        quote: {
            type: Object,
            required: true
        }
    })

    const emit = defineEmits(['deleteClicked'])

    const modals = reactive({
        deleteQuote: false
    })

</script>