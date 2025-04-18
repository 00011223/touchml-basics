/* 
    模板引擎（这里特指用于web开发的模板引擎）是为了使用户界面和业务逻辑（内容）分离而产生的一个东西


    它可以生成特定格式的文档，用于网站的模板引擎就会生成一个标准的html文档的结构！


    web页面 = html结构 + 数据

    现在将html结构与数据进行分离
    提前准备好一些固有的模板文件（模板字符串），后续向模板中传入对应的数据！实现页面动态的更新！

    注意：模板文件的结构是和标准的html文档结构是一致的！但是模板文件的后缀名并不是html
    比如：创建了一个模板，结构已经确定！但是内容是通过后续特殊的语法传入的！
    // 模板： template.jjj
    <html>
        <head></head>
        <body>
        //以下是该模板中特殊的语法
            <div> ${user.name} </div>
        </body>
    </html>

    // 数据：通过服务器从数据库中获取来的
    // 假设数据已经拿到了
    //  data = {user:{name:'张三'}}

    // 通过该模板引擎中自带的一个渲染函数，将模板和现有的数据结合起来，形成真正的html文件（html字符串）
    render(template,data){
        // 实现转换过程
        // 负责的处理逻辑
    }

    // 调用该渲染函数
    let html = render('template.jjj',data)


    // 经过render渲染后,html中存储的数据如下:
    <html>
        <head></head>
        <body>
        //以下是该模板中特殊的语法
            <div> 张三 </div>
        </body>
    </html>

    总结:以上整个过程,就是模板引擎所需要完成的事情
    模板引擎,市面上已经存在很多了!各种模板引擎之间都是大同小异,使用方式基本一致,只是各个引擎的语法有所不同

    模板引擎可以在服务端使用,形成服务端渲染模式,

    浏览器也可以使用模板引擎,通过发送ajax去服务器拿数据,在通过浏览器中模板引擎的渲染,形成了客户端渲染模式

    常见的模板引擎:
        - ejs 重点学习
        - art-template  阿里
        - pug
        .....
    ejs模板引擎是一个第三方模块,使用前必须提前下载!


    服务器端: npm install ejs
    客户端:CDN网络资源或使用下载好的本地资源

*/