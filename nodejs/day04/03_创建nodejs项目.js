/* 
    什么是nodejs项目：
        当一个目录，使用了npm init 命令创建了一个package.json文件
        我们就可以将该目录称作为nodejs项目


package.json文件解释：
{
  "name": "day04",项目名称
  "version": "1.0.0",项目版本号
  "description": "这是一个nodejs项目的演示demo", 对该项目的描述
  "main": "01_nodejs的模块化.js",项目最终导出的入口的文件
  "scripts": {  脚本
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "jiangjunjie", 作者
  "license": "ISC" 证书
}


  package-lock.json文件解释：
    该文件是npm安装相关依赖包时的版本信息（当时安装时对应模块的版本信息）,换句话说通过这份文件可以还原当时
    开发时所需要的所以模块的版本号，防止下载了其他版本的模块导致项目运行失败！
*/