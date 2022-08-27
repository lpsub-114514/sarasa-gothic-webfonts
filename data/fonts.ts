export const showSimplifiedChinese = ['SC', 'CN']
export const showTraditionalChinese = ['HC', 'TC', 'TW', 'HK', 'CL']
export const showJapanese = ['JP', 'J']
export const ignoreArea = ['-cn', '-hk', '-jp', '-tw']
export const examples = {
  japanese: '「河上徹太郎は言った『人は歳とともに澄んでゆくものである。』わたしもそう思います。」',
  simplifiedChinese: '“河上彻太郎曰：‘人生随着岁月而日渐澄明透彻。’我也是这么认为的。”',
  traditionalChinese: '「河上徹太郎曰：『人生隨著歲月而日漸澄明透徹。』我也是這麼認為的。」',
}

export const noticeTexts = {
  'en': {
    example: 'Example',
    fontSelection: 'Font Selection',
    fontStyleSelection: 'Font Style Selection (font-style in css)',
    fontWeightSelection: 'Font Weight Selection (font-weight in css)',
    explanation: 'Explanation',
    format: 'Format',
    formatDetail: '<font style><region><font weight><additional options>.css',
    fontStyle: 'Font Style',
    area: 'Region',
    fontWeight: 'Font Weight',
    italic: 'Additional Options',
    FAQ: [{
        question: 'Why are there subset CSS files?',
        answer: 'Because the complete single CSS file is relatively large, the largest one is 1.1MB, so the subsetted CSS files and CSS files without italics are given.',
      },
    ],
  },

  'zh-cn': {
    example: '示例',
    fontSelection: '字体选择',
    fontStyleSelection: '字形选择 (css 中的 font-style)',
    fontWeightSelection: '字重选择 (css 中的 font-weight)',
    explanation: '说明',
    format: '格式',
    formatDetail: '<字体样式><地区><字重><附加选项>.css',
    fontStyle: '字体样式',
    area: '地区',
    fontWeight: '字重',
    italic: '附加选项',
    FAQ: [
      {
        question: '为什么会有子集化的 CSS 文件？',
        answer: '因为完整的单个 CSS 文件比较大，最大的一个文件有 1.1MB，所以给出了子集化的 CSS 文件和去掉斜体的 CSS 文件。',
      },
    ],
  },

  'zh-hk': {
    example: '示例',
    fontSelection: '字體選擇',
    fontStyleSelection: '字形選擇 (css 中的 font-style)',
    fontWeightSelection: '字重選擇 (css 中的 font-weight)',
    explanation: '說明',
    format: '格式',
    formatDetail: '<字體樣式><地區><字重><附加選項>.css',
    fontStyle: '字體樣式',
    area: '地區',
    fontWeight: '字重',
    italic: '附加選項',
    FAQ: [
      {
        question: '為什麼會有子集化的 CSS 文件？',
        answer: '因為完整的單個 CSS 文件比較大，最大的一個文件有 1.1MB，所以給出了子集化的 CSS 文件和去掉斜體的 CSS 文件。',
      },
    ],
  },

  'zh-tw': {
    example: '示例',
    fontSelection: '字體選擇',
    fontStyleSelection: '字形選擇 (css 中的 font-style)',
    fontWeightSelection: '字重選擇 (css 中的 font-weight)',
    explanation: '說明',
    format: '格式',
    formatDetail: '<字體樣式><地區><字重><附加選項>.css',
    fontStyle: '字體樣式',
    area: '地區',
    fontWeight: '字重',
    italic: '附加選項',
    FAQ: [
      {
        question: '為什麼會有子集化的 CSS 文件？',
        answer: '因為完整的單個 CSS 文件比較大，最大的一個文件有 1.1MB，所以給出了子集化的 CSS 文件和去掉斜體的 CSS 文件。',
      },
    ],
  },

  'ja': {
    example: '例',
    fontSelection: 'フォントの選択',
    fontStyleSelection: 'フォント スタイルの選択 (css の font-style)',
    fontWeightSelection: 'フォントの太さの選択 (css の font-weight)',
    explanation: '例証する',
    format: 'フォーマット',
    formatDetail: '<フォント スタイル><地域><フォントの太さ><追加オプション>.css',
    fontStyle: 'フォント スタイル',
    area: '地域',
    fontWeight: 'フォントの太さ',
    italic: '追加オプション',
    FAQ: [
      {
        question: 'なぜサブセット CSS ファイルがあるのですか?',
        answer: '完全な単一の CSS ファイルは比較的大きく、最大のものは 1.1MB なので、サブセット化した CSS ファイルやイタリック体のない CSS ファイルを与えています。',
      },
    ],
  },
}

// <字体名称><字体样式><地区><字重><附加选项>.css

export const possibleValues = {
  'en': {
    style: {
      '-gothic': 'Gothic',
    },
    area: {
      '-sc': 'Mainland Chinese Characters',
      '-cn': 'Mainland Chinese Characters, Simplified Chinese Subset',
      '-hc': 'Hong Kong Chinese Characters',
      '-hk': 'Hong Kong Chinese characters, Traditional Chinese Subset',
      '-cl': 'Classical Chinese Characters',
      '-j': 'Japanese Kanji',
      '-jp': 'Japanese Kanji, Japanese Subset',
      '-tw': 'Taiwanese Chinese Characters',
      '-tc': 'Taiwanese Chinese Characters, Taiwanese Chinese Subset',
    },
    weight: {
      '(blank)': 'Regular & Bold',
      '-extralight': 'Extralight',
      '-light': 'Light',
      '-semibold': 'Semibold',
    },
    italic: {
      '(blank)': 'Contain Italics',
      '-noitalic': 'Not Contain Italics',
    },
  },

  'zh-cn': {
    style: {
      '-gothic': '黑体',
    },
    area: {
      '-sc': '大陆汉字字形',
      '-cn': '大陆汉字字形 简体中文子集化',
      '-hc': '香港汉字字形',
      '-hk': '香港汉字字形 繁体中文子集化',
      '-cl': '古典汉字字形',
      '-j': '日本汉字字形',
      '-jp': '日本汉字字形 日语子集化',
      '-tw': '台湾汉字字形',
      '-tc': '台湾汉字字形 台湾中文子集化',
    },
    weight: {
      '(blank)': 'Regular & Bold',
      '-extralight': 'Extralight',
      '-light': 'Light',
      '-semibold': 'Semibold',
    },
    italic: {
      '(blank)': '包含斜体',
      '-noitalic': '不包含斜体',
    },
  },

  'zh-hk': {
    style: {
      '-gothic': '黑體',
    },
    area: {
      '-sc': '大陸漢字字形',
      '-cn': '大陸漢字字形 簡體中文子集化',
      '-hc': '香港漢字字形',
      '-hk': '香港漢字字形 繁體中文子集化',
      '-cl': '古典漢字字形',
      '-j': '日本漢字字形',
      '-jp': '日本漢字字形 日語子集化',
      '-tw': '台灣漢字字形',
      '-tc': '台灣漢字字形 台灣中文子集化',
    },
    weight: {
      '(blank)': 'Regular & Bold',
      '-extralight': 'Extralight',
      '-light': 'Light',
      '-semibold': 'Semibold',
    },
    italic: {
      '(blank)': '包含斜體',
      '-noitalic': '不包含斜體',
    },
  },

  'zh-tw': {
    style: {
      '-gothic': '黑體',
    },
    area: {
      '-sc': '大陸漢字字形',
      '-cn': '大陸漢字字形 簡體中文子集化',
      '-hc': '香港漢字字形',
      '-hk': '香港漢字字形 繁體中文子集化',
      '-cl': '古典漢字字形',
      '-j': '日本漢字字形',
      '-jp': '日本漢字字形 日語子集化',
      '-tw': '台灣漢字字形',
      '-tc': '台灣漢字字形 台灣中文子集化',
    },
    weight: {
      '(blank)': 'Regular & Bold',
      '-extralight': 'Extralight',
      '-light': 'Light',
      '-semibold': 'Semibold',
    },
    italic: {
      '(blank)': '包含斜體',
      '-noitalic': '不包含斜體',
    },
  },

  'ja': {
    style: {
      '-gothic': 'ゴシック',
    },
    area: {
      '-sc': '中国大陸の漢字',
      '-cn': '中国大陸の漢字 簡体字中国語サブセット',
      '-hc': '香港の漢字',
      '-hk': '香港の漢字 繁体字中国語サブセット',
      '-cl': '古典的な漢字',
      '-j': '日本語の漢字',
      '-jp': '日本語の漢字 日本語サブセット',
      '-tw': '台湾の漢字',
      '-tc': '台湾の漢字 台湾中国語サブセット',
    },
    weight: {
      '(blank)': 'Regular & Bold',
      '-extralight': 'Extralight',
      '-light': 'Light',
      '-semibold': 'Semibold',
    },
    italic: {
      '(blank)': 'イタリック体を含む',
      '-noitalic': 'イタリック体を含まない',
    },
  },
}
