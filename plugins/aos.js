import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(AOS.init({
  delay: 0,
  duration: 1500
}))
