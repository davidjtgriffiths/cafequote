<template>
    <AddEditSysVar
    v-if="sysVar"
        v-model:first-name="sysVar.firstName"
        v-model:last-name="sysVar.lastName"
        label="Editing SysVar"
        ref="addEditSysVarRef"
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
    </AddEditSysVar>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import AddEditSysVar from '@/components/sysVars/AddEditSysVar.vue'
    import { useStoreSysVars } from '@/stores/StoreSysVars'

    let sysVar = ref({})
    const storeSysVars = useStoreSysVars()
    const route = useRoute()
    const router = useRouter()

    sysVar = storeSysVars.getSysVar(route.params.id)

    const handleSavedClicked = () => {
        storeSysVars.updateSysVar(route.params.id, sysVar)
        router.back()
    }

</script>