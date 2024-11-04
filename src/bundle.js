// 引入组件库样式
import './styles/index.scss'

// 引入自定义组件
import YCIcon from '@/components/Icon'
import YCAvatar from '@/components/Avatar'
import YCButton from '@/components/Button'
import YCCard from '@/components/Card'
import YCDialog from '@/components/Dialog'
import YCPager from '@/components/Pager'
import { Collapse as YCCollapse, CollapseItem as YCCollapseItem } from '@/components/Collapse'
import YCTooltip from '@/components/Tooltip'
import YCDropdown from '@/components/Dropdown'

// 由于是将组件库打包成 vue 的一个插件，所以需要提供 install 方法。
const install = (app) => {
  // 遍历注册所有的ui组件
  const componentsArr = [
    YCIcon,
    YCAvatar,
    YCButton,
    YCCard,
    YCDialog,
    YCPager,
    YCCollapse,
    YCCollapseItem,
    YCTooltip,
    YCDropdown
  ]
  componentsArr.forEach((component) => {
    app.component(component.name, component)
  })
}

// 导出。分为两种：全部导出和按需导出
// 1 全部导出
export default {
  install
}
/**
 * 2 按需导出。
 * - 需要在 src/components/对应组件添加 index.js 文件，同时在该文件中提供install方法。
 * - 此时引入自定义组件时，就不需要引入vue组件，而是引入index.js就可以。
 * - 具体参考Button组件。
 */
export {
  install,
  YCIcon,
  YCAvatar,
  YCButton,
  YCCard,
  YCDialog,
  YCPager,
  YCCollapse,
  YCCollapseItem,
  YCTooltip,
  YCDropdown
}
