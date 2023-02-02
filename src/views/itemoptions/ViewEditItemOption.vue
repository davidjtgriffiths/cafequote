<template>
    <AddEditItemOption
    v-if="itemOption"
        v-model:parent="itemOption.parent"
        v-model:child="itemOption.child"
        v-model:item="itemOption.item"
        v-model:option="itemOption.option"
        v-model:wsp="itemOption.wsp"
        v-model:rrp="itemOption.rrp"
        v-model:longDescription="itemOption.longDescription"
        label="Editing ItemOption"
        ref="addEditItemOptionRef"
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
    </AddEditItemOption>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import AddEditItemOption from '@/components/Itemoptions/AddEditItemOption.vue'
    import { useStoreItemOptions } from '@/stores/StoreItemOptions'

    let itemOption = ref({})
    const storeItemOptions = useStoreItemOptions()
    const route = useRoute()
    const router = useRouter()

    itemOption = storeItemOptions.getItemOption(route.params.id)

    const handleSavedClicked = () => {
        storeItemOptions.updateItemOption(route.params.id, itemOption)
        router.back()
    }

</script>