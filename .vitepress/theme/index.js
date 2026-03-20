import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import '../../public/el-plus-theme.css'
import './custom.css'

import AppSidebar from './components/AppSidebar.vue'
import AppTopbar from './components/AppTopbar.vue'
import AppFilter from './components/AppFilter.vue'
import AppStatCard from './components/AppStatCard.vue'
import Demo from './components/Demo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    app.component('AppSidebar', AppSidebar)
    app.component('AppTopbar', AppTopbar)
    app.component('AppFilter', AppFilter)
    app.component('AppStatCard', AppStatCard)
    app.component('Demo', Demo)
  }
}
