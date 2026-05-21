<script setup>
import { computed } from 'vue';
import { colourToRGB, RGBtoColour } from './utils';

const model = defineModel();
// const colour = computed({
//     get() {
//         return RGBtoColour(model.value);
//     },
//     set(value) {
//         model.value = colourToRGB(value)
//     },
// });
</script>

<template>
    <div class="colour">
        <input type="text" v-model="model">
        <input type="color" v-model="model">
    </div>
</template>

<style scoped>
div.colour {
    display: flex;
}
</style>