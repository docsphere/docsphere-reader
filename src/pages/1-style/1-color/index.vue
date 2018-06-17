<template>
  <d-page :nodes="nodes">
    <d-h h="1-0" />
    <p v-html="t(1)"></p>
    <p v-html="t(2) + l(1) + '.' + t(3) + l(2) + '.'"></p>

    <d-h h="2-1" />
    <p v-html="t(4) + sc(1, 'a')"></p>
    <p v-html="t(5)"></p>

    <d-h h="2-2" />
    <p v-html="t(6) + sc(2) + t(7) + sc(3) + e1() + ':'"></p>
    <p v-html="sc(4)"></p>
    <p v-html="t(8) + sc(5, 'a')"></p>
    <p v-html="t(9) + sc(6) + t(10)"></p>

    <d-h h="2-3" />
    <p v-html="t(11) + sc(7, 'o', '') + t(12)"></p>
    <d-code>
      <tr>
        <td id="file-style-color-01-vue-L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="file-style-color-01-vue-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">&lt;!--</span> changing text color <span class="pl-c">--&gt;</span></span></td>
      </tr>
      <tr>
        <td id="file-style-color-01-vue-L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="file-style-color-01-vue-LC2" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">p</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>text-primary<span class="pl-pds">"</span></span>&gt;....&lt;/<span class="pl-ent">p</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-color-01-vue-L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="file-style-color-01-vue-LC3" class="blob-code blob-code-inner js-file-line">
        </td>
      </tr>
      <tr>
        <td id="file-style-color-01-vue-L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="file-style-color-01-vue-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">&lt;!--</span> changing background color <span class="pl-c">--&gt;</span></span></td>
      </tr>
      <tr>
        <td id="file-style-color-01-vue-L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="file-style-color-01-vue-LC5" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">p</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>bg-positive<span class="pl-pds">"</span></span>&gt;...&lt;/<span class="pl-ent">p</span>&gt;</td>
      </tr>
    </d-code>

    <d-h h="2-4" />
    <p v-html="t(13) + sc(3) + t(14) + sc(8, ',', '') + t(15)"></p>
    <d-code>
      <tr>
        <td id="file-style-color-02-vue-L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="file-style-color-02-vue-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">&lt;!--</span> Notice lang="stylus" <span class="pl-c">--&gt;</span></span></td>
      </tr>
      <tr>
        <td id="file-style-color-02-vue-L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="file-style-color-02-vue-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&lt;<span class="pl-ent">style</span>&nbsp;<span class="pl-e">lang</span>=<span class="pl-s"><span class="pl-pds">"</span></span><span class="pl-s">stylus<span class="pl-pds">"</span></span>&gt;</span></td>
      </tr>
      <tr>
        <td id="file-style-color-02-vue-L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="file-style-color-02-vue-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-c"><span class="pl-c">//</span> "variables" is a Webpack alias injected by Quasar CLI</span></span></td>
      </tr>
      <tr>
        <td id="file-style-color-02-vue-L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="file-style-color-02-vue-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-k">@import</span>&nbsp;<span class="pl-s">'~variables'</span></span></td>
      </tr>
      <tr>
        <td id="file-style-color-02-vue-L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="file-style-color-02-vue-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"></span></td>
      </tr>
      <tr>
        <td id="file-style-color-02-vue-L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="file-style-color-02-vue-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-ent">div</span></span></td>
      </tr>
      <tr>
        <td id="file-style-color-02-vue-L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="file-style-color-02-vue-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&nbsp;&nbsp;<span class="pl-c1">color</span>&nbsp;<span class="pl-smi">$red-1</span></span></td>
      </tr>
      <tr>
        <td id="file-style-color-02-vue-L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="file-style-color-02-vue-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&nbsp;&nbsp;<span class="pl-c1">background-color</span>&nbsp;<span class="pl-smi">$grey-5</span></span></td>
      </tr>
      <tr>
        <td id="file-style-color-02-vue-L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="file-style-color-02-vue-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&lt;/<span class="pl-ent">style</span>&gt;</span></td>
      </tr>
    </d-code>

    <d-h h="2-5" />
    <p v-html="t(16)"></p>
    <d-code type="css">
      <tr>
        <td id="file-style-color-03-css-L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="file-style-color-03-css-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-e">.text-brand</span> {</td>
      </tr>
      <tr>
        <td id="file-style-color-03-css-L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="file-style-color-03-css-LC2" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;<span class="pl-c1"><span class="pl-c1">color</span></span>: <span class="pl-c1">#a2aa33</span>;</td>
      </tr>
      <tr>
        <td id="file-style-color-03-css-L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="file-style-color-03-css-LC3" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="file-style-color-03-css-L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="file-style-color-03-css-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-e">.bg-brand</span> {</td>
      </tr>
      <tr>
        <td id="file-style-color-03-css-L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="file-style-color-03-css-LC5" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;<span class="pl-c1"><span class="pl-c1">background</span></span>: <span class="pl-c1">#a2aa33</span>;</td>
      </tr>
      <tr>
        <td id="file-style-color-03-css-L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="file-style-color-03-css-LC6" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
    </d-code>
    <p v-html="t(17)"></p>
    <d-code>
      <tr>
        <td id="file-style-color-04-vue-L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="file-style-color-04-vue-LC1" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">q-input</span>&nbsp;<span class="pl-e">color</span>=<span class="pl-s"><span class="pl-pds">"</span>brand<span class="pl-pds">"</span></span> ... /&gt;</td>
      </tr>
    </d-code>
    <p style="color: red;">... (This page is still under construction!)</p>
  </d-page>
</template>

<script>
import Page from '/src/pages/page'

export default {
  mixins: [Page],

  data () {
    return {
      nodes: [
        {
          id: 0,
          children: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 }
          ]
        }
      ],

      codes: [
        ['primary', 'secondary', 'tertiary'],
        '&lt;style lang=&quot;stylus&quot;&gt;',
        '*.vue',
        ['primary', 'secondary', 'tertiary', 'positive', 'negative', 'info', 'warning', 'white', 'light', 'dark', 'faded'],
        ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'],
        ['red', 'red-1', 'red-2', '…', 'red-14'],
        ['text-', 'bg-'],
        ['$primary', '$red-1']
      ]
    }
  },

  methods: {
    e1 () { // Exception 1
      if (this.$i18n.locale === 'en') {
        return ` ${this.$t('_f')}`
      }

      return ''
    }
  }
}
</script>
