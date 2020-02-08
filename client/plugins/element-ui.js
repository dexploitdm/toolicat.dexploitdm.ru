import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU'

Vue.use(ElementUI, { locale });
import 'element-ui/lib/theme-chalk/index.css'

// import { Button, Rate, Step } from 'element-ui';
// Vue.component(Button.name, Button);
// Vue.component(Rate.name, Rate);
// Vue.component(Step.name, Step);
Vue.component('pagination', require('laravel-vue-pagination'));
