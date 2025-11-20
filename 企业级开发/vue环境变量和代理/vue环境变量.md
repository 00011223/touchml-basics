# vue环境变量

什么是“环境”？

提供人生活的环境称为 生存环境

那么提供给程序运行的环境就是 运行环境

在程序运行的环境中声明的变量就是环境变量

## 环境变量配置文件

```
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，最后被加载的环境变量
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，带模式的最后被加载的环境变量
```
内容
```
key=value # 内容时键值对
VUE_APP_MYPARAMS=1 # 变量名必须以VUE_APP_开头
```

除了 VUE_APP_* 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：

- NODE_ENV - 会是 "development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的模式。
- BASE_URL - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。(api服务器的路径)

## 访问环境变量

```
process.env.VUE_APP_VERSION
```

## 关于模式mode

- `development` 开发模式；声明开发模式的环境变量文件，例如: `.env.development`
- `production` 生产模式；声明生产模式的环境变量文件，例如: `.env.production`
- 自定义模式，可以声明自定义的模式下的环境变量文件，例如: `env.mymode`

## 覆写模式mode

```shell
# 默认build会使用production模式，可以使用--mode来强制切换模式
"dev-build": "vue-cli-service build --mode development"
```

## 自定义模式mode

例如我自定义一个叫 mymode 的模式
那么，我启动服务就应该像这样

```shell
vue-cli-service serve --mode mymode
```

然后我们的 `vue-cli-service` 就会去加载 `.env`、`.env.mymode`、`.env.mymode.local` 这几个环境变量配置文件
