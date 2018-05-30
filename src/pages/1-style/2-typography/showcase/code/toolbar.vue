<template>
  <d-toolbar
    icon="format_bold"
    :title="$t('section.style.typography._')"
    :subtitle="$t('subsection.showcase.code._')"
    :status="9"
    edit="1-style/2-typography/showcase/code/index.vue" />
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
