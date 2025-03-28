/* 
    什么是模块？

    模块就是将js文件，独立的高度封装的一份js文件！就称作为一个模块！


    每个模块之间是相互独立的，不会相互干扰的！
    比如电脑的组装:cpu 、 显卡、 内存、机箱等等，通过各个独立的零件（模块）组成为一台完整的电脑！

    同理，一个nodejs服务器项目，也是由多个独立的模块进行组成的！形成一个完整的项目！

    模块化的优点：
        1-不会造成变量的污染问题，还提高了代码的复用性，可维护性！以及按需加载的目的！

        2-至此就可以将一个完整的项目划分成若干个模块，同时进行开发，提升开发的效率！

    nodejs中模块的分类：
        - 内置模块（由nodejs官方提供的，例如：fs、os、http等）
        - 自定义模块（由用户自己创建的单独的js文件）
        - 第三方模块(由第三方开发的模块，并非官方提供的内置模块！也不是自定义的模块，使用前必须下载！)

    
    模块化的规范：
        Commonjs语法规范：Commonjs是nodejs原生支持的模块语法！浏览器不支持
        ES6模块化规范：在ES6之前，js原生是不支持模块语法的，ES6版本才开始实现模块化思想，具备自己的模块化语法
        浏览器天生支持ES6模块化规范，高版本的nodejs也是支持的！

*/