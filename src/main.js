import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initGoogleAnalytics, trackPageView } from './utils/analytics'

// Initialize Google Analytics
initGoogleAnalytics()

// Track page views on route change
router.afterEach((to) => {
  trackPageView(to.path, to.name || document.title)
})

const app = createApp(App)
app.use(router)
app.mount('#app')
