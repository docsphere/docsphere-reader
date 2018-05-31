<template>
  <d-toolbar
    icon="style"
    :title="$t('_.style.color._')"
    subsection="/showcase/code"
    :status="9"
    edit="1-style/1-color/showcase/code/index.vue" />
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
