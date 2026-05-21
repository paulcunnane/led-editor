<script setup>
import { defineEmits } from 'vue';
import { storeToRefs } from 'pinia';
import { useLightStore } from '@/stores/lights'

const emit = defineEmits(['copy', 'edit']);

// Properties
const { light, index } = defineProps(['light', 'index']);

// Pinia state
const store = useLightStore();
const { lights } = storeToRefs(store)
const { moveUp, moveDown, deleteLight } = store;

function confirmDelete() {
    if (confirm(`Are you sure you want to delete ${light.name}?`)) deleteLight(index)
}
</script>

<template>
    <div>
        <button title="edit"><v-icon name="fa-pencil-alt" @click="emit('edit')" /></button>
        <button title="move up" :disabled="index == 0" @click="moveUp(index)">
            <v-icon name="bi-arrow-up-circle" />
        </button>
        <button title="move down" :disabled="index == lights.length - 1" @click="moveDown(index)">
            <v-icon name="bi-arrow-down-circle" />
        </button>
        <button title="delete" @click="confirmDelete">
            <v-icon name="fa-trash-alt" />
        </button>
        <button title="duplicate" @click="emit('copy')">
            <v-icon name="oi-duplicate" />
        </button>
    </div>
</template>
