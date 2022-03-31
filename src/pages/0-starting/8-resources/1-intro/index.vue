<template>
  <d-page :nodes="nodes">
    <d-page-h h="1-0" />
    <p v-html="t(1) + l(1) + t('_a') + l(2) + t(2) + l(3) + t(3)"></p>
    <p v-html="t(4) + l(4) + '.'"></p>
    <p v-html="t(5)"></p>

    <d-page-h h="2-1" />
    <p v-html="t(6) + sc(1) + t(7)"></p>
    <d-page-code id="A" library="gitlab" :lines="17">
<pre class="code highlight"><code>
<span class="line" lang="vue"><span class="nt">&lt;</span><span class="k">template</span><span class="nt">&gt;</span></span>
<span class="line" lang="vue">  <span class="c">&lt;!-- you define your Vue template here --&gt;</span></span>
<span class="line" lang="vue"><span class="nt">&lt;/</span><span class="k">template</span><span class="nt">&gt;</span></span>
<span class="line" lang="vue"></span>
<span class="line" lang="vue"><span class="nt">&lt;</span><span class="k">script</span><span class="nt">&gt;</span></span>
<span class="line" lang="vue"><span class="c1">// This is where your Javascript goes</span></span>
<span class="line" lang="vue"><span class="c1">// to define your Vue component, which</span></span>
<span class="line" lang="vue"><span class="c1">// can be a Layout, a Page or your own</span></span>
<span class="line" lang="vue"><span class="c1">// component used throughout the app.</span></span>
<span class="line" lang="vue"><span class="k">export</span> <span class="k">default</span> <span class="p">{</span></span>
<span class="line" lang="vue">  <span class="c1">//</span></span>
<span class="line" lang="vue"><span class="p">}</span></span>
<span class="line" lang="vue"><span class="nt">&lt;/</span><span class="k">script</span><span class="nt">&gt;</span></span>
<span class="line" lang="vue"></span>
<span class="line" lang="vue"><span class="nt">&lt;</span><span class="k">style</span><span class="nt">&gt;</span></span>
<span class="line" lang="vue"><span class="c">/* This is where your CSS goes */</span></span>
<span class="line" lang="vue"><span class="nt">&lt;/</span><span class="k">style</span><span class="nt">&gt;</span></span>
</code></pre>
    </d-page-code>

    <d-page-h h="3-2" />
    <p v-html="t(8) + sc(2) + t(9) + l(5) + t(10) + sc(3) + t('_o') + sc(4) + ').'"></p>
    <p v-html="t(11)"></p>
    <d-page-code id="B" library="gitlab" :lines="5">
<pre class="code highlight"><code>
<span class="line" lang="vue"><span class="c">&lt;!-- notice lang="stylus" --&gt;</span></span>
<span class="line" lang="vue"><span class="nt">&lt;</span><span class="k">style</span> <span class="na">lang=</span><span class="s">"stylus"</span><span class="nt">&gt;</span></span>
<span class="line" lang="vue">.some-div</span>
<span class="line" lang="vue">  font-size 15px</span>
<span class="line" lang="vue"><span class="nt">&lt;/</span><span class="k">style</span><span class="nt">&gt;</span></span>
</code></pre>
    </d-page-code>
    <p v-html="t(12) + sc(2) + t(13)"></p>

    <d-page-h h="2-3" />
    <p v-html="t(14) + l(6) + t(15)"></p>
    <p v-html="t(16)"></p>
    <d-page-code id="C" library="gitlab" :lines="1">
<pre class="code highlight"><code>
<span class="line" lang="vue"><span class="nt">&lt;div</span> <span class="na">v-ripple</span><span class="nt">&gt;</span>Click Me<span class="nt">&lt;/div&gt;</span></span>
</code></pre>
    </d-page-code>
    <blockquote>
      <p v-html="t(17) + sc(5) + t(18) + sc(6) + '.'"></p>
    </blockquote>
    <p v-html="t(19) + sc(7) + t(20)"></p>
    <d-page-code id="D" library="gitlab" :lines="3">
<pre class="code highlight"><code>
<span class="line" lang="javascript"><span class="nx">framework</span><span class="p">:</span> <span class="p">{</span></span>
<span class="line" lang="javascript">  <span class="nl">directives</span><span class="p">:</span> <span class="p">[</span><span class="s1">'Ripple'</span><span class="p">]</span></span>
<span class="line" lang="javascript"><span class="p">}</span></span>
</code></pre>
    </d-page-code>
    <p v-html="t(21) + sc(7)"></p>
    <d-page-code id="E" library="gitlab" :lines="3">
<pre class="code highlight"><code>
<span class="line" lang="javascript"><span class="nx">framework</span><span class="p">:</span> <span class="p">{</span></span>
<span class="line" lang="javascript">  <span class="nl">directives</span><span class="p">:</span> <span class="p">[</span><span class="s1">'Ripple'</span><span class="p">,</span> <span class="s1">'TouchPan'</span><span class="p">,</span> <span class="s1">'TouchSwipe'</span><span class="p">]</span></span>
<span class="line" lang="javascript"><span class="p">}</span></span>
</code></pre>
    </d-page-code>
    <p v-html="t(22)"></p>
    <d-page-code id="F" library="gitlab" :lines="3">
<pre class="code highlight"><code>
<span class="line" lang="vue"><span class="nt">&lt;div</span> <span class="na">v-touch-pan=</span><span class="s">"handler"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span></span>
<span class="line" lang="vue"><span class="nt">&lt;div</span> <span class="na">v-touch-swipe=</span><span class="s">"handler"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span></span>
<span class="line" lang="vue"><span class="nt">&lt;div</span> <span class="na">v-ripple</span><span class="nt">&gt;</span>Click me. I got ripples.<span class="nt">&lt;/div&gt;</span></span>
</code></pre>
    </d-page-code>
    <d-page-h h="2-4" />
    <p v-html="t(23) + sc(7)"></p>
    <p v-html="t(24)"></p>

    <d-page-code id="G" library="gitlab" :lines="4">
<pre class="code highlight"><code class="gitlab">
<span id="LC1" class="line" lang="vue"><span class="nt">&lt;div&gt;</span></span>
<span id="LC2" class="line" lang="vue">  <span class="nt">&lt;q-btn</span> <span class="na">@click=</span><span class="s">"doSomething"</span><span class="nt">&gt;</span>Do something<span class="nt">&lt;/q-btn&gt;</span></span>
<span id="LC3" class="line" lang="vue">  <span class="nt">&lt;q-icon</span> <span class="na">name=</span><span class="s">"alarm"</span> <span class="nt">/&gt;</span></span>
<span id="LC4" class="line" lang="vue"><span class="nt">&lt;/div&gt;</span></span>
</code></pre>
    </d-page-code>

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

      codes: [
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
