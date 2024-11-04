import Button from './Button.vue'

// 为组件单独提供 install 安装方法，供按需引入
Button.install = function (app) {
  app.component(Button.name, Button)
}

export default Button
