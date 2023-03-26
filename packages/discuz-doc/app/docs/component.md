# Discuz-design

DiscuzQ 基础组件库

smart & powerful

## 安装
```
npm i @discuzqfe/design -S
```

## 引用

### 全量引用
```
import { Button } from '@discuzqfe/design';
import '@discuzqfe/design/dist/styles/index.scss';
```

### 按需组件引用
```
import Button from '@discuzqfe/design/dist/components/button';
import '@discuzqfe/design/dist/components/button/styles/index.scss';
```

### babel 按需引用插件支持

需要在项目中安装按需引用 babel 插件

```
npm i @discuzqfe/discuz-babel-plugin-import --save
```

在 web 项目的 .babelrc 文件中配置如下

```
plugins: [
    [
      "@discuzqfe/discuz-babel-plugin-import",
      {
        "libraryName": "@discuzqfe/design",
        "libraryDirectory": "dist/components"
      }
    ]
]
```

在 小程序 项目的 .babelrc 文件中配置如下

```
plugins: [
    [
      "@discuzqfe/discuz-babel-plugin-import",
      {
        "libraryName": "@discuzqfe/design",
        "libraryDirectory": "dist-pure/components"
      }
    ]
]
```