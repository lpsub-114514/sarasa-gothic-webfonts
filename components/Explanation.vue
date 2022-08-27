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
<style>
.format-example-table td {
  border: none;
  padding: 0;
}

.format-example-table tr {
  background: none;
  border: none;
  transition: none;
}

.format-example-table tr:nth-child(2n) {
  background: none;
}
</style>
