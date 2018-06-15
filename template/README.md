# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 运行

`npm run dev` 会自动打开浏览器访问 `http://localhost:8080/pages/index/index.html` ，如果想自动打开其他页面，可以修改 `config/index.js` 里的 `dev.openPage` 。

## 开发说明

`src` 必须要有一个 `pages` 文件夹，`webapck` 会遍历 `pages` 文件夹里的 `xx.main.js` 作为页面入口。

如果要指定 `index.html` 模板，可以在 `xxx.main.js` 同级创建一个 `xxx.html` 文件，打包的时候则会以它为模板输出 `html` ，默认是以根目录下的 `index.html` 作为模板。

模板里内置了 [vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate) ，将 `vuex` 实时写进 `localStorage` 里，实现多页面的数据共享。

## 项目结构

```
src
├── assets
│   └── logo.png
├── components
│   ├── HelloWorld.vue
│   ├── RouterTest1.vue
│   └── RouterTest2.vue
├── pages                           // webpack 会遍历这个文件夹里的 `xx.main.js` 作为页面入口
│   ├── counter
│   │   ├── App.vue
│   │   ├── counter.html            // 可以在 xx.main.js 同级创建其 html 模板文件
│   │   └── counter.main.js         // 页面入口文件，输出 /pages/counter/counter.html
│   ├── home
│   │   ├── App.vue
│   │   └── home.main.js            // 页面入口文件，输出 /pages/home/home.html
│   └── index
│       ├── App.vue
│       ├── index.main.js           // 页面入口文件，输出 /pages/index/index.html
│       └── router
│           └── index.js
└── store
    └── index.js
```
