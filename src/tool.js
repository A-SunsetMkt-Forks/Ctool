import Vue from 'vue'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import router from './tool.router'
import optionBlock from './components/optionBlock'
import codeHighlight from './components/codeHighlight'
import { plugin as modelPlugin } from './tool/model'
import App from './tool.vue'

Vue.config.productionTip = false

Vue.use(ViewUI)
Vue.use(modelPlugin)
Vue.component('option-block', optionBlock)
Vue.component('code-highlight', codeHighlight);

(function () {
    if (document.body.clientWidth > 900) {
        console.log("调整窗口大小")
        const page = document.getElementById('page')
        page.style.width = 'auto'
        page.style.padding = '0 50px'
        page.style.height = 'auto'
    }
})()

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
