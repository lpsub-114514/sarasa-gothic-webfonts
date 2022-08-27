# スタート

## 概要

LPSub Fonts API は以下の 2 つのステップだけで使い始めることができます。

1. 目的のウェブフォントをリクエストするためのスタイルシートのリンクを追加します。

```css
@import url("//fonts.lpsub.com/css/sarasa-gothic-sc.css");
```

&nbsp;&nbsp;&nbsp;又は：

```html
<link rel="stylesheet" href="//fonts.lpsub.com/css/sarasa-gothic-sc.css" />
```

2. リクエストされたウェブフォントの要素のスタイルをスタイルシート

```css
.yourClassName {
  font-family: Arial, Helvetica, 'Sarasa Gothic SC', sans-serif;
}
```

&nbsp;&nbsp;&nbsp;で設定します。<br>
&nbsp;&nbsp;&nbsp;または、要素自体にインライン スタイルを付けます。

```html
<div style="font-family: Arial, Helvetica, 'Sarasa Gothic SC', sans-serif;">yourText</div>
```

::: tip
注: CSS スタイルでウェブフォントを指定する場合は、予期しない動作を避けるため、常にウェブセーフ フォントを少なくとも 1 つリストするようにしてください。特に、`serif`や`sans-serif`のような CSS 汎用フォント名をリストの末尾に追加することで、必要に応じてブラウザはデフォルトのフォントにフォールバックできます。
:::

使用できるフォントの一覧については、[フォント ファイルの説明](../explain/Sarasa-Gothic.md) を参照してください。
