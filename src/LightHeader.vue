<script setup>
import LightIndicator from './LightIndicator.vue';
const { light } = defineProps(['light']);
</script>

<template>
    <div class="light-header">
        <div class="name">
            {{ light.name }}
        </div>
        <div class="indicator">
            <LightIndicator :pattern="light.pattern" :fade="light.fade" />
        </div>
    </div>
</template>

<style scoped>
div.light-header {
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
    display: flex;
    gap: 1em;
}

div.name {
    flex-grow: 1;
}

div.indicator {
    flex-shrink: 1;
    align-self: center;
}
</style>