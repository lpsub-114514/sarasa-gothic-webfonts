export const showSimplifiedChinese = ['SC', 'CN']
export const showTraditionalChinese = ['HC', 'TC', 'TW', 'HK']
export const showJapanese = ['JP', 'J']
export const examples = {
  japanese: '「河上徹太郎は言った『人は歳とともに澄んでゆくものである。』わたしもそう思います。」',
  simplifiedChinese: '“河上彻太郎曰：‘人生随着岁月而日渐澄明透彻。’我也是这么认为的。”',
  traditionalChinese: '「河上徹太郎曰：『人生隨著歲月而日漸澄明透徹。』我也是這麼認為的。」',
}

// <字体名称><字体样式><地区>[字重][noitalic].css

export const possibleValues = {
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
    '(留空)': 'Regular & Bold',
    '-xlight': 'Extra Light',
    '-light': 'Light',
    '-semibold': 'Semi Bold',
  },
  italic: {
    '(留空)': 'full',
    '-noitalic': '不包含斜体',
  },
}

export const description = {
  0: {
    'SC': '简体汉字字形',
    'TC': '台湾汉字字形',
    'HK': '香港汉字字形',
    'TW': '台湾汉字字形',
    'CN': '简体汉字字形',
    'HC': '香港汉字字形',
    'JP': '日文汉字字形',
  },
  1: {
    'Bold': '粗体',
  },
  2: {
    'Italic': '斜体',
    'Noitalic': '不包括斜体',
  },
}
