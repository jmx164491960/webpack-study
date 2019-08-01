// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store/index'
// import {
//   Loading,
//   Cascader,
//   TreeSelect
// } from 'bg-vue-components'
// import bgVueComponents from 'bg-vue-components'
// import VueI18n from 'vue-i18n';
// import ElementUI from 'element-ui';
// import * as bgLocale from 'bg-vue-components/lib/locale'
// import enLocale from 'bg-vue-components/lib/locale/en'
// import zhLocale from 'bg-vue-components/lib/locale/zh'
import './text.css';
// 看看配置会不会生效
Vue.config.productionTip = false

// Vue.use(VueI18n);
// const i18n = new VueI18n({
//   locale: 'en',    // 语言标识
//   messages: {
//     en: {
//       message: {
//         hello: 'hello world'
//       },
//       ...enLocale
//     },
//     zh: {
//       message: {
//         hello: '你好世界',
//       },
//       ...zhLocale
//     }
//   }
// });

// Vue.use(Loading)
// Vue.use(TreeSelect);
// Vue.use(ElementUI);
// Vue.use(Cascader);
// bgLocale.i18n((key, value) => i18n.t(key, value));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  // router,
  store,
  components: { App },
  template: '<App/>'
})
