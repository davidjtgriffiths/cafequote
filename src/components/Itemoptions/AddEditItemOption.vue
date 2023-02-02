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
                    :value="parent"
                    @input="$emit('update:parent', $event.target.value)"
                    class="textarea mt-4"
                    placeholder="Parent"
                    ref="textareaRef"
                >
                </textarea>
            </div>
            <div class="control">
                <textarea
                    :value="chlid"
                    @input="$emit('update:chlid', $event.target.value)"
                    class="textarea mt-4"
                    placeholder="Chlid"
                    ref="textareaRef"
                >
                </textarea>
            </div>
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
            <div class="control">
                <textarea
                    :value="wsp"
                    @input="$emit('update:wsp', $event.target.value)"
                    class="textarea mt-4"
                    placeholder="Wholesale Price"
                    ref="lastNameRef"
                >
                </textarea>
            </div>
            <div class="control">
                <textarea
                    :value="rrp"
                    @input="$emit('update:rrp', $event.target.value)"
                    class="textarea mt-4"
                    placeholder="Retail Price"
                    ref="lastNameRef"
                >
                </textarea>
            </div>
            <div class="control">
                <textarea
                    :value="longDescription"
                    @input="$emit('update:longDescription', $event.target.value)"
                    class="textarea mt-4"
                    placeholder="Long Description"
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
        parent: {
            type: String,
            required: true
        },
        chlid: {
            type: String,
            required: true
        },
        item: {
            type: String,
            required: true
        },
        option: {
            type: String,
            required: true
        },
        wsp: {
            type: String,
            required: true
        },
        rrp: {
            type: String,
            required: true
        },
        longDescription: {
            type: String,
            required: true
        },
        label: {
            type: String
        }
    })

    const emit = defineEmits([
        'update:parent',
        'update:chlid',
        'update:item',
        'update:option',
        'update:wsp',
        'update:rrp',
        'update:longDescription'
    ])

    const focusTextArea = () => {
        textareaRef.value.focus()
    }

    defineExpose({
        focusTextArea
    })

</script>