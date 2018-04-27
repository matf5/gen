import Vue from 'vue';
import App from './App';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
import { Input, Select, Option, Button, Message } from 'element-ui';

Vue.component(Input.name, Input);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Button.name, Button);
Vue.prototype.$message = Message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App,
});
