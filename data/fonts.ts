export const showSimplifiedChinese = ['SC', 'CN']
export const showTraditionalChinese = ['HC', 'TC', 'TW', 'HK']
export const showJapanese = ['JP', 'J']
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
    explanation: 'Explanation',
    format: 'Format',
    formatDetail: '<font style><region><font weight><italic>.css',
    fontStyle: 'Font Style',
    area: 'Region',
    fontWeight: 'Font Weight',
    italic: 'Italic',
  },
  'zh-cn': {
    example: '示例',
    fontSelection: '字体选择',
    fontStyleSelection: '字形选择 (css 中的 font-style)',
    explanation: '说明',
    format: '格式',
    formatDetail: '<字体样式><地区><字重><斜体>.css',
    fontStyle: '字体样式',
    area: '地区',
    fontWeight: '字重',
    italic: '斜体',
  },
  'zh-hk': {
    example: '示例',
    fontSelection: '字體選擇',
    fontStyleSelection: '字形選擇 (css 中的 font-style)',
    explanation: '說明',
    format: '格式',
    formatDetail: '<字體樣式><地區><字重><斜體>.css',
    fontStyle: '字體樣式',
    area: '地區',
    fontWeight: '字重',
    italic: '斜體',
  },
  'zh-tw': {
    example: '示例',
    fontSelection: '字體選擇',
    fontStyleSelection: '字形選擇 (css 中的 font-style)',
    explanation: '說明',
    format: '格式',
    formatDetail: '<字體樣式><地區><字重><斜體>.css',
    fontStyle: '字體樣式',
    area: '地區',
    fontWeight: '字重',
    italic: '斜體',
  },
  'jp': {
    example: '例',
    fontSelection: 'フォントの選択',
    fontStyleSelection: 'フォント スタイルの選択 (css の font-style)',
    explanation: '例証する',
    format: 'フォーマット',
    formatDetail: '<フォント スタイル><地域><フォントの太さ><斜体>.css',
    fontStyle: 'フォント スタイル',
    area: '地域',
    fontWeight: 'フォントの太さ',
    italic: '斜体',
  },
}

// <字体名称><字体样式><地区><字重><noitalic>.css

export const possibleValues = {
  'en': {
    style: {
      '-gothic': 'Gothic',
    },
    area: {
      '-sc': 'Simplified Chinese Characters',
      '-cn': 'Simplified Chinese Characters',
      '-hc': 'Hong Kong Chinese characters',
      '-hk': 'Hong Kong Chinese characters',
      '-cl': 'Classical Chinese Characters',
      '-j': 'Japanese Kanji',
      '-jp': 'Japanese Kanji',
      '-tw': 'Taiwanese Chinese characters',
      '-tc': 'Taiwanese Chinese characters',
    },
    weight: {
      '(blank)': 'Regular & Bold',
      '-xlight': 'Extra Light',
      '-light': 'Light',
      '-semibold': 'Semi Bold',
    },
    italic: {
      '(blank)': 'Full',
      '-noitalic': 'Not Contain Italics',
    },
  },
  'zh-cn': {
    style: {
      '-gothic': '黑体',
    },
    area: {
      '-sc': '简体汉字字形',
      '-cn': '简体汉字字形',
      '-hc': '香港汉字字形',
      '-hk': '香港汉字字形',
      '-cl': '古典汉字字形',
      '-j': '日本汉字字形',
      '-jp': '日本汉字字形',
      '-tw': '台湾汉字字形',
      '-tc': '台湾汉字字形',
    },
    weight: {
      '(blank)': 'Regular & Bold',
      '-xlight': 'Extra Light',
      '-light': 'Light',
      '-semibold': 'Semi Bold',
    },
    italic: {
      '(blank)': 'Full',
      '-noitalic': '不包含斜体',
    },
  },
  'zh-hk': {
    style: {
      '-gothic': '黑體',
    },
    area: {
      '-sc': '簡體漢字字形',
      '-cn': '簡體漢字字形',
      '-hc': '香港漢字字形',
      '-hk': '香港漢字字形',
      '-cl': '古典漢字字形',
      '-j': '日本漢字字形',
      '-jp': '日本漢字字形',
      '-tw': '台灣漢字字形',
      '-tc': '台灣漢字字形',
    },
    weight: {
      '(blank)': 'Regular & Bold',
      '-xlight': 'Extra Light',
      '-light': 'Light',
      '-semibold': 'Semi Bold',
    },
    italic: {
      '(blank)': 'Full',
      '-noitalic': '不包含斜體',
    },
  },
  'zh-tw': {
    style: {
      '-gothic': '黑體',
    },
    area: {
      '-sc': '簡體漢字字形',
      '-cn': '簡體漢字字形',
      '-hc': '香港漢字字形',
      '-hk': '香港漢字字形',
      '-cl': '古典漢字字形',
      '-j': '日本漢字字形',
      '-jp': '日本漢字字形',
      '-tw': '台灣漢字字形',
      '-tc': '台灣漢字字形',
    },
    weight: {
      '(blank)': 'Regular & Bold',
      '-xlight': 'Extra Light',
      '-light': 'Light',
      '-semibold': 'Semi Bold',
    },
    italic: {
      '(blank)': 'Full',
      '-noitalic': '不包含斜體',
    },
  },
  'jp': {
    style: {
      '-gothic': 'ゴシック',
    },
    area: {
      '-sc': '簡体字',
      '-cn': '簡体字',
      '-hc': '香港の漢字',
      '-hk': '香港の漢字',
      '-cl': '古典的な漢字',
      '-j': '日本語の漢字',
      '-jp': '日本語の漢字',
      '-tw': '台湾の漢字',
      '-tc': '台湾の漢字',
    },
    weight: {
      '(blank)': 'Regular & Bold',
      '-xlight': 'Extra Light',
      '-light': 'Light',
      '-semibold': 'Semi Bold',
    },
    italic: {
      '(blank)': 'Full',
      '-noitalic': '斜体を含まない',
    },
  },
}
