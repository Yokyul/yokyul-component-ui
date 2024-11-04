export default {
  // 卡片链接
  imgSrc: {
    type: String,
    required: true
  },
  // 卡片的描述信息
  summary: {
    type: String
  },
  // 卡片宽度
  width: {
    type: Number,
    default: 270
  },
  // 卡片高度
  imgHeight: {
    type: Number
  }
}
