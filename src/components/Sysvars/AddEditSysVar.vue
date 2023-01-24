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
                    :value="var"
                    @input="$emit('update:var', $event.target.value)"
                    class="textarea mt-4"
                    placeholder="First Name"
                    ref="textareaRef"
                >
                </textarea>
            </div>
            <div class="control">
                <textarea
                    :value="val"
                    @input="$emit('update:val', $event.target.value)"
                    class="textarea mt-4"
                    placeholder="Last Name"
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
        var: {
            type: String,
            required: true
        },
        val: {
            type: String,
            required: true
        },
        label: {
            type: String
        }
    })

    const emit = defineEmits([
        'update:var',
        'update:val'
    ])

    const focusTextArea = () => {
        textareaRef.value.focus()
    }

    defineExpose({
        focusTextArea
    })

</script>