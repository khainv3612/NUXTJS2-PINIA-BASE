<template>
  <div class="error_component">
    <NotfoundComponent v-if="error.code === CODE_404"/>
    <ServerErrorComponent v-if="error.code === CODE_500"/>
  </div>
</template>

<script>

import NotfoundComponent from "./Page404.vue"
import { CODE_200, CODE_404, CODE_500 } from "~/constants"
import ServerErrorComponent from "./Page500.vue"

export default {
  name: 'ErrorComponent',
  components: { ServerErrorComponent, NotfoundComponent },
  props: {
    error: {
      type: Object,
      default: () => ({ show: false, code: CODE_200 })
    }
  },
  data() {
    return {
      CODE_404: CODE_404,
      CODE_500: CODE_500,
    }
  },
  mounted() {
  },
  methods: {}
}
</script>
