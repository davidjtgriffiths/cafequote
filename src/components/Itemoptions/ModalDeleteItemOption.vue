<template>
    <div class="modal is-active p-4">
    <div class="modal-background"></div>
    <div
        class="modal-card"
        ref="modalCardRef"
    >
        <header class="modal-card-head">
        <p class="modal-card-title">Delete ItemOption</p>
        <button
            @click="closeModal"
            class="delete"
            aria-label="close"
        >
        </button>
        </header>
        <section class="modal-card-body">
        Are you sure you want to delete this itemOption?
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
        <button
            @click="closeModal"
            class="button"
        >
            Cancel
        </button>
        <button
            @click="storeItemOptions.deleteItemOption(itemOptionId)"
            class="button is-danger"
        >
            Delete
        </button>
        </footer>
    </div>
    </div>
</template>

<script setup>

    import { ref } from 'vue'
    import { onClickOutside } from '@vueuse/core'
    import { useStoreItemOptions } from '@/stores/StoreItemOptions'


    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        },
        itemOptionId: {
            type: String,
            required: true
        }
    })

    const emit = defineEmits([
        'update:modelValue'
    ])

    const closeModal = () => {
        emit('update:modelValue', false)
    }

    const modalCardRef = ref(null)
    onClickOutside(modalCardRef, closeModal)

    const storeItemOptions = useStoreItemOptions()

</script>