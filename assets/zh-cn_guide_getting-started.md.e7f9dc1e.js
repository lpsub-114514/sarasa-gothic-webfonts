import{_ as s,o as a,c as n,k as l}from"./app.1097d953.js";const u=JSON.parse('{"title":"\u5F00\u59CB\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u89C8","slug":"\u6982\u89C8"}],"relativePath":"zh-cn/guide/getting-started.md"}'),o={name:"zh-cn/guide/getting-started.md"},p=l(`<h1 id="\u5F00\u59CB\u4F7F\u7528" tabindex="-1">\u5F00\u59CB\u4F7F\u7528 <a class="header-anchor" href="#\u5F00\u59CB\u4F7F\u7528" aria-hidden="true">#</a></h1><h2 id="\u6982\u89C8" tabindex="-1">\u6982\u89C8 <a class="header-anchor" href="#\u6982\u89C8" aria-hidden="true">#</a></h2><p>\u53EA\u9700\u4E24\u6B65\u5373\u53EF\u5F00\u59CB\u4F7F\u7528 LPSub Fonts API:</p><ol><li>\u6DFB\u52A0\u5B57\u4F53\u94FE\u63A5\u4EE5\u8BF7\u6C42\u6240\u9700\u7684\u7F51\u9875\u5B57\u4F53\uFF1A</li></ol><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//fonts.lpsub.com/css/sarasa-gothic-sc.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>\xA0\xA0\xA0\u6216\u8005\uFF1A</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//fonts.lpsub.com/css/sarasa-gothic-sc.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u5728\u6837\u5F0F\u8868\u4E2D\u4F7F\u7528\u8BF7\u6C42\u7684 Web \u5B57\u4F53\u8BBE\u7F6E\u5143\u7D20\u7684\u6837\u5F0F\uFF1A</li></ol><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">yourClassName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Arial</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Helvetica</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Sarasa Gothic SC</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sans-serif</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\xA0\xA0\xA0\u6216\u8005\u5728\u5143\u7D20\u672C\u8EAB\u4E0A\u4F7F\u7528\u5185\u5D4C\u6837\u5F0F\uFF1A</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">font-family: Arial, Helvetica, &#39;Sarasa Gothic SC&#39;, sans-serif;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">yourText</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6CE8\u610F\uFF1A\u4F7F\u7528 CSS \u6837\u5F0F\u6307\u5B9A\u7F51\u9875\u5B57\u4F53\u65F6\uFF0C\u8BF7\u59CB\u7EC8\u81F3\u5C11\u5217\u51FA\u4E00\u4E2A\u540E\u5907\u7F51\u7EDC\u5B89\u5168\u5B57\u4F53\uFF0C\u4EE5\u907F\u514D\u610F\u5916\u884C\u4E3A\u3002\u5C24\u5176\u662F\u5C06<code>serif</code>\u6216<code>sans-serif</code>\u7B49 CSS \u901A\u7528\u5B57\u4F53\u540D\u79F0\u6DFB\u52A0\u5230\u5217\u8868\u672B\u5C3E\uFF0C\u4EE5\u4FBF\u6D4F\u89C8\u5668\u53EF\u4EE5\u5728\u9700\u8981\u65F6\u56DE\u9000\u5230\u5176\u9ED8\u8BA4\u5B57\u4F53\u3002</p></div><p>\u5982\u9700\u67E5\u770B\u60A8\u53EF\u4EE5\u4F7F\u7528\u7684\u5B57\u4F53\u5217\u8868\uFF0C\u8BF7\u53C2\u9605 <a href="./../explain/Sarasa-Gothic">\u5B57\u4F53\u6587\u4EF6\u8BF4\u660E</a></p>`,13),e=[p];function t(c,r,D,F,i,y){return a(),n("div",null,e)}const C=s(o,[["render",t]]);export{u as __pageData,C as default};
