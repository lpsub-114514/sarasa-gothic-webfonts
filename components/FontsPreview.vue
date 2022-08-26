<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  showSimplifiedChinese,
  showTraditionalChinese,
  showJapanese,
  examples,
  possibleValues,
  noticeTexts,
  ignoreArea,
} from '../data/fonts'

const props = defineProps<{
  font: string
  lang: keyof typeof possibleValues
}>()

const chosenStyle = ref<keyof typeof possibleValues.en.style>('-gothic')
const chosenArea = ref<keyof typeof possibleValues.en.area>('-sc')
const chosenWeight = ref<keyof typeof possibleValues.en.weight>('(blank)')
const chosenItalic = ref<keyof typeof possibleValues.en.italic>('(blank)')

const chosenFontStyle = ref('normal')
const chosenFontWeight = ref<'normal' | 'bold'>('normal')

const cssFilename = computed(() => {
  const filenameArgs = [
    props.font,
    chosenStyle.value,
    chosenArea.value
  ]

  if (chosenWeight.value !== '(blank)')
    filenameArgs.push(chosenWeight.value.replace(/`/g, ''))

  if (chosenItalic.value !== '(blank)')
    filenameArgs.push(chosenItalic.value)
  
  return filenameArgs.join('')
})

const previewTextStyle = computed(() => {
  const linkTag = document.createElement('link')
  linkTag.setAttribute('rel', 'stylesheet')
  linkTag.setAttribute('href', `//fonts.lpsub.com/css/${cssFilename.value}.css`)
  document.querySelector('head').appendChild(linkTag)

  const fontFamily = [
    firstUpperCase(props.font),
    firstUpperCase(chosenStyle.value.substring(1)),
    chosenArea.value.substring(1).toUpperCase(),
  ]

  if (chosenWeight.value !== '(blank)')
    fontFamily.push(firstUpperCase(chosenWeight.value.replace(/`/g, '').substring(1)))

  return {
    fontFamily: `Arial, Helvetica, '${fontFamily.join(' ')}', sans-serif`,
    fontStyle: chosenFontStyle.value,
    fontWeight: chosenFontWeight.value,
  }
})

const previewAreas = computed(() => Object.keys(possibleValues[props.lang].area).filter((v) => !ignoreArea.includes(v)))
const previewWeight = computed(() => Object.keys(possibleValues[props.lang].weight).map((v) => v.replace(/`/g, '')))

function firstUpperCase(s: string) {
  return s.replace(/^\S/, (s) => s.toUpperCase())
}
</script>
<template>
  <h2>{{ noticeTexts[props.lang].example }}</h2>

  <div class="font-config">
    {{ noticeTexts[props.lang].fontSelection }}:&nbsp;{{ $props.font }}
    <select v-model="chosenStyle" name="style-select" class="font-selector">
      <option v-for="style in Object.keys(possibleValues[props.lang].style)" :value="style">{{ style }}</option>
    </select>
    <select v-model="chosenArea" name="area-select" class="font-selector">
      <option v-for="area in previewAreas" :value="area">{{ area }}</option>
    </select>
    <select v-model="chosenWeight" name="weight-select" class="font-selector">
      <option v-for="weight in previewWeight" :value="weight">{{ weight === '(blank)' ? '' : weight }}</option>
    </select>
    <select v-model="chosenItalic" name="italic-select" class="font-selector">
      <option v-for="italic in Object.keys(possibleValues[props.lang].italic)" :value="italic">{{ italic === '(blank)' ? '' : italic }}</option>
    </select>
    .css
  </div>

  <div class="font-config">
    <label for="choose-font-style">{{ noticeTexts[props.lang].fontStyleSelection }}:&nbsp;</label>
    <select v-model="chosenFontStyle" name="font-style-select" id="choose-font-style" class="font-selector">
      <option value="normal">normal</option>
      <option value="italic">italic</option>
    </select>
  </div>
  
  <div class="font-config">
    <label for="choose-font-weight">{{ noticeTexts[props.lang].fontWeightSelection }}:&nbsp;</label>
    <select v-model="chosenFontWeight" name="font-weight-select" id="choose-font-weight" class="font-selector">
      <option value="normal">normal</option>
      <option value="bold">bold</option>
    </select>
  </div>

  <p :style="previewTextStyle">
    <span v-if="showJapanese.includes(chosenArea.substring(1).toUpperCase())" lang="ja">{{ examples.japanese }}</span>
    <span v-if="showSimplifiedChinese.includes(chosenArea.substring(1).toUpperCase())" lang="zh-CN">{{ examples.simplifiedChinese }}</span>
    <span v-if="showTraditionalChinese.includes(chosenArea.substring(1).toUpperCase())" lang="zh-HK">{{ examples.traditionalChinese }}</span>
  </p>

  <h2>{{ noticeTexts[props.lang].explanation }}</h2>

  <p>{{ noticeTexts[props.lang].format }}:&nbsp;{{ props.font }}{{ noticeTexts[props.lang].formatDetail }}</p>

  <ol>
    <li>
      {{ noticeTexts[props.lang].fontStyle }}
      <table>
        <tbody>
          <tr v-for="style in Object.keys(possibleValues[props.lang].style)">
            <td style="text-align: center;">{{ style }}</td>
            <td style="text-align: center;">{{ possibleValues[props.lang].style[style] }}</td>
          </tr>
        </tbody>
      </table>
    </li>
    <li>
      {{ noticeTexts[props.lang].area }}
      <table>
        <tbody>
          <tr v-for="area in Object.keys(possibleValues[props.lang].area)">
            <td style="text-align: center;">{{ area }}</td>
            <td style="text-align: center;">{{ possibleValues[props.lang].area[area] }}</td>
          </tr>
        </tbody>
      </table>
    </li>
    <li>
      {{ noticeTexts[props.lang].fontWeight }}
      <table>
        <tbody>
          <tr v-for="weight in Object.keys(possibleValues[props.lang].weight)">
            <td style="text-align: center;">{{ weight }}</td>
            <td style="text-align: center;">{{ possibleValues[props.lang].weight[weight] }}</td>
          </tr>
        </tbody>
      </table>
    </li>
    <li>
      {{ noticeTexts[props.lang].italic }}
      <table>
        <tbody>
          <tr v-for="italic in Object.keys(possibleValues[props.lang].italic)">
            <td style="text-align: center;">{{ italic }}</td>
            <td style="text-align: center;">{{ possibleValues[props.lang].italic[italic] }}</td>
          </tr>
        </tbody>
      </table>
    </li>
  </ol>
</template>

<style>
.font-selector {
  border: 1px solid gray;
  font-size: 16px;
  padding-left: 1px;
  margin-left: 2px;
  margin-right: 2px;
}

.font-config {
  margin-top: 5px;
}
</style>
