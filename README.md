# openlayers and angularjs

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

| name                  | src |
| --------------------- | --- |
| aol-map               |     |
| aol-view              |     |
| aol-tile-layer        |     |
| aol-vector-layer      |     |
| aol-webgl-layer       |     |
| aol-title-xyz-source  |     |
| aol-tile-debug-source |     |
| aol-vector-source     |     |
