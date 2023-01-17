<template>

    <AddEditLead
        v-model:first-name="newLead.firstName"
        v-model:last-name="newLead.lastName"
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
    import { normalizeStyle, ref, reactive } from 'vue'
    import Lead from '@/components/Leads/Lead.vue'
    import AddEditLead from '@/components/Leads/AddEditLead.vue'
    import { useStoreLeads } from '@/stores/StoreLeads'

    const newLead = reactive({
        firstName: '',
        lastName: ''
    })
    const addEditLeadRef = ref(null)
    const storeLeads = useStoreLeads()

    const addLead = () => {
        console.log('new lead to store', newLead)
        storeLeads.addLead(newLead)
        newLead.value = {}
        addEditLeadRef.value.focusTextArea()
    }





</script>