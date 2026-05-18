<script setup>
import { storeToRefs } from 'pinia';
import { useLightStore } from '@/stores/lights'
const { light, index } = defineProps(['light', 'index']);
const store = useLightStore();
const { lights } = storeToRefs(store)
const { moveUp, moveDown } = store;
</script>

<template>
    <div>
        <button title="edit"><v-icon name="fa-pencil-alt" /></button>
        <button title="move up" :disabled="index == 0" @click="moveUp(index)">
            <v-icon name="bi-arrow-up-circle" />
        </button>
        <button title="move down" :disabled="index == lights.length - 1" @click="moveDown(index)">
            <v-icon name="bi-arrow-down-circle" />
        </button>
        <button title="delete">
            <v-icon name="fa-trash-alt" />
        </button>
    </div>
</template>
