import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import router from "@/router";
import 'vue-js-modal/dist/styles.css'
import './css/style.css';
import store from './store/store';
import VModal from 'vue-js-modal';


Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VModal,{ dialog: true });
Vue.component('date-picker', DatePicker);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
