<template>
  <d-toolbar
    icon="style"
    :title="$t('_.starting.intro._')"
    subsection="/"
    :status="6"
    edit="1-style/color/index.vue" />
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
