import Card from './Card.vue'

// 为组件单独提供 install 安装方法，供按需引入
Card.install = function (app) {
  app.component(Card.name, Card)
}

export default Card
