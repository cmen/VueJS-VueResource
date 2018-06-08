import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueResource)
Vue.config.productionTip = false

Vue.http.options.root = 'https://jsonplaceholder.typicode.com'
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (request.after) {
      request.after.call(this, response)
    }
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
