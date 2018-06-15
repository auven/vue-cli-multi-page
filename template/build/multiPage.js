'use strict'
const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

exports.getEntry = () => {
  const rootSrc = resolve('src')
  const pattern = 'pages/**/*.main.js'
  let files = glob.sync(path.resolve(rootSrc, pattern))
  return files.reduce((res, file) => {
    var info = path.parse(file)
    var key = info.dir.slice(rootSrc.length + 1) + '/' + info.name.replace('.main', '')
    res[key] = path.resolve(file)
    return res
  }, {})
}

exports.createHtmlWebpackPlugin = (publicModule) => {
  let entry = exports.getEntry()
  let entries = Object.keys(entry)
  let plugins = []
  let conf
  publicModule = publicModule || []

  entries.forEach(key => {
    let template
    if (fs.existsSync(entry[key].replace('.main.js', '.html'))) {
      template = './src/' + key + '.html'
    } else {
      template = 'index.html'
    }
    conf = {
      template,
      filename: key + '.html',
      inject: true,
      chunks: key ? [key] : []
    }
    if (process.env.NODE_ENV !== 'development') {
      conf.chunksSortMode = 'dependency'
      conf.minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
      // 在构建生产环境时，需要指定共用模块
      conf.chunks = [...publicModule, ...conf.chunks]
    }

    plugins.push(new HtmlWebpackPlugin(conf))
  })
  return plugins
}
