<script setup>
import '@picocss/pico';

import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useLightStore } from '@/stores/lights'

import LightEntry from './LightEntry.vue';
import ConfigBox from './ConfigBox.vue';

const store = useLightStore();
const { lights } = storeToRefs(store)
const adding = ref(false);

</script>

<template>
  <header class="container">
    <h1>LED editor</h1>
  </header>
  <main class="container">
    <LightEntry v-for="light, i in lights" :key="light.name" :light="light" :index="i" />
    <button v-show="!adding" @click="adding = true">Add...</button>
    <ConfigBox />
  </main>
</template>

<style scoped></style>
