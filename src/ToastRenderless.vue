<script>
import { REMOVE_TOAST_MESSAGE } from './module'

export default {
  props: {
    position: {
      validator(value) {
        return /^(:?n|s|nw|ne|sw|se)$/.test(value)
      },
      default: 'ne'
    },

    namespace: {
      type: String,
      default: ''
    },

    html: Boolean
  },

  computed: {
    messages() {
      return this.$store.getters[this.normalizedNamespace + 'toastMessages']
    },

    positionClass() {
      return `toast-position-${this.position}`
    },

    normalizedNamespace() {
      if (this.namespace === '') {
        return ''
      }

      if (!/\/$/.test(this.namespace)) {
        return this.namespace + '/'
      }

      return this.namespace
    }
  },

  methods: {
    close(id) {
      this.$store.dispatch(
        this.normalizedNamespace + REMOVE_TOAST_MESSAGE,
        id
      )
    },

    messageTypeClass(message) {
      return `toast-type-${message.type}`
    }
  },

  render(){
  	return this.$scopedSlots.default({
  		messages: this.messages,
  		close: this.close
  	})
  }
}
</script>
