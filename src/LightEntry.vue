<script setup>
import LightHeader from './LightHeader.vue';
import LightButtons from './LightButtons.vue';

import { ref, watch } from 'vue';
// import { storeToRefs } from 'pinia';
// import { useLightStore } from '@/stores/lights';

const { light, index } = defineProps(['light', 'index'])
const open = ref(false);

// const { updateLight } = useLightStore()
</script>

<template>
    <div class="card">
        <LightHeader :light="light" @click="open = !open" />
        <LightButtons v-show="open" :light="light" :index="index" />
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