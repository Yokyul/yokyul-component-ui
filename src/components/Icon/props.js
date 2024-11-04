export default {
  // 图标
  icon: {
    type: String,
    required: true
  },
  // 大小
  size: {
    type: String
  },
  // 颜色
  color: String,
  // 旋转
  rotation: {
    type: [Number, String]
  },
  // 翻转
  flip: {
    type: [Number, String]
  },
  // 动画相关的属性
  beat: Boolean,
  'beat-fade': Boolean,
  bounce: Boolean,
  fade: Boolean,
  shake: Boolean,
  spin: Boolean,
  'spin-reverse': Boolean,
  'spin-pulse': Boolean,
  // 自定义属性
  type: String
}
