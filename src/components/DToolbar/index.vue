<template>
  <q-toolbar-title>
    <q-icon v-if="icon" :name="icon" size="2rem"></q-icon>
    <span>{{ title }}</span><span v-if="subtitle"> - {{subtitle}}</span>
    <q-btn
      dense
      no-caps
      :icon="icons"
      :color="color"
      class="float-right"
      @click="openURL(`https://github.com/slowaways/quasar-documentation-pp/blob/master/src/pages/${edit}`)">
      <div class="desktop-only">
        <span class="hm" v-if="status === 9">{{ $t('toolbar.edit') }}</span>
        <span class="hm" v-else-if="status === 6">{{ $t('toolbar.complete') }}</span>
        <span class="hm" v-else>{{ $t('toolbar.start') }}</span>
        <q-icon name="fab fa-github"></q-icon>
      </div>
    </q-btn>
  </q-toolbar-title>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'DToolbar',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    edit: {
      type: String,
      required: true
    },

    status: {
      type: Number,
      default: 1
    }
  },
  computed: {
    color () {
      if (this.status === 9) {
        return 'primary'
      } else if (this.status === 6) {
        return 'secondary'
      } else {
        return 'negative'
      }
    },
    icons () {
      if (this.status === 9) {
        return 'edit'
      } else if (this.status === 6) {
        return 'border_color'
      } else {
        return 'note_add'
      }
    }
  },

  methods: {
    openURL
  }
}
</script>

<style lang="stylus" scoped>
  span.hm
    margin: 0 5px
</style>
