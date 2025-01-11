import { createApp } from 'vue'
import App from './App.vue'

import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router';

import 'vuetify/styles'; // Import Vuetify styles
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'; // Import Vuetify components
import * as directives from 'vuetify/directives'; // Import Vuetify directives

const router = createRouter({
  history: createWebHistory(),
  routes,
});
loadFonts()


const vuetify = createVuetify({
  components,
  directives,
});
createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
