<script setup lang="ts">
import { ref, computed, watch } from 'vue'
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
    filenameArgs.push(chosenWeight.value)

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

  if (chosenWeight.value !== '(blank)') {
    if (chosenWeight.value === '-extralight')
      fontFamily.push('ExtraLight')
    else
      fontFamily.push(firstUpperCase(chosenWeight.value.substring(1)))
  }

  return {
    fontFamily: `'${fontFamily.join(' ')}', sans-serif`,
    fontStyle: chosenFontStyle.value,
    fontWeight: chosenFontWeight.value,
  }
})

const previewAreas = computed(() => Object.keys(possibleValues[props.lang].area).filter((v) => !ignoreArea.includes(v)))

function firstUpperCase(s: string) {
  return s.replace(/^\S/, (s) => s.toUpperCase())
}
</script>
<template>
  <table class="format-example-table">
    <tbody>
      <tr>
        <td>{{ noticeTexts[props.lang].format }}:&nbsp;</td>
        <td>{{ props.font }}{{ noticeTexts[props.lang].formatDetail }}</td>
      </tr>
      <tr>
        <td></td>
        <td>sarasa-gothic-sc-noitalic.css</td>
      </tr>
    </tbody>
  </table>

  <ol>
    <li>
      {{ noticeTexts[props.lang].fontStyle }}
      <table>
        <tbody>
          <tr v-for="style in Object.keys(possibleValues[props.lang].style)">
            <td style="text-align: center;"><code>{{ style }}</code></td>
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
            <td style="text-align: center;"><code>{{ area }}</code></td>
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
            <td style="text-align: center;" v-html="weight === '(blank)' ? weight : `<code>${weight}</code>`"></td>
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
            <td style="text-align: center;" v-html="italic === '(blank)' ? italic : `<code>${italic}</code>`"></td>
            <td style="text-align: center;">{{ possibleValues[props.lang].italic[italic] }}</td>
          </tr>
        </tbody>
      </table>
    </li>
  </ol>
</template>

