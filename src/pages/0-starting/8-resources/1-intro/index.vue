<template>
  <d-page :nodes="nodes">
    <d-page-h h="1-0" />

    <p v-html="t(1) + l(1) + t('_a') + l(2) + t(2) + l(3) + t(3)"></p>
    <p v-html="t(4) + l(4) + '.'"></p>
    <p v-html="t(5)"></p>

    <d-page-h h="2-1" />

    <p v-html="t(6) + sc(1) + t(7)"></p>

    <d-page-source-code :index="0" />

    <d-page-h h="3-2" />

    <p v-html="t(8) + sc(2) + t(9) + l(5) + t(10) + sc(3) + t('_o') + sc(4) + ').'"></p>
    <p v-html="t(11)"></p>

    <d-page-source-code :index="1" />

    <p v-html="t(12) + sc(2) + t(13)"></p>

    <d-page-h h="2-3" />

    <p v-html="t(14) + l(6) + t(15)"></p>
    <p v-html="t(16)"></p>

    <d-page-source-code :index="2" />

    <blockquote>
      <p v-html="t(17) + sc(5) + t(18) + sc(6) + '.'"></p>
    </blockquote>

    <p v-html="t(19) + sc(7) + t(20)"></p>

    <d-page-source-code :index="3" language="javascript" />

    <p v-html="t(21) + sc(7)"></p>

    <d-page-source-code :index="4" language="javascript" />

    <p v-html="t(22)"></p>

    <d-page-source-code :index="5" />

    <d-page-h h="2-4" />

    <p v-html="t(23) + sc(7)"></p>
    <p v-html="t(24)"></p>

    <d-page-source-code :index="6" />

    <p style="color: red;">... (This page is still under construction!)</p>
  </d-page>
</template>

<script>
import Overview from 'src/pages/overview'

export default {
  mixins: [Overview],

  data () {
    return {
      nodes: [
        {
          id: 0,
          children: [
            {
              id: 1,
              children: [
                { id: 2 }
              ]
            },
            { id: 3 },
            { id: 4 }
          ]
        }
      ],

      tokens: [
        '*.vue',
        '&lt;style&gt;',
        'yarn add --dev less-loader',
        'npm install --save-dev less-loader',
        'v-ripple',
        'v-',
        '/quasar.conf.js'
      ]
    }
  }
}
</script>
