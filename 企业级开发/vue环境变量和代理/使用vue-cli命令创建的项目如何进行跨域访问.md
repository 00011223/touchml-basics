# 使用vue-cli命令创建的项目如何进行跨域访问

首先要理解什么是跨域问题？

假设浏览器上访问页面的地址为 `http://localhost/`

假设服务器地址为 `http://127.0.0.1`

那么页面通过 `ajax` 访问服务器时，就从 `http://localhost/` 这个域访问了 `http://127.0.0.1` 另一个域

这种行为叫跨域访问

浏览器有个安全策略，不允许页面直接进行跨域访问，当遇到此类问题，我们有几种方法可以解决，此处以vue-cli命令行工具创建的项目为例，来解决跨域问题

## 通过vue-cli创建反向代理

官网：https://cli.vuejs.org/zh/config/#devserver-proxy

该方法仅限于在开发阶段使用，正式上线时，应当将项目 `build` 后放到服务器上运行，避免跨域

创建代理方法：

- 在项目根目录下，创建 `vue.config.js` 文件，内容如下
  ```js
  module.exports = {
      devServer: {
          // proxy 配置可以直接输入一个url，这样的话所有的请求都会发送到该地址
          // proxy: 'http://127.0.0.1:1024',
          // 也可以进行更多的细节配置
          proxy: {
              // 配置url前缀对应不通的服务器路径
              '/api': {
                  target: 'http://127.0.0.1',
                  // 使用rewrite配置，可以将访问路径重写
                  // 此处的配置含义是：将访问路径中的 /api 去掉
                  pathRewrite: { '^/api': '' },
                  // ws: true,
                  // changeOrigin: true
              },
          }
      }
  }
  ```

- 然后页面请求时，直接访问开发服务器，如下：

  ```js
  // 使用相对路径，访问开发服务器
  // url中需要添加我们自定义的前缀，比如此处的 /api
  axios.post('/api/list').then(r => {
      console.log(r)
  })
  ```

> 注意：若没有访问成功，有可能是开发服务器没有重启，所以重启项目再试试
