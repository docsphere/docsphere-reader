<template>
  <d-toolbar
    icon="style"
    :title="$t('section.style.color._')"
    subsection="/showcase"
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
