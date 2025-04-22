/* 
    session简介：
        session是客户端连接服务器的一个会话，当创建与服务器的连接时，session由服务器创建的
        用于描述服务器状态的对象


    有什么用？
        用于客户端与服务器多次请求之间共享数据


    session的原理：
        浏览器访问服务器时，服务器会自动为该客户端创建一个session对象（每一个session都会有一个唯一的标识，sessionid）

        - 默认情况下sessionid会保存在浏览器的cookie中，当客户端再次访问这个服务器时，浏览器会将cookie中的sessionid发送给服务器！
        - 服务器根据客户端发送来的sessionid去寻找对应的session对象

    
    注意：
        1- session是依赖于cookie的
        2- session对象是存储在服务器端的！
        3- 默认情况下session对象是临时的！
        4- session对象所携带的数据是存储在服务器的内存中的！

        session对象是存储在服务器端的内存中的！所以session对服务器压力会很大！当访问量多的时候！


    借助第三方的模块工具操作session

    下载安装：  npm  install express-session





*/