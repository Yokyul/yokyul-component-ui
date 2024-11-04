export default {
  content: {
    type: String
  },
  placement: {
    type: String,
    default: 'left'
  },
  // 触发方式
  trigger: {
    type: String,
    default: 'hover'
  },
  // 手动触发
  manual: {
    type: Boolean,
    default: false
  },
  openDelay: {
    type: Number,
    default: 100
  },
  closeDelay: {
    type: Number,
    default: 100
  }
}

