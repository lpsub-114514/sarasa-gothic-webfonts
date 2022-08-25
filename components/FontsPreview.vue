<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  showSimplifiedChinese,
  showTraditionalChinese,
  showJapanese,
  examples,
  possibleValues,
} from '../data/fonts'

const props = defineProps<{
  font: string
}>()

const chosenStyle = ref<keyof typeof possibleValues.style>('-gothic')
const chosenArea = ref<keyof typeof possibleValues.area>('-sc')
const chosenWeight = ref<keyof typeof possibleValues.weight>('(留空)')
const chosenItalic = ref<keyof typeof possibleValues.italic>('(留空)')

const chosenFontStyle = ref('normal')

const cssFilename = computed(() => {
  const filenameArgs = [
    props.font,
    chosenStyle.value,
    chosenArea.value
  ]

  if (chosenWeight.value !== '(留空)')
    filenameArgs.push(chosenWeight.value)

  if (chosenItalic.value !== '(留空)')
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

  if (chosenWeight.value !== '(留空)')
    fontFamily.push(firstUpperCase(chosenWeight.value.substring(1)))

  return {
    fontFamily: `Arial, Helvetica, '${fontFamily.join(' ')}', sans-serif`,
    fontStyle: chosenFontStyle.value,
  }
})

function firstUpperCase(s: string) {
  return s.replace(/^\S/, (s) => s.toUpperCase())
}
</script>
<template>
  <h2>示例</h2>

  <div class="font-config">
    字体选择：{{ $props.font }}
    <select v-model="chosenStyle" name="style-select" class="font-selector">
      <option v-for="style in Object.keys(possibleValues.style)" :value="style">{{ style }}</option>
    </select>
    <select v-model="chosenArea" name="area-select" class="font-selector">
      <option v-for="area in Object.keys(possibleValues.area)" :value="area">{{ area }}</option>
    </select>
    <select v-model="chosenWeight" name="weight-select" class="font-selector">
      <option v-for="weight in Object.keys(possibleValues.weight)" :value="weight">{{ weight === '(留空)' ? '' : weight }}</option>
    </select>
    <select v-model="chosenItalic" name="italic-select" class="font-selector">
      <option v-for="italic in Object.keys(possibleValues.italic)" :value="italic">{{ italic === '(留空)' ? '' : italic }}</option>
    </select>
    .css
  </div>

  <div class="font-config">
    <label for="choose-font-style">字形选择 (css 中的 font-style)：</label>
    <select v-model="chosenFontStyle" name="font-style-select" id="choose-font-style" class="font-selector">
      <option value="normal">normal</option>
      <option value="italic">italic</option>
    </select>
  </div>

  <p :style="previewTextStyle">
    <span v-if="showJapanese.includes(chosenArea.substring(1).toUpperCase())">{{ examples.japanese }}</span>
    <span v-if="showSimplifiedChinese.includes(chosenArea.substring(1).toUpperCase())">{{ examples.simplifiedChinese }}</span>
    <span v-if="showTraditionalChinese.includes(chosenArea.substring(1).toUpperCase())">{{ examples.traditionalChinese }}</span>
  </p>

  <h2>说明</h2>

  <p>格式：{{ '<字体名称><字体样式><地区><字重><斜体>.css' }}</p>

  <ol>
    <li>
      字体样式
      <table>
        <tbody>
          <tr v-for="style in Object.keys(possibleValues.style)">
            <td style="text-align: center;">{{ style }}</td>
            <td style="text-align: center;">{{ possibleValues.style[style] }}</td>
          </tr>
        </tbody>
      </table>
    </li>
    <li>
      地区
      <table>
        <tbody>
          <tr v-for="area in Object.keys(possibleValues.area)">
            <td style="text-align: center;">{{ area }}</td>
            <td style="text-align: center;">{{ possibleValues.area[area] }}</td>
          </tr>
        </tbody>
      </table>
    </li>
    <li>
      字重
      <table>
        <tbody>
          <tr v-for="weight in Object.keys(possibleValues.weight)">
            <td style="text-align: center;">{{ weight }}</td>
            <td style="text-align: center;">{{ possibleValues.weight[weight] }}</td>
          </tr>
        </tbody>
      </table>
    </li>
    <li>
      斜体
      <table>
        <tbody>
          <tr v-for="italic in Object.keys(possibleValues.italic)">
            <td style="text-align: center;">{{ italic }}</td>
            <td style="text-align: center;">{{ possibleValues.italic[italic] }}</td>
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
