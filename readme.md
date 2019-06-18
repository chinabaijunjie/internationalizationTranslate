＃这个我自己是用来做国际化翻译用小工具【不喜勿喷，翻译多种语言的时候会方便一些】

# 创建文件
这里你需要按照analysis中的这样创建文件

#code.js是存放文件的key值，直接写成一个对象就好

code.js

#content.js 是存放value，也就是你翻译好的内容【这里要注意内容的格式，有的翻译后的内容引号缺少或错误，请修正】

content.js

#template.js 是存放你最初始的内容，用这些内容去网页翻译成你要的语言，翻译后的放在content.js【这里的内容第一次写好之后就不要改动】

template.js

# 生成内容

在server.js文件中更改为你将要访问的文件的路径

控制台执行 node server.js

当前这里的result.js中的内容就是最新的内容，content.js内容更新了，然后重新执行了node server.js那么新内容会覆盖旧内容，不必手动删除



