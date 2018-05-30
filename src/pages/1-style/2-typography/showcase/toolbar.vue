<template>
  <d-toolbar
    icon="format_bold"
    :title="$t('section.style.typography._')"
    subsection="/showcase"
    :status="9"
    edit="1-style/2-typography/showcase/index.vue" />
</template>

<script>
import DToolbar from 'src/components/DToolbar'

export default {
  components: {
    DToolbar
  }
}
</script>

<style scoped></style>
