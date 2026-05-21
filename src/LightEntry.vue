<script setup>
import LightButtons from './LightButtons.vue';
import LightEditor from './LightEditor.vue';
import LightHeader from './LightHeader.vue';
import NameEntry from './NameEntry.vue';

import { ref, computed } from 'vue';
import { useLightStore } from '@/stores/lights';

const store = useLightStore();
const { addLight } = store;

// Properties
const { light, index } = defineProps(['light', 'index'])

// Refs
const open = ref(false);
const copying = ref(false);
const editing = ref(false);

// Computed
const showButtons = computed(() => {
    if (copying.value || editing.value) return false;
    return open.value;
})

function add(name) {
    addLight({
        name,
        pattern: light.pattern,
        fade: light.fade,
    });
    copying.value = false;
}
function cancel() {
    copying.value = false;
    editing.value = false;
}

</script>

<template>
    <div class="card">
        <LightHeader :light="light" @click="open = !open" />
        <LightButtons v-show="showButtons" :light="light" :index="index" @edit="editing = true"
            @copy="copying = true" />
        <NameEntry v-if="copying" @add="add" @cancel="cancel" />
        <LightEditor v-if="editing" :light="light" @cancel="cancel" />
    </div>
</template>

<style scoped>
div.card {
    background-color: white;
    padding: 0.5em;
    margin-bottom: 1em;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>
