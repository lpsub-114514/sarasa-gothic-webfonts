# スタート

## 概要

たった2ステップで LPSub Fonts API を使い始めることができます：

1. 必要な Web フォントを要求するためのフォントリンクを追加します：

```css
@import url("//fonts.lpsub.com/css/sarasa-gothic-sc.css");
```

&nbsp;&nbsp;&nbsp;又は：

```html
<link rel="stylesheet" href="//fonts.lpsub.com/css/sarasa-gothic-sc.css" />
```

2. スタイルシートで要求された Web フォントで要素をスタイルします：

```css
.yourClassName {
  font-family: Arial, Helvetica, 'Sarasa Gothic SC', sans-serif;
}
```

&nbsp;&nbsp;&nbsp;または、要素自体にインラインスタイルを使用します：

```html
<div style="font-family: Arial, Helvetica, 'Sarasa Gothic SC', sans-serif;">yourText</div>
```

::: tip
注意: CSSスタイルを使ってウェブフォントを指定する場合、予期せぬ動作を避けるために、常に少なくとも1つのフォールバックウェブセーフフォントをリストアップしてください。特に、`serif` や `sans-serif` のようなCSS一般フォント名をリストの最後に追加して、必要に応じてブラウザがデフォルトのフォントにフォールバックできるようにします。
:::

使用できるフォントの一覧については、[フォント ファイルの説明](../explain/Sarasa-Gothic.md) を参照してください。
