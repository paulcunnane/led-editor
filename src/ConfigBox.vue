<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useLightStore } from '@/stores/lights'
import colourToRGB from './utils';
const store = useLightStore();
const { lights } = storeToRefs(store)

const config = computed(() => {
    return JSON.stringify(lights.value.map(light => {
        const newLight = { ...light };
        newLight.pattern = newLight.pattern.map(step => {
            return [colourToRGB(step[0]), step[1]]
        });
        return newLight;
    }));
});
</script>

<template>
    <h2>Configuration</h2>
    <div class="lights-data">{{ config }}</div>
</template>

<style scoped>
div.lights-data {
    border: 1px solid gray;
    padding: 0.5em;
}
</style>