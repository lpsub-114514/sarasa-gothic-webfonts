# 開始使用

## 概覽

只需兩步即可開始使用 LPSub Fonts API:

1. 添加字體鏈接以請求所需的網頁字體：

```css
@import url("//fonts.lpsub.com/css/sarasa-gothic-sc.css");
```

&nbsp;&nbsp;&nbsp;或者：

```html
<link rel="stylesheet" href="//fonts.lpsub.com/css/sarasa-gothic-sc.css" />
```

2. 在樣式表中使用請求的 Web 字體設置元素的樣式：

```css
.yourClassName {
  font-family: Arial, Helvetica, 'Sarasa Gothic SC', sans-serif;
}
```

&nbsp;&nbsp;&nbsp;或者在元素本身上使用內嵌樣式：

```html
<div style="font-family: Arial, Helvetica, 'Sarasa Gothic SC', sans-serif;">yourText</div>
```

::: tip
注意：使用 CSS 樣式指定網頁字體時，請始終至少列出一個後備網路安全字體，以避免意外行為。尤其是將`serif`或`sans-serif`等 CSS 通用字體名稱添加到列表末尾，以便瀏覽器可以在需要時回退到其默認字體。
:::

如需查看您可以使用的字體列表，請參閱 [字體文件說明](../explain/Sarasa-Gothic.md)
