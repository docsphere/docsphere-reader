<template>
  <d-page disable-nav>
    <d-page-code v-pre>
      <tr>
        <td id="file-index-vue-L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="file-index-vue-LC1" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">template</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="file-index-vue-LC2" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&lt;<span class="pl-ent">q-page</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>row<span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="file-index-vue-LC3" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="pl-ent">q-scroll-area</span>&nbsp;<span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>content<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>col<span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="file-index-vue-LC4" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;  &lt;<span class="pl-ent">p</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>caption<span class="pl-pds">"</span></span>&gt;Main Colors&lt;/<span class="pl-ent">p</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="file-index-vue-LC5" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;  &lt;<span class="pl-ent">div</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>main-color shadow-1 row inline flex-center text-white<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">v-for</span>=<span class="pl-s1"><span class="pl-pds">"</span>color <span class="pl-k">in</span> main<span class="pl-pds">"</span></span> :<span class="pl-e">key</span>=<span class="pl-s1"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span> :<span class="pl-e">class</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">`</span>bg-<span class="pl-s1"><span class="pl-pse">${</span>color<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span><span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="file-index-vue-LC6" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;    {{ color }}</td>
      </tr>
      <tr>
        <td id="file-index-vue-L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="file-index-vue-LC7" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;  &lt;/<span class="pl-ent">div</span>&gt;&lt;<span class="pl-ent">br</span>&gt;&lt;<span class="pl-ent">br</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="file-index-vue-LC8" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;  &lt;<span class="pl-ent">div</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>main-color shadow-1 row inline flex-center text-white<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">v-for</span>=<span class="pl-s1"><span class="pl-pds">"</span>color <span class="pl-k">in</span> alert<span class="pl-pds">"</span></span> :<span class="pl-e">key</span>=<span class="pl-s1"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span> :<span class="pl-e">class</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">`</span>bg-<span class="pl-s1"><span class="pl-pse">${</span>color<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span><span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="file-index-vue-LC9" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;    {{ color }}</td>
      </tr>
      <tr>
        <td id="file-index-vue-L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="file-index-vue-LC10" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;  &lt;/<span class="pl-ent">div</span>&gt;&lt;<span class="pl-ent">br</span>&gt;&lt;<span class="pl-ent">br</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="file-index-vue-LC11" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;  &lt;<span class="pl-ent">div</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>main-color shadow-1 row inline flex-center text-white<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">v-for</span>=<span class="pl-s1"><span class="pl-pds">"</span>color <span class="pl-k">in</span> dark<span class="pl-pds">"</span></span> :<span class="pl-e">key</span>=<span class="pl-s1"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span> :<span class="pl-e">class</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">`</span>bg-<span class="pl-s1"><span class="pl-pse">${</span>color<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span><span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="file-index-vue-LC12" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;    {{ color }}</td>
      </tr>
      <tr>
        <td id="file-index-vue-L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="file-index-vue-LC13" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;  &lt;/<span class="pl-ent">div</span>&gt;&lt;<span class="pl-ent">br</span>&gt;&lt;<span class="pl-ent">br</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="file-index-vue-LC14" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;  &lt;<span class="pl-ent">div</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>main-color shadow-1 row inline flex-center text-dark<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">v-for</span>=<span class="pl-s1"><span class="pl-pds">"</span>color <span class="pl-k">in</span> light<span class="pl-pds">"</span></span> :<span class="pl-e">key</span>=<span class="pl-s1"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span> :<span class="pl-e">class</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">`</span>bg-<span class="pl-s1"><span class="pl-pse">${</span>color<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span><span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="file-index-vue-LC15" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;    {{ color }}</td>
      </tr>
      <tr>
        <td id="file-index-vue-L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="file-index-vue-LC16" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;  &lt;/<span class="pl-ent">div</span>&gt;&lt;<span class="pl-ent">br</span>&gt;&lt;<span class="pl-ent">br</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="file-index-vue-LC17" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;  &lt;<span class="pl-ent">p</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>caption<span class="pl-pds">"</span></span>&gt;Full Palette&lt;/<span class="pl-ent">p</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="file-index-vue-LC18" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;  &lt;<span class="pl-ent">q-tabs</span>&nbsp;<span class="pl-e">inverted</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="file-index-vue-LC19" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;    &lt;<span class="pl-ent">q-tab</span>&nbsp;<span class="pl-e">default</span>&nbsp;<span class="pl-e">slot</span>=<span class="pl-s"><span class="pl-pds">"</span>title<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>tab-default<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">label</span>=<span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">color</span>=<span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span> /&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="file-index-vue-LC20" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;    &lt;<span class="pl-ent">q-tab-pane</span>&nbsp;<span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>tab-default<span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="file-index-vue-LC21" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="pl-ent">div</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>detailed-color column flex-center<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">v-for</span>=<span class="pl-s1"><span class="pl-pds">"</span>n <span class="pl-k">in</span>&nbsp;<span class="pl-c1">14</span><span class="pl-pds">"</span></span> :<span class="pl-e">key</span>=<span class="pl-s1"><span class="pl-pds">"</span>n<span class="pl-pds">"</span></span> :<span class="pl-e">class</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">`</span>bg-red-<span class="pl-s1"><span class="pl-pse">${</span>n<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span><span class="pl-pds">"</span></span>&gt;red-{{ n }}&lt;/<span class="pl-ent">div</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="file-index-vue-LC22" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;    &lt;/<span class="pl-ent">q-tab-pane</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="file-index-vue-LC23" class="blob-code blob-code-inner js-file-line">
        </td>
      </tr>
      <tr>
        <td id="file-index-vue-L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="file-index-vue-LC24" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;    &lt;<span class="pl-ent">q-tab</span>&nbsp;<span class="pl-e">v-for</span>=<span class="pl-s1"><span class="pl-pds">"</span>(color, index) <span class="pl-k">in</span> colors<span class="pl-pds">"</span></span> :<span class="pl-e">key</span>=<span class="pl-s1"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">slot</span>=<span class="pl-s"><span class="pl-pds">"</span>title<span class="pl-pds">"</span></span> :<span class="pl-e">name</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">`</span>tab-<span class="pl-s1"><span class="pl-pse">${</span>index<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span><span class="pl-pds">"</span></span> :<span class="pl-e">label</span>=<span class="pl-s1"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span> :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span> /&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="file-index-vue-LC25" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;    &lt;<span class="pl-ent">q-tab-pane</span>&nbsp;<span class="pl-e">v-for</span>=<span class="pl-s1"><span class="pl-pds">"</span>(color, index) <span class="pl-k">in</span> colors<span class="pl-pds">"</span></span> :<span class="pl-e">key</span>=<span class="pl-s1"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span> :<span class="pl-e">name</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">`</span>tab-<span class="pl-s1"><span class="pl-pse">${</span>index<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span><span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="file-index-vue-LC26" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="pl-ent">div</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>detailed-color column flex-center<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">v-for</span>=<span class="pl-s1"><span class="pl-pds">"</span>n <span class="pl-k">in</span>&nbsp;<span class="pl-c1">14</span><span class="pl-pds">"</span></span> :<span class="pl-e">key</span>=<span class="pl-s1"><span class="pl-pds">"</span>n<span class="pl-pds">"</span></span> :<span class="pl-e">class</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">`</span>bg-<span class="pl-s1"><span class="pl-pse">${</span>color<span class="pl-pse">}</span></span>-<span class="pl-s1"><span class="pl-pse">${</span>n<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span><span class="pl-pds">"</span></span>&gt;{{ color }}-{{ n }}&lt;/<span class="pl-ent">div</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="file-index-vue-LC27" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;    &lt;/<span class="pl-ent">q-tab-pane</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="file-index-vue-LC28" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;  &lt;/<span class="pl-ent">q-tabs</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="file-index-vue-LC29" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class="pl-ent">q-scroll-area</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="file-index-vue-LC30" class="blob-code blob-code-inner js-file-line">&nbsp;&nbsp;&lt;/<span class="pl-ent">q-page</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="file-index-vue-LC31" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">template</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-index-vue-L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="file-index-vue-LC32" class="blob-code blob-code-inner js-file-line">
        </td>
      </tr>
      <tr>
        <td id="file-index-vue-L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="file-index-vue-LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&lt;<span class="pl-ent">script</span>&gt;</span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="file-index-vue-LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-k">export</span>&nbsp;<span class="pl-c1">default</span> {</span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="file-index-vue-LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-en">  data</span> () {</span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="file-index-vue-LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-k">    return</span> {</span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="file-index-vue-LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      main<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>primary<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>secondary<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>tertiary<span class="pl-pds">'</span></span>],</span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="file-index-vue-LC38" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      alert<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>positive<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>negative<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>info<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>warning<span class="pl-pds">'</span></span>],</span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="file-index-vue-LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      dark<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>faded<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>dark<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>black<span class="pl-pds">'</span></span>],</span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="file-index-vue-LC40" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      light<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>white<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>light<span class="pl-pds">'</span></span>],</span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="file-index-vue-LC41" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      colors<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>pink<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>purple<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>deep-purple<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>indigo<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>blue<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>light-blue<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>cyan<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>teal<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>green<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>light-green<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>lime<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>yellow<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>amber<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>orange<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>deep-orange<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>brown<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>grey<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>blue-grey<span class="pl-pds">'</span></span>]</span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="file-index-vue-LC42" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    }</span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="file-index-vue-LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">  }</span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="file-index-vue-LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">}</span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="file-index-vue-LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&lt;/<span class="pl-ent">script</span>&gt;</span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="file-index-vue-LC46" class="blob-code blob-code-inner js-file-line">
        </td>
      </tr>
      <tr>
        <td id="file-index-vue-L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="file-index-vue-LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&lt;<span class="pl-ent">style</span>&nbsp;<span class="pl-e">lang</span>=<span class="pl-s"><span class="pl-pds">"</span></span><span class="pl-s">stylus<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">scoped</span>&gt;</span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="file-index-vue-LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-ent">  div</span><span class="pl-e">.main-color</span></span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="file-index-vue-LC49" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-c1">    width</span>&nbsp;<span class="pl-c1">110<span class="pl-k">px</span></span></span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="file-index-vue-LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-c1">    margin</span>&nbsp;<span class="pl-c1">5<span class="pl-k">px</span></span></span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="file-index-vue-LC51" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-c1">    height</span>&nbsp;<span class="pl-c1">40<span class="pl-k">px</span></span></span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="file-index-vue-LC52" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-e">  .detailed-color</span></span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="file-index-vue-LC53" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-c1">    width</span>&nbsp;<span class="pl-c1">100<span class="pl-k">%</span></span></span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="file-index-vue-LC54" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-ent">  div</span><span class="pl-e">.detailed-color</span></span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="file-index-vue-LC55" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-c1">    height</span>&nbsp;<span class="pl-c1">55<span class="pl-k">px</span></span></span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="file-index-vue-LC56" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-ent">  div</span><span class="pl-e">.detail</span></span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="file-index-vue-LC57" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-c1">    margin-bottom</span>&nbsp;<span class="pl-c1">25<span class="pl-k">px</span></span></span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="file-index-vue-LC58" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-c1">    max-width</span>&nbsp;<span class="pl-c1">400<span class="pl-k">px</span></span></span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="file-index-vue-LC59" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-c1">    min-width</span>&nbsp;<span class="pl-c1">135<span class="pl-k">px</span></span></span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="file-index-vue-LC60" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-c1">    display</span>&nbsp;<span class="pl-c1">inline-block</span></span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="file-index-vue-LC61" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-c1">    margin-right</span>&nbsp;<span class="pl-c1">5<span class="pl-k">px</span></span></span></td>
      </tr>
      <tr>
        <td id="file-index-vue-L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="file-index-vue-LC62" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&lt;/<span class="pl-ent">style</span>&gt;</span></td>
      </tr>
    </d-page-code>
  </d-page>
</template>

<script>
import Standard from '/src/pages/standard'

export default {
  mixins: [Standard]
}
</script>

<style lang="stylus"></style>
