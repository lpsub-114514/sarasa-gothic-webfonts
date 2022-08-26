# Getting Started

## Overview

たった2ステップで LPSub Fonts API を使い始めることができます：

1. Add a font link to request the required web font:

```css
@import url("//fonts.lpsub.com/css/sarasa-gothic-sc.css");
```

&nbsp;&nbsp;&nbsp;or:

```html
<link rel="stylesheet" href="//fonts.lpsub.com/css/sarasa-gothic-sc.css" />
```

2. Style the element with the requested Web font in the stylesheet:

```css
.yourClassName {
  font-family: Arial, Helvetica, 'Sarasa Gothic SC', sans-serif;
}
```

&nbsp;&nbsp;&nbsp;Or use an inline style on the element itself:

```html
<div style="font-family: Arial, Helvetica, 'Sarasa Gothic SC', sans-serif;">yourText</div>
```

::: tip
Note: When specifying web fonts using CSS styles, always list at least one fallback web-safe font to avoid unexpected behavior. In particular add CSS generic font names like `serif` or `sans-serif` to the end of the list so that browsers can fall back to their default fonts if needed.
:::

For a list of fonts you can use, see [Font File Description](../explain/Sarasa-Gothic.md)
