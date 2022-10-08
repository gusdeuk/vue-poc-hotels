import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// -----------------------------------------------------------
// Entry point for Global Scoped SCSS structure
// -----------------------------------------------------------
import './css/main.scss';

// -----------------------------------------------------------
// global icon library FA based
// -----------------------------------------------------------
import { iconLibrary } from './icon/icon-library';

const app = createApp(App)
    .use(store)
    .use(router)
    // register icon lib as global component
    .component('font-awesome-icon', iconLibrary)
    .mount('#app');
