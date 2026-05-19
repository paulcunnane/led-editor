<script setup>
import { ref } from 'vue';

import { useLightStore } from '@/stores/lights'

import NameEntry from './NameEntry.vue';

const adding = ref(false);

const store = useLightStore();
const { addLight } = store;

function add(name) {
    addLight({
        name,
        pattern: [["red", 500], ["black", 2500]],
        fade: 100
    });
    adding.value = false;
}
function cancel() {
    adding.value = false;
}
</script>

<template>
    <button v-if="!adding" @click="adding = true">Add...</button>
    <NameEntry v-else @add="add" @cancel="cancel" />
</template>
