require('./bootstrap');

import { createApp } from 'vue';
import chat from './components/chat'

const app = createApp({});
app.component('chat',chat)
app.mount('#app')
