<template>

    <div class="card has-background-link-dark p-4 mb-5" >

        <label
            v-if="label"
            class="has-text-white"
        >
            {{ label }}
        </label>

        <div class="field">
            <div class="control">
                <textarea
                    :value="firstField"
                    @input="$emit('update:firstField', $event.target.value)"
                    class="textarea mt-4"
                    placeholder="First Field"
                    ref="textareaRef"
                >
                </textarea>

            </div>
            <div class="control">
                <textarea
                    :value="secondField"
                    @input="$emit('update:secondField', $event.target.value)"
                    class="textarea mt-4"
                    placeholder="Second Field"
                    ref="textareaRef"
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
        firstField: {
            type: String,
            required: true
        },
        secondField: {
            type: String,
            required: true
        },
        label: {
            type: String
        }
    })

    const emit = defineEmits([
        'update:firstField',
        'update:secondField'
    ])

    const focusTextArea = () => {
        textareaRef.value.focus()
    }

    defineExpose({
        focusTextArea
    })

</script>