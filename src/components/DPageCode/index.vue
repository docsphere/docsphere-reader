<template>
  <div class="gist">
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div class="file">
            <div itemprop="text" class="blob-wrapper data" v-bind:class="typing">
              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody>
                  <slot></slot>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DPageCode',

  props: {
    type: String,
    default: 'vue'
  },

  computed: {
    typing () {
      let type = ''

      switch (this.type) {
        case 'styl':
          type = 'type-stylus'
          break

        case 'js':
          type = 'type-javascript'
          break

        case 'css':
          type = 'type-css'
          break

        default:
          type = 'type-vue'
      }

      return type
    }
  }
}
</script>

<style lang="stylus"></style>
