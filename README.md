<p align="center">
  <img width="150px" src="./yc.png" alt="icon" />
</p>

# Introduce

> 基于 vue3 + vite + sass 开发的组件库。

目前包含如下组件：
```js
- Icon
- Avatar
- Button
- Card
- Dialog
- Pager
- Collapse
- Tooltip
- Dropdown
```

# Getting Started

1. **全量导入**

```js
import YCUI from "yokyul-component-ui"
import "yokyul-component-ui/style.css"

app.use(YCUI)
```

2. **按需导入**

```js
import { YCIcon, YCAvatar, YCButton, YCCard, YCCollapse, YCCollapseItem, YCDialog, YCDropdown, YCTooltip, YCPager } from "yokyul-component-ui"
import "yokyul-component-ui/style.css"

app.use(YCIcon).use(YCAvatar).use(YCButton).use(YCCard).use(YCCollapse).use(YCCollapseItem).use(YCDialog).use(YCDropdown).use(YCTooltip).use(YCPager)
```

3. **组件使用说明**

[见此](./doc/component-use.md)。


# License

Yokyul Component UI 基于 [MIT](./LICENSE) 开源。
