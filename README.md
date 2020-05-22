# vue2_h5_template

> vue2.0，移动端适配手机端和第三方UI组件

## 使用流程

``` 
lib-flexible+postcss-pxtorem 来适配手机
通过修改.postcssrc.js适配第三方UI组件，设计图是多少remUnit就除10
使用vant-ui，按需加载
自己封装了上传oss文件插件
使用css预处理,scss
进行了头部导航，在路由配置填写相关信息即可，然后第三方农行app嵌入h5页面适配
可以通过打包不同的环境，测试和正式
```