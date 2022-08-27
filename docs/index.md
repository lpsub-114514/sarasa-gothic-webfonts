<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const supportedLangs = ['en', 'zh-cn', 'zh-hk', 'zh-tw', 'ja']
  const browserLang = navigator.language

  window.location.pathname = supportedLangs.includes(browserLang.toLowerCase()) ? `/${browserLang.toLowerCase()}/` : '/en/'
})
</script>