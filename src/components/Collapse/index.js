import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'

// 为组件单独提供 install 安装方法，供按需引入
Collapse.install = function (app) {
  app.component(Collapse.name, Collapse)
}

CollapseItem.install = function (app) {
  app.component(CollapseItem.name, CollapseItem)
}

export { Collapse, CollapseItem }
