<template>

    <AddEditLead
        v-model="newLead"
        ref="addEditLeadRef"
    >
        <template #buttons>
            <button
                    @click="addLead"
                    :disabled="!newLead"
                    class="button is-link has-background-link"
                >
                    Save New Lead
                </button>
        </template>
    </AddEditLead>

    <!-- this should be the bulma table -->
    <Lead
        v-for="lead in storeLeads.leads"
        :key="lead.id"
        :lead="lead"
    />

</template>

<script setup>
    import { normalizeStyle, ref } from 'vue'
    import Lead from '@/components/Leads/Lead.vue'
    import AddEditLead from '@/components/Leads/AddEditLead.vue'
    import { useStoreLeads } from '@/stores/StoreLeads'

    const newLead = ref('')
    const addEditLeadRef = ref(null)
    const storeLeads = useStoreLeads()

    const addLead = () => {
        storeLeads.addLead(newLead.value)
        newLead.value = ''
        addEditLeadRef.value.focusTextArea()
    }





</script>