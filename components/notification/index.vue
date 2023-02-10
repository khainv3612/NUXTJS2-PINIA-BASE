<template>
  <transition name='fade'>
    <div v-if='notification && notification.show' id='toast'>
      <div :class="'toast toast--' + notification.type">
        <div class='toast__icon'>
          <img
            v-if="notification.type === 'success'" src='@/assets/icons/notification/success.svg'
            :alt='notification.type'/>
          <img
            v-if="notification.type === 'error'" src='@/assets/icons/notification/error.svg'
            :alt='notification.type'/>
          <img
            v-if="notification.type === 'warning'" src='@/assets/icons/notification/warning.svg'
            :alt='notification.type'/>
          <img v-if="notification.type === 'info'" src='@/assets/icons/notification/info.svg' :alt='notification.type'/>
        </div>
        <div class='toast__body'>
          <h3 class='toast__title'>{{ notification.title }}</h3>
          <p class='toast__msg'>{{ notification.message }}</p>
        </div>
        <div class='toast__close' @click='close'>
          <img src='@/assets/icons/close.svg' alt=''/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from 'vue'
import appStore from '~/store/local/app'
import { storeToRefs } from 'pinia'
import { TIME_SHOW_NOTIFICATION } from '@/constants'
import notificationService from "~/services/notificationService"

export default {
  setup() {
    const timeHide = ref(TIME_SHOW_NOTIFICATION)
    const timeOut = ref(null)
    const { notification } = storeToRefs(
      appStore(),
    )
    const close = () => {
      clearTimeout(timeOut)
      notificationService.setNotification({ show: false })
    }

    return {
      notification, timeHide, timeOut, close
    }
  },
  watch: {
    notification() {
      clearTimeout(this.timeOut)
      this.configTimeOut()
    },
  },
  mounted() {
    this.configTimeOut()
  },
  beforeUnmount() {
    clearTimeout(this.timeOut)
  },
  methods: {
    configTimeOut() {
      this.timeOut = setTimeout(() => notificationService.setNotification({ show: false }),
        this.timeHide)
    }
  }
}
</script>
