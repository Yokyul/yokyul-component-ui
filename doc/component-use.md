# Icon

根据 `<font-awesome-icon>` 组件进行二次封装。

## prop

| 属性名       | 作用             | 类型             | 是否必须 | 默认值 |
| ------------ | ---------------- | ---------------- | -------- | ------ |
| icon         | 设置图标         | String           | 是       | 无     |
| size         | 图标大小         | String           | 否       | 无     |
| rotation     | 旋转             | [String, Number] | 否       | 无     |
| flip         | 翻转             | [String, Number] | 否       | 无     |
| beat         | beat动画         | Boolean          | 否       | 无     |
| beat-fade    | beat-fade动画    | Boolean          | 否       | 无     |
| bounce       | bounce动画       | Boolean          | 否       | 无     |
| fade         | fade动画         | Boolean          | 否       | 无     |
| shake        | shake动画        | Boolean          | 否       | 无     |
| spin         | spin动画         | Boolean          | 否       | 无     |
| spin-reverse | spin-reverse动画 | Boolean          | 否       | 无     |
| spin-pulse   | spin-pulse动画   | Boolean          | 否       | 无     |
| color        | 自定义颜色       | String           | 否       | 无     |
| type         | 主题类型         | String           | 否       | 无     |

icon 到 color 之间的属性是 `<font-awesome-icon>` 组件本身支持的。
type 属性 `<font-awesome-icon>` 组件不支持。

# Avatar

## prop

| 属性名 | 作用                 | 类型   | 是否必须 | 默认值 |
| ------ | -------------------- | ------ | -------- | ------ |
| url    | 图片链接             | String | 否       | 无     |
| size   | 大小                 | String | 否       | 50     |
| shape  | 形状                 | String | 否       | circle |
| icon   | 图标                 | String | 否       | 无     |
| fit    | 图片在容器中如何展示 | String | 否       | cover  |

## slot

| 插槽名  | 作用       |
| ------- | ---------- |
| default | 自定义头像 |

# Button

## prop

| 属性名   | 作用       | 类型    | 是否必须 | 默认值  |
| -------- | ---------- | ------- | -------- | ------- |
| type     | 主题颜色   | String  | 否       | default |
| size     | 大小       | String  | 否       | 无      |
| plain    | 是否朴素   | Boolean | 否       | false   |
| round    | 是否圆角   | Boolean | 否       | false   |
| circle   | 是否圆形   | Boolean | 否       | false   |
| disabled | 是否禁用   | Boolean | 否       | false   |
| loading  | 是否加载中 | Boolean | 否       | false   |
| icon     | 图标       | String  | 否       | 无      |

## event

| 事件名 | 作用     |
| ------ | -------- |
| click  | 点击事件 |

## ref

获取 button 根 DOM 元素

# Card

## prop

| 属性名    | 作用     | 类型   | 是否必须 | 默认值 |
| --------- | -------- | ------ | -------- | ------ |
| width     | 卡片宽度 | Number | 否       | 270    |
| imgSrc    | 卡片链接 | String | 是       | 无     |
| imgHeight | 图片高度 | Number | 否       | 无     |
| summary   | 卡片摘要 | String | 否       | 无     |

## slot

| 插槽名  | 作用           |
| ------- | -------------- |
| default | 自定义卡片摘要 |
| footer  | 自定义底部信息 |

# Dialog

## prop

| 属性名  | 作用           | 类型    | 是否必填 | 默认值 |
| ------- | -------------- | ------- | -------- | ------ |
| title   | 标题           | String  | 否       | "提示" |
| width   | 宽度           | String  | 否       | 50%    |
| top     | 距离上方的距离 | String  | 否       | 15vh   |
| visible | 是否可见       | Boolean | 否       | false  |

## event

| 事件名 | 作用       |
| ------ | ---------- |
| close  | 关闭对话框 |

## slot

| 插槽名  | 作用           |
| ------- | -------------- |
| default | 自定义内容区   |
| footer  | 自定义底部信息 |

# Pager

## prop

| 属性名      | 作用       | 类型   | 是否必须 | 默认值 |
| ----------- | ---------- | ------ | -------- | ------ |
| total       | 总页码数   | Number | 否       | 0      |
| currentPage | 当前页码数 | Number | 否       | 1      |
| pageCount   | 页码最大数 | Number | 否       | 10     |
| type        | 主题类型   | String | 否       | 无     |
| size        | 大小       | String | 否       | 无     |

## event

| 事件名         | 作用           |
| -------------- | -------------- |
| current-change | 改变当前的页数 |

# Collapse

## prop

**Collapse** 对应的属性

| 属性名     | 作用                      | 类型    | 是否必填 | 默认值 |
| ---------- | ------------------------- | ------- | -------- | ------ |
| modelValue | 获取父组件v-model绑定的值 | Array   | 否       | [ ]    |
| accordion  | 是否开启手风琴模式        | Boolean | 否       | false  |

**CollapseItem** 对应的属性

| 属性名   | 作用     | 类型    | 是否必填 | 默认值 |
| -------- | -------- | ------- | -------- | ------ |
| name     | 标题     | String  | 是       | 无     |
| title    | 标题     | String  | 否       | 无     |
| disabled | 是否禁用 | Boolean | 否       | false  |

## event

**Collapse** 对应的事件

| 事件名 | 作用                   |
| ------ | ---------------------- |
| change | 折叠面板发生改变时触发 |

## slot

**Collapse** 对应的插槽

| 插槽名  | 作用       |
| ------- | ---------- |
| default | 自定义子项 |

**CollapseItem** 对应的插槽

| 插槽名  | 作用         |
| ------- | ------------ |
| title   | 自定义标题   |
| default | 自定义内容区 |

# Tooltip

## prop

| 属性名     | 作用       | 类型    | 是否必须 | 默认值 |
| ---------- | ---------- | ------- | -------- | ------ |
| content    | 提示内容   | String  | 否       | 无     |
| trigger    | 触发方式   | String  | 否       | hover  |
| placement  | 出现位置   | String  | 否       | left   |
| manual     | 自定义触发 | Boolean | 否       | false  |
| openDelay  | 延时打开   | Number  | 否       | 100    |
| closeDelay | 延时关闭   | Number  | 否       | 100    |

## event

| 事件名         | 作用         |
| -------------- | ------------ |
| visible-change | 提示是否显示 |

## slot

| 插槽名  | 作用           |
| ------- | -------------- |
| default | 自定义触发元素 |
| content | 自定义提示框   |

# Dropdown

## prop

| 属性名          | 作用                | 类型    | 是否必须 | 默认值 |
| --------------- | ------------------- | ------- | -------- | ------ |
| tooltip所有属性 | 继承tooltip所有属性 | /       | /        | /      |
| menuOptions     | 下拉内容条目数组    | Array   | 是       | 无     |
| hideAfterClick  | 点击条目后隐藏      | Boolean | 否       | false  |

## event

| 事件名           | 作用                   |
| ---------------- | ---------------------- |
| _visible-change_ | 显示状态改变后触发     |
| _select_         | 选择了具体的某一个项目 |
