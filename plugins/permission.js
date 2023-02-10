import Vue from 'vue'

function canAny(el, binding, store) {
  // cú pháp v-can-any="['permission1', 'permission2']"
  // kiểm tra user phải có 1 trong các quyền
  const { value } = binding
  const permissions = store.state.authentication.permissions

  if (value && value instanceof Array) {
    if (value.length > 0) {
      const permissionCheck = value

      const hasPermission = permissions.some(role => {
        return permissionCheck.includes(role)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
}

function canAll(el, binding, store) {
  // cú pháp v-can-all="['permission1', 'permission2']"
  // kiểm tra user phải có tất cả các quyền
  const { value } = binding
  const permissions = store.state.authentication.permissions

  if (value && value instanceof Array) {
    if (value.length > 0) {
      const permissionCheck = value

      let hasPermission = true
      for (let i = 0; i < permissionCheck.length; i++) {
        hasPermission = hasPermission && permissions.includes(permissionCheck[i])
      }

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
}

export default function({ store }, inject) {
  Vue.directive('can-any', {
    inserted(el, binding) {
      canAny(el, binding)
    },
    update(el, binding) {
      canAny(el, binding)
    }
  })

  Vue.directive('can-all', {
    inserted(el, binding) {
      canAll(el, binding)
    },
    update(el, binding) {
      canAll(el, binding)
    }
  })
}
