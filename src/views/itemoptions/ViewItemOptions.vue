<template>

    <AddEditItemOption
        v-model:item="newItemOption.item"
        v-model:option="newItemOption.option"
        ref="addEditItemOptionRef"
    >
        <template #buttons>
            <button
                @click="addItemOption"
                :disabled="!newItemOption"
                class="button is-link has-background-link"
            >
                Save New ItemOption
            </button>
        </template>
    </AddEditItemOption>

    itemoptions{{ useStoreItemOptions.itemOptions }}

    <!-- this should be the bulma table -->
    <ItemOption
        v-for="itemOption in storeItemOptions.itemOptions"
        :key="itemOption.id"
        :itemOption="itemOption"
    />

</template>

<script setup>
    import { normalizeStyle, ref, reactive } from 'vue'
    import ItemOption from '@/components/Itemoptions/ItemOption.vue'
    import AddEditItemOption from '@/components/Itemoptions/AddEditItemOption.vue'
    import { useStoreItemOptions } from '@/stores/StoreItemOptions'



    const newItemOption = reactive({
        item: '',
        option: ''
    })
    const addEditItemOptionRef = ref(null)
    const storeItemOptions = useStoreItemOptions()

    const addItemOption = () => {
        console.log('new itemOption to store', newItemOption)
        storeItemOptions.addItemOption(newItemOption)
        newItemOption.value = {}
        addEditItemOptionRef.value.focusTextArea()
    }







</script>