<script setup lang="ts">
import {
  possibleValues,
  noticeTexts,
} from '../data/fonts'

const props = defineProps<{
  font: string
  lang: keyof typeof possibleValues
}>()
</script>
<template>
  <span v-for="faq in noticeTexts[props.lang].FAQ">
    <blockquote>Q: {{ faq.question }}
    <p>A: {{ faq.answer }}</p></blockquote>
  </span>
</template>
