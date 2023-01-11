<template>
    <div
        class="card mb-4"
    >
        <div class="card-content">
            <div class="content">
                {{ lead.name }}
                <div class="has-text-right mt-2">
                    <small>Date {{ dateFormatted }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink
                :to="`/editLead/${ lead.id }`"
                href="#"
                class="card-footer-item"
            >
                Edit
            </RouterLink>
            <a
                @click.prevent="modals.deleteLead = true"
                href="#"
                class="card-footer-item">Delete</a
            >
        </footer>
        <ModalDeleteLead
            v-if="modals.deleteLead"
            v-model="modals.deleteLead"
            :leadId="lead.id"
        />
    </div>
</template>

<script setup>
    import { reactive, computed } from 'vue'
    import ModalDeleteLead from '@/components/Leads/ModalDeleteLead.vue';
    import { useStoreLeads } from '@/stores/StoreLeads'
    import { useDateFormat } from '@vueuse/core';

    const storeLeads = useStoreLeads()

    const dateFormatted = computed(() => {
        let date = new Date(parseInt(props.lead.date))
        return useDateFormat(date, 'YYYY-MM-DD HH:mm:ss')
    })

    const props = defineProps({
        lead: {
            type: Object,
            required: true
        }
    })

    const emit = defineEmits(['deleteClicked'])

    const modals = reactive({
        deleteLead: false
    })

</script>