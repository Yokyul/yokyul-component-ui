import Avatar from './Avatar.vue'

// 为组件单独提供 install 安装方法，供按需引入
Avatar.install = function (app) {
  app.component(Avatar.name, Avatar)
}

export default Avatar
