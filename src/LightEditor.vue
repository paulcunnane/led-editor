<script setup>
import { defineProps, onMounted, ref, watch } from 'vue';
import { useLightStore } from '@/stores/lights'
import PatternEntry from './PatternEntry.vue';

const store = useLightStore();
const { updateLight } = store;

const { light } = defineProps(['light']);
const emit = defineEmits(['cancel']);

let savedLight;

const myLight = ref(light);

watch(myLight, (newValue) => {
    updateLight(newValue);
})

// Changes are made to the light in real time, so that they can
// be observed in the LightIndicator component. Cancelling will
// restore the original light details.
function cancel() {
    updateLight(savedLight);
    emit('cancel');
}

function save() {
    emit('cancel');
}

onMounted(() => {
    savedLight = { ...light };
});
</script>

<template>
    <form>
        <label>Fade time <input v-model="myLight.fade"></label>
        <div v-for="entry, i in myLight.pattern" :key="i">
            <PatternEntry v-model="myLight.pattern[i]" />
        </div>
        <button type="button" @click="save">Save</button>
        <button type="button" class="secondary" @click="cancel">Cancel</button>
    </form>
</template>