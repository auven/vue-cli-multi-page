# vue-cli-multi-page

vue-cli 多页脚手架

## 使用

``` bash
npm install -g @vue/cli
npm install -g @vue/cli-init
vue init auven/vue-cli-multi-page my-project
# 目前 vue-cli 生成项目后会自动安装依赖，可跳过这一步
npm install
npm run dev
```

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