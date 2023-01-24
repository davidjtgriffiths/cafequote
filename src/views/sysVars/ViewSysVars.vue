<template>

    <AddEditSysVar
        v-model:first-name="newSysVar.firstName"
        v-model:last-name="newSysVar.lastName"
        ref="addEditSysVarRef"
    >
        <template #buttons>
            <button
                @click="addSysVar"
                :disabled="!newSysVar"
                class="button is-link has-background-link"
            >
                Save New SysVar
            </button>
        </template>
    </AddEditSysVar>

    <!-- this should be the bulma table -->
    <SysVar
        v-for="sysVar in storeSysVars.sysVars"
        :key="sysVar.id"
        :sysVar="sysVar"
    />

</template>

<script setup>
    import { normalizeStyle, ref, reactive } from 'vue'
    import SysVar from '@/components/SysVars/SysVar.vue'
    import AddEditSysVar from '@/components/SysVars/AddEditSysVar.vue'
    import { useStoreSysVars } from '@/stores/StoreSysVars'



    const newSysVar = reactive({
        firstName: '',
        lastName: ''
    })
    const addEditSysVarRef = ref(null)
    const storeSysVars = useStoreSysVars()

    const addSysVar = () => {
        console.log('new sysVar to store', newSysVar)
        storeSysVars.addSysVar(newSysVar)
        newSysVar.value = {}
        addEditSysVarRef.value.focusTextArea()
    }







</script>