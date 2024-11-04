import Icon from './Icon.vue'

// 为组件单独提供 install 安装方法，供按需引入
Icon.install = function (app) {
  app.component(Icon.name, Icon)
}

export default Icon
