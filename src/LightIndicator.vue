<script setup>
import { computed, onMounted, ref } from 'vue';
import { colourToRGB } from './utils';
const { pattern, fade } = defineProps({
    pattern: Array,
    fade: Number,
});
const colour = ref([0, 0, 0]);
const style = computed(() => {
    const rgb = colour.value.join(',')
    return `transition: background-color ${fade}ms; background-color: rgb(${rgb});`;
});

// current pattern step
let step = 0;

onMounted(() => {
    setTimeout(nextStep, pattern[step][1]);
});

function nextStep() {
    step = (step + 1) % pattern.length;
    colour.value = colourToRGB(pattern[step][0]);
    setTimeout(nextStep, pattern[step][1]);
}
</script>

<template>
    <div class="led" :style="style">&nbsp;</div>
</template>

<style scoped>
.led {
    width: 1em;
    height: 1em;
    border: 2px solid darkgray;
    border-radius: 50%;
    background-color: black;
}
</style>