# 开发指南

## 指令集合

| 指令名称              | 作用                  |
| --------------------- | --------------------- |
| aol-map               | 地图容器              |
| aol-view              | 地图视图              |
| aol-tile-layer        | tile 图层渲染         |
| aol-vector-layer      | vector 图层渲染       |
| aol-webgl-layer       | webgl 图层渲染        |
| aol-title-xyz-source  | tile 图层数据源 xyz   |
| aol-tile-debug-source | tile 图层数据源 debug |
| aol-vector-source     | vector 图层基础数据源 |

## 目录集合

```bash
├── dist                       // 构建打包生成部署文件
├── src                        // 源代码
|   |—— api                    // 接口数据
|   |   |—— index.js           // 开发接口
|   |   |—— mock.js            // 模拟数据入口
|   |   |—— mock.services.js   // 模拟数据服务
│   ├── assets                 // 静态资源
│   │   ├── content            // css资源
│   │   ├── images             // 图片资源
│   ├── components             // 项目组成组件
│   │   ├── index.js           // 组件入口
│   ├── eventHub               // 事件中心
│   ├── main.js                // 入口
├── public
│   ├── favicon.ico            // 项目图标
│   ├── index.html             // html模板
├── .babel.config.js           // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── vue.config.js              // 构建相关
└── package.json               // package.json
```
