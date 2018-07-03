<template>
  <div class="d-page-source-code">
    <h2>Source Code</h2>
    <d-page-code v-pre>
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
