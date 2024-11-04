import Tooltip from './Tooltip.vue'

// 为组件单独提供 install 安装方法，供按需引入
Tooltip.install = function (app) {
  app.component(Tooltip.name, Tooltip)
}

export default Tooltip
