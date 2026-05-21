<script setup>
import ColourEntry from './ColourEntry.vue';

const model = defineModel();

</script>

<template>
    <div class="entry">
        <ColourEntry v-model="model[0]" />
        <div><input type="number" v-model.number="model[1]"> (ms)</div>
    </div>
</template>

<style scoped>
div.entry {
    display: flex;
}
</style>