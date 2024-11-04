import Pager from './Pager.vue'

// 为组件单独提供 install 安装方法，供按需引入
Pager.install = function (app) {
  app.component(Pager.name, Pager)
}

export default Pager
