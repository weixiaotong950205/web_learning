# web_learning
code of Self-learning Web-design 

 including:HTML5,CSS3 style design,Javascript,Jquery, 
           responsive website design,
           integrated framework-BootStrap(HTML5+CSS3+js),Node.js;Angular.js; 
           PC website design, a project: mobile website development



★Sublime相关问题：

![image](https://github.com/weixiaotong950205/web_learning/blob/master/images/1.png)
 
•添加注释：ctrl+/
•如何开启Vim/emmet放入到sublime插件包内：安装相应的插件：shift+ctrl+p—install-输入相应的插件；
![image](https://github.com/weixiaotong950205/web_learning/blob/master/images/2.png) ![image](https://github.com/weixiaotong950205/web_learning/blob/master/images/3.png)
   
•开启vi编辑器：Preferces-setting-user-‘ignored_packing’内的字符去掉；
•打开文件发现变成了.dump格式且无法编辑，卸掉GBKSupport插件，安装ConvertToUTF8插件；
•自动补全(!+tab)：安装sshtml;出现则说明emmet插件安装成功；
•快捷键打开浏览器：install-SideBarEnhancements;  preferences-Key binding users-添加上{ "keys": ["ctrl+shift+c"], "command": "open_in_browser" },
•当中文出现乱码：保存编码为utf-8格式：file - save file encoding to – UTF-8
•输入注册码：help-Enter license 


相关：
![image](https://github.com/weixiaotong950205/web_learning/blob/master/images/4.png)
 
 
 
★HTML5：网站基本结构、页面标签；
 CSS3:包装装饰页面标签、网页样式；
 Js:特效开发(动态)
•<p>自动换行
 <span>行标签--（不能文本对齐）要对块标签进行设置；
 <div>块标签
•js特效：1.绑定事件 2.事件触发 3.样式改变 4.属性改变
•类-添加样式：.second{}
 Id-添加样式：#second{}
•表单：type=’radio’(圆圈里面一个点)单选
       type=’checkbox’(方块里面是对号)多选




★jQuery框架：视频课用1.11.3—自己用的1.12.4(升级版)
           商业：minified-压缩版；做研究：unminified-未压缩版；
•Jquery核心：通过CSS选择符查询DOM文档取得元素的引用；抛开了getElementById()和getElementByTagName();
•jquery学习大纲：1.核心函数；2.选择器：基础选择器、基本选择器、属性选择器、子元素选择器；3.筛选：过滤、查找、串联；4.属性；5.文档处理：内部插入、外部插入、复制、包裹；6.CSS；7.事件：页面插入、事件处理、事件切换、事件委派、事件类型；8.效果：基本、滑入、淡入淡出、自定义动画；9.Ajax；10.工具；11.四个扩展实例；表单验证、城市级联、拖动图片、轮播图(幻灯片放映)




★BootStrap版本：3.3.7—商用：bootstrap.min.css;  学习：bootstrap.css
(最受欢迎的HTML、CSS和JS框架，用于开发响应式布局，移动设备优先的web项目；)    视频课版本：3.3.5
BootStrap是基于jquery写的，要将jquery库放入到BootStrap/bs/js文件内；
程序要先加载BootStrap和jquery
![image](https://github.com/weixiaotong950205/web_learning/blob/master/images/5.png)
 
BootStrap学习大纲：1.全局CSS样式；2.组件；3.javascript插件

•工具提示tooltip，要有初始化的过程，否则达不到提示框在上下左右的效果；
    $(function(){$('[data-toggle="tooltip"]').tooltip()})
    
•部分替换：ctrl+h  选中‘in selection’按钮；再替换内容即可





★响应式网站设计：（简单的栈，适用于不同设备的屏幕）

   •学习大纲：1）media query技术
            2）响应式网站设计实例
            3）bs结合响应式网站设计完成小动漫项目
       
•相关：

![image](https://github.com/weixiaotong950205/web_learning/blob/master/images/IMG_7675.PNG)

![image](https://github.com/weixiaotong950205/web_learning/blob/master/images/IMG_7676.PNG)

![image](https://github.com/weixiaotong950205/web_learning/blob/master/images/20190404174337.png)

    <meta name="viewport" content="width=device-width, initial-scale=1"><!-- 响应式设计-移动设备优先~~不要识别手机的分辨率，而识别手机的宽度； -->




★Nodejs前端框架（实际是后端语言）

★官方手册：nodejs.org

•版本：视频课：node-v6.9.1 LTS-x86;自用：10.15.3 LTS(稳定版本);

  测试下环境：windows+r---cmd---node -v  --> v10.15.3;  npm -v  --> 6.4.1;  交互式环境；
  
  输出用console.log()
  
  还是用sublime编译器；
  
•![image]()

