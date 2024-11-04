import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入项目示例样式
import './assets/scss/global.scss'

// 引入组件库样式
import './styles/index.scss'

// 引入自定义组件
import YCIcon from '@/components/Icon/Icon.vue'
import YCAvatar from '@/components/Avatar/Avatar.vue'
import YCButton from '@/components/Button/Button.vue'
import YCCard from '@/components/Card/Card.vue'
import YCDialog from '@/components/Dialog/Dialog.vue'
import YCPager from '@/components/Pager/Pager.vue'
import YCCollapse from '@/components/Collapse/Collapse.vue'
import YCCollapseItem from '@/components/Collapse/CollapseItem.vue'
import YCTooltip from '@/components/Tooltip/Tooltip.vue'
import YCDropdown from '@/components/Dropdown/Dropdown.vue'

const app = createApp(App)

// 注册自定义组件
app.component('YCIcon', YCIcon)
app.component('YCAvatar', YCAvatar)
app.component('YCButton', YCButton)
app.component('YCCard', YCCard)
app.component('YCDialog', YCDialog)
app.component('YCPager', YCPager)
app.component('YCCollapse', YCCollapse)
app.component('YCCollapseItem', YCCollapseItem)
app.component('YCTooltip', YCTooltip)
app.component('YCDropdown', YCDropdown)

app.use(router)

app.mount('#app')
