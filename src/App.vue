<script setup>
import '@picocss/pico';

import { storeToRefs } from 'pinia';
import { useLightStore } from '@/stores/lights'

// Components
import LightEntry from './LightEntry.vue';
import NewLight from './NewLight.vue';
import ConfigBox from './ConfigBox.vue';

const store = useLightStore();
const { lights } = storeToRefs(store)

</script>

<template>
  <header class="container">
    <h1>LED editor</h1>
  </header>
  <main class="container">
    <section>
      <TransitionGroup name="list">
        <LightEntry v-for="light, i in lights" :key="light.name" :light="light" :index="i" />
      </TransitionGroup>
    </section>
    <section>
      <NewLight />
    </section>
    <section>
      <ConfigBox />
    </section>
  </main>
</template>

<style scoped>
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
