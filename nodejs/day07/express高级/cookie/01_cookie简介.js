/* 

    cookie：
    HTTP协议是一种无状态协议，每次服务器端接受到客户端的请求时，在服务器看来都是一个全新的请求！
    因为http协议是无状态的！所以服务器不知道你是谁！

    基于这个http协议的该特性，导致很多数据是无法共享！或者无法长时间保存的！

    cookie，它是存储在本地的！浏览器中！是一种浏览器的状态管理工具！


    服务器要操作cookie,要通过一些工具

    cookie-parser

    下载: npm install cookie-parser

    cookie的特点：
        - 存储指定url路径下的参数，以 key：value  键值对的形式存储客户端
        - cookie的设置可以由服务器来设置

        - cookie具有时效性，时间到期后，浏览器会自动删除cookie中的数据

        - 每次浏览器发起请求时，如果请求的该地址中保存了cookie,那么浏览器会自动的将cookie通过请求发送给服务器

        - 客户端在访问一个全新的网站地址时，它的第一次访问是没有cookie

    cookie的限制：
        - 用户可以禁止cookie
        - 用户可以删除cookie
        - cookie不安全
        - cookie能存储的数据大小是有限的，大概是4k左右
        - cookie个数是有限的不能超过300个
*/


