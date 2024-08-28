
import './bootstrap';
import { createApp } from 'vue';


const app = createApp({});


import FormComponent from './components/FormComponent.vue';
import TablasComponent from './components/TablasComponent.vue';
import Edit from './components/Edit.vue';

app.component('form-component', FormComponent);
app.component('tablas-component', TablasComponent);
app.component('edit', Edit);



app.mount('#app');