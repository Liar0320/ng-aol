# openlayers and angularjs

> refer [https://github.com/quentin-ol/ngx-openlayers](https://github.com/quentin-ol/ngx-openlayers);

## demo

[https://liar0320.github.io/ng-aol/example.project/](https://liar0320.github.io/ng-aol/example.project/);
[https://liar0320.github.io/ng-aol/example/](https://liar0320.github.io/ng-aol/example/);

## used

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

## Depedency

- [openlayers](https://openlayers.org/) A high-performance, feature-packed library for all your mapping needs.
- [angularjs](https://angularjs.org/)

## Install

Clone the repo using Git:

```base
git clone https://github.com/Liar0320/gis.develop.git
```

Alternatively you can download this repository and then:

```base
npm i
npm run start
```

## directive

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
