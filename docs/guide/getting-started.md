# 开始使用

## 概览

只需两步即可开始使用 LPSub Fonts API:

1. 添加字体链接以请求所需的网页字体：

```css
@import url("//fonts.lpsub.com/css/sarasagothicsc.css");
```
&nbsp;&nbsp;&nbsp;或者：
```html
<link rel="stylesheet" href="//fonts.lpsub.com/css/sarasagothicsc.css" />
```

2. 在样式表中使用请求的 Web 字体设置元素的样式：

```css
.yourClassName {
  font-family: Arial, Helvetica, 'Sarasa Gothic SC', sans-serif;
}
```
&nbsp;&nbsp;&nbsp;或者在元素本身上使用内嵌样式：
```html
<div style="font-family: Arial, Helvetica, 'Sarasa Gothic SC', sans-serif;">yourText</div>
```

::: tip
注意：使用 CSS 样式指定网页字体时，请始终至少列出一个后备网络安全字体，以避免意外行为。尤其是将`serif`或`sans-serif`等 CSS 通用字体名称添加到列表末尾，以便浏览器可以在需要时回退到其默认字体。
:::

如需查看您可以使用的字体列表，请参阅 [字体文件说明](../explain/Sarasa-Gothic.md)
