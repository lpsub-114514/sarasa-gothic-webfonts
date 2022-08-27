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
  <span v-for="(faq, index) in noticeTexts[props.lang].FAQ">
    <blockquote>Q: {{ faq.question }}
    <p>A: {{ faq.answer }}</p></blockquote>
  </span>
</template>