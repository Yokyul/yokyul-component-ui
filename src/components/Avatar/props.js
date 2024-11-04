export default {
  url: {
    type: String
  },
  size: {
    type: Number,
    default: 50
  },
  // 形状 circle/square
  shape: {
    type: String,
    default: 'circle'
  },
  // 图标类型
  icon: {
    type: String
  },
  // 与 object-fit 属性一致
  fit: {
    type: String,
    default: 'cover'
  }
}
