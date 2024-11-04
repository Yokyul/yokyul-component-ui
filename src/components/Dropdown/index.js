import Dropdown from './Dropdown.vue'

// 为组件单独提供 install 安装方法，供按需引入
Dropdown.install = function (app) {
  app.component(Dropdown.name, Dropdown)
}

export default Dropdown
