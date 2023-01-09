<template>
    <div
        class="card mb-4"
    >
        <div class="card-content">
            <div class="content">
                {{ lead.name }}
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
                @click.prevent="storeLeads.deleteLead(lead.id)"
                href="#"
                class="card-footer-item">Delete</a
            >
        </footer>
    </div>
</template>

<script setup>
    import { useStoreLeads } from '@/stores/StoreLeads'

    const storeLeads = useStoreLeads()

    const props = defineProps({
        lead: {
            type: Object,
            required: true
        }
    })

    const emit = defineEmits(['deleteClicked'])

</script>