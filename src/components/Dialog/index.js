import Dialog from './Dialog.vue'

// 为组件单独提供 install 安装方法，供按需引入
Dialog.install = function (app) {
  app.component(Dialog.name, Dialog)
}

export default Dialog
