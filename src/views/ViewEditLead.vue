<template>
    <AddEditLead
        v-model="lead"
        label="Editing Lead"
        ref="addEditLeadRef"
    >
        <template #buttons>
            <button
                @click="$router.back()"
                class="button is-link has-background-danger"
            >
                Cancel
            </button>
            <button
                class="button is-link has-background-link"
            >
                Save Changes
            </button>
        </template>
    </AddEditLead>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'
    import AddEditLead from '@/components/Leads/AddEditLead.vue'
    import { useStoreLeads } from '@/stores/StoreLeads'

    const lead = ref('')
    const storeLeads = useStoreLeads()
    const route = useRoute()

    lead.value = storeLeads.getLead(route.params.id)

</script>