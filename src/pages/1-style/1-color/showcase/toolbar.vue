<template>
  <d-toolbar
    icon="style"
    :title="$t('section.style.color._')"
    :subtitle="$t('subsection.showcase._')"
    :status="9"
    edit="1-style/1-color/showcase/index.vue" />
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
