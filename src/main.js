import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiArrowDownCircle, BiArrowUpCircle, FaPencilAlt, FaTrashAlt } from 'oh-vue-icons/icons'

addIcons(BiArrowDownCircle, BiArrowUpCircle, FaPencilAlt, FaTrashAlt)

const pinia = createPinia()
createApp(App).use(pinia).component('v-icon', OhVueIcon).mount('#app')
