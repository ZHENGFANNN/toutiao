/**
 * 项目启动入口
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'

Vue.config.productionTip = false

// 创建Vue根实例
// 把rounter配置到根实例中
// 通过render方法把App根组件渲染到#app入口节点
new Vue({
  router,
  render: h => h(App)
  // el :'app' // 等价于$mount('#app')
}).$mount('#app')
