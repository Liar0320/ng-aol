# openlayers and angularjs

> refer [https://github.com/quentin-ol/ngx-openlayers](https://github.com/quentin-ol/ngx-openlayers);

## 案例

[https://liar0320.github.io/ng-aol/example.project/](https://liar0320.github.io/ng-aol/example.project/)

[https://liar0320.github.io/ng-aol/example/](https://liar0320.github.io/ng-aol/example/)

## 使用

```html
<aol-map class="map">
  <aol-view zoom="8">
    <aol-coordinate x="122" y="24"></aol-coordinate>
  </aol-view>
  <aol-layer-tile>
    <aol-source-osm></aol-source-osm>
  </aol-layer-tile>
  <aol-interaction-defaults
    double-click-zoom="false"
    mouse-wheel-zoom="true"
  ></aol-interaction-defaults>
</aol-map>
```

## 主要依赖

- [openlayers](https://openlayers.org/) A high-performance, feature-packed library for all your mapping needs.
- [angularjs](https://angularjs.org/)

## 安装

Clone the repo using Git:

```base
git clone https://github.com/Liar0320/gis.develop.git
```

Alternatively you can download this repository and then:

```base
npm i
npm run start
```

## 打包

此处拆分 webgl 模块 因为没有找到好的引入方式 打包体积会翻倍增长

```base
npm run build #打包当前项目
npm run core  #ngol模块不包含webgl
npm run all   #打包ngol全部ngol模块
```

## 指令

| name                        | src |
| --------------------------- | --- |
| aol-map                     |     |
| aol-view                    |     |
| aol-coordinate              |     |
| aol-collection-coordinates  |     |
| aol-layer-group             |     |
| aol-layer-tile              |     |
| aol-layer-vector            |     |
| aol-layer-webgl             |     |
| aol-source-osm              |     |
| aol-source-tiledebug        |     |
| aol-source-vector           |     |
| aol-source-cluster          |     |
| aol-feature                 |     |
| aol-geometry-point          |     |
| aol-geometry-linestring     |     |
| aol-geometry-polygon        |     |
| aol-overlay                 |     |
| aol-style                   |     |
| aol-style-circle            |     |
| aol-style-icon              |     |
| aol-style-fill              |     |
| aol-style-stroke            |     |
| aol-style-text              |     |
| aol-interaction-default     |     |
| aol-interaction-select      |     |
| aol-interaction-draw        |     |
| aol-interaction-modify      |     |
| aol-interaction-draganddrop |     |
