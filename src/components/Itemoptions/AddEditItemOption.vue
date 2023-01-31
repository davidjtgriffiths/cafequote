<template>

    <div class="card has-background-info-dark p-4 mb-5" >

        <label
            v-if="label"
            class="has-text-white"
        >
            {{ label }}
        </label>

        <div class="field">
            <div class="control">
                <textarea
                    :value="item"
                    @input="$emit('update:item', $event.target.value)"
                    class="textarea mt-4"
                    placeholder="Item"
                    ref="textareaRef"
                >
                </textarea>
            </div>
            <div class="control">
                <textarea
                    :value="option"
                    @input="$emit('update:option', $event.target.value)"
                    class="textarea mt-4"
                    placeholder="Option"
                    ref="lastNameRef"
                >
                </textarea>
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        </div>

    </div>
</template>

<script setup>

    import { ref } from 'vue'

    const textareaRef = ref(null)

    const props = defineProps({
        item: {
            type: String,
            required: true
        },
        option: {
            type: String,
            required: true
        },
        label: {
            type: String
        }
    })

    const emit = defineEmits([
        'update:item',
        'update:option'
    ])

    const focusTextArea = () => {
        textareaRef.value.focus()
    }

    defineExpose({
        focusTextArea
    })

</script>