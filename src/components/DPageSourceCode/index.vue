<template>
  <div class="d-page-source-code">
    <h2>{{ $t('_s') }}</h2>
    <d-page-code>
      <slot></slot>
    </d-page-code>
  </div>
</template>

<script>
import DPageCode from '/src/components/DPageCode'

export default {
  name: 'DPageSourceCode',

  components: {
    DPageCode
  }
}
</script>

<style lang="stylus"></style>
