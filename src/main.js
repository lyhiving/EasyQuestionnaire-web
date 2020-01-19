import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import echarts from './utils/echarts';
import 'element-ui/lib/theme-chalk/index.css';
import messageBox from "@/utils/messageBox";
import '@/assets/css/normalize.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(echarts);
Vue.use(messageBox);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');