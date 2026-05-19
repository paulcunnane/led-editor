<script setup>
import { computed, defineEmits, nextTick, onMounted, ref, useTemplateRef } from 'vue';

import { storeToRefs } from 'pinia';
import { useLightStore } from '@/stores/lights'

const emit = defineEmits(['add', 'cancel']);

const store = useLightStore();
const { lights } = storeToRefs(store);

const name = ref('');
const nameInput = useTemplateRef('name');

const message = computed(() => {
    if (name.value == '') return 'A name is required';
    if (lights.value.find(light => {
        return light.name.toLowerCase() == name.value.toLowerCase()
    })) return 'Duplicate name';
    return '';
});
const valid = computed(() => {
    if (message.value) return false;
    return true;
});

function add() {
    emit('add', name.value);
}

function cancel() {
    emit('cancel');
}

onMounted(() => {
    nextTick(() => nameInput.value.focus());
});
</script>

<template>
    <form @submit.prevent="add">
        <fieldset role="group">
            <input v-model.trim="name" ref="name" @keydown.esc="cancel">
            <button :disabled="!valid">Add</button>
            <button type="button" class="secondary" @click="cancel">Cancel</button>
        </fieldset>
        <small>{{ message }}</small>
    </form>
</template>