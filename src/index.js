// @flow

import Toast from './Toast.vue'
import ToastRenderless from './ToastRenderless.vue'
import { update } from './utils'

export function createComponent(options = {}) {
  const {
    transition
  } = options

  return update(Toast, {
    components: {
      toastTransition: transition
    }
  })
}

export { Toast, ToastRenderless }
export * from './module'
