// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
Vue.use(uView)
Vue.config.productionTip = false

// 自定义组件
import customTabBar from "./components/customTabBar.vue"
Vue.component('customTabBar', customTabBar)

App.mpType = 'app'
// 第三方字体库调用
const font = require('./static/fonts/font.js')
font.loadFont(); //下载字体

const app = new Vue({
    ...App
})

app.$mount()


// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif