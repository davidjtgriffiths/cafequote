<template>
    <AddEditLead
        v-model="lead"
        label="Editing Lead"
        ref="addEditLeadRef"
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
    </AddEditLead>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import AddEditLead from '@/components/Leads/AddEditLead.vue'
    import { useStoreLeads } from '@/stores/StoreLeads'

    const lead = ref('')
    const storeLeads = useStoreLeads()
    const route = useRoute()
    const router = useRouter()

    lead.value = storeLeads.getLead(route.params.id)

    const handleSavedClicked = () => {
        storeLeads.updateLead(route.params.id, lead)
        router.back()
    }

</script>