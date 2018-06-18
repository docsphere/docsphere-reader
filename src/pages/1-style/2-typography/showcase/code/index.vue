<template>
  <d-page disable-nav>
    <d-page-code v-pre>
      <tr>
        <td id="file-style-typography-example-vue-L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="file-style-typography-example-vue-LC1" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">template</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="file-style-typography-example-vue-LC2" class="blob-code blob-code-inner js-file-line">  &lt;<span class="pl-ent">q-page</span>&nbsp;<span class="pl-e">padding</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="file-style-typography-example-vue-LC3" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">p</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>caption<span class="pl-pds">"</span></span>&gt;Headings&lt;/<span class="pl-ent">p</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="file-style-typography-example-vue-LC4" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span>&nbsp;<span class="pl-e">v-for</span>=<span class="pl-s1"><span class="pl-pds">"</span>heading <span class="pl-k">in</span> headings<span class="pl-pds">"</span></span> :<span class="pl-e">key</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-smi">heading</span>.<span class="pl-smi">class</span><span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>row items-center q-mb-lg<span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="file-style-typography-example-vue-LC5" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">div</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>col-sm-3 col-12<span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="file-style-typography-example-vue-LC6" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">q-chip</span>&nbsp;<span class="pl-e">color</span>=<span class="pl-s"><span class="pl-pds">"</span>primary<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">square</span>&gt;.{{ <span class="pl-smi">heading</span>.<span class="pl-smi">class</span> }}&lt;/<span class="pl-ent">q-chip</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="file-style-typography-example-vue-LC7" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">q-chip</span>&nbsp;<span class="pl-e">color</span>=<span class="pl-s"><span class="pl-pds">"</span>secondary<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">square</span>&nbsp;<span class="pl-e">v-if</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-smi">heading</span>.<span class="pl-smi">equivalent</span><span class="pl-pds">"</span></span>&gt;{{ <span class="pl-smi">heading</span>.<span class="pl-smi">equivalent</span> }}&lt;/<span class="pl-ent">q-chip</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="file-style-typography-example-vue-LC8" class="blob-code blob-code-inner js-file-line">      &lt;/<span class="pl-ent">div</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="file-style-typography-example-vue-LC9" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">div</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>col-sm-9 col-12 q-pl-md q-pt-md<span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="file-style-typography-example-vue-LC10" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">div</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>q-mb-md<span class="pl-pds">"</span></span> :<span class="pl-e">class</span>=<span class="pl-s1"><span class="pl-pds">"</span>[<span class="pl-smi">heading</span>.<span class="pl-smi">class</span>, <span class="pl-s"><span class="pl-pds">`</span><span class="pl-s1"><span class="pl-pse">${</span><span class="pl-smi">heading</span>.<span class="pl-smi">class</span><span class="pl-pse">}</span></span>-opacity<span class="pl-pds">`</span></span>]<span class="pl-pds">"</span></span>&gt;{{ <span class="pl-smi">heading</span>.<span class="pl-c1">label</span> }}&lt;/<span class="pl-ent">div</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="file-style-typography-example-vue-LC11" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">div</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>text-weight-light<span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="file-style-typography-example-vue-LC12" class="blob-code blob-code-inner js-file-line">          black &lt;<span class="pl-ent">strong</span>&gt;{{ <span class="pl-smi">heading</span>.<span class="pl-c1">color</span> }}%&lt;/<span class="pl-ent">strong</span>&gt;, font weight &lt;<span class="pl-ent">strong</span>&gt;{{ <span class="pl-smi">heading</span>.<span class="pl-smi">weight</span> }}&lt;/<span class="pl-ent">strong</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="file-style-typography-example-vue-LC13" class="blob-code blob-code-inner js-file-line">        &lt;/<span class="pl-ent">div</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="file-style-typography-example-vue-LC14" class="blob-code blob-code-inner js-file-line">      &lt;/<span class="pl-ent">div</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="file-style-typography-example-vue-LC15" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="file-style-typography-example-vue-LC16" class="blob-code blob-code-inner js-file-line">
        </td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="file-style-typography-example-vue-LC17" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">p</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>caption<span class="pl-pds">"</span></span>&gt;Weights&lt;/<span class="pl-ent">p</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="file-style-typography-example-vue-LC18" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span>&nbsp;<span class="pl-e">v-for</span>=<span class="pl-s1"><span class="pl-pds">"</span>weight <span class="pl-k">in</span> weights<span class="pl-pds">"</span></span> :<span class="pl-e">key</span>=<span class="pl-s1"><span class="pl-pds">"</span>weight<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>row items-center q-mb-md<span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="file-style-typography-example-vue-LC19" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">div</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>col-sm-3 col-12<span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="file-style-typography-example-vue-LC20" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">q-chip</span>&nbsp;<span class="pl-e">color</span>=<span class="pl-s"><span class="pl-pds">"</span>primary<span class="pl-pds">"</span></span>&nbsp;<span class="pl-e">square</span>&gt;.text-weight-{{ weight }}&lt;/<span class="pl-ent">q</span><span class="pl-e">-chip</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="file-style-typography-example-vue-LC21" class="blob-code blob-code-inner js-file-line">      &lt;/<span class="pl-ent">div</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="file-style-typography-example-vue-LC22" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">div</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>col-sm-9 col-12 q-mb-none q-pl-md q-pt-sm q-pb-sm<span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="file-style-typography-example-vue-LC23" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">div</span> :<span class="pl-e">class</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">`</span>text-weight-<span class="pl-s1"><span class="pl-pse">${</span>weight<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span><span class="pl-pds">"</span></span>&gt; Lorem Ipsum is simply dummy text of the printing and typesetting industry.&lt;/<span class="pl-ent">div</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="file-style-typography-example-vue-LC24" class="blob-code blob-code-inner js-file-line">      &lt;/<span class="pl-ent">div</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="file-style-typography-example-vue-LC25" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="file-style-typography-example-vue-LC26" class="blob-code blob-code-inner js-file-line">
        </td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="file-style-typography-example-vue-LC27" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">p</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>caption<span class="pl-pds">"</span></span>&gt;Blockquotes&lt;/<span class="pl-ent">p</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="file-style-typography-example-vue-LC28" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">blockquote</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="file-style-typography-example-vue-LC29" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">p</span>&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/<span class="pl-ent">p</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="file-style-typography-example-vue-LC30" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">small</span>&gt;Someone famous for &lt;<span class="pl-ent">cite</span>&nbsp;<span class="pl-e">title</span>=<span class="pl-s"><span class="pl-pds">"</span>Quasar Framework<span class="pl-pds">"</span></span>&gt;Quasar Framework&lt;/<span class="pl-ent">cite</span>&gt;&lt;/<span class="pl-ent">small</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="file-style-typography-example-vue-LC31" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">blockquote</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="file-style-typography-example-vue-LC32" class="blob-code blob-code-inner js-file-line">
        </td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="file-style-typography-example-vue-LC33" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">blockquote</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>text-right<span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="file-style-typography-example-vue-LC34" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">p</span>&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/<span class="pl-ent">p</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="file-style-typography-example-vue-LC35" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">small</span>&gt;Someone famous for &lt;<span class="pl-ent">cite</span>&nbsp;<span class="pl-e">title</span>=<span class="pl-s"><span class="pl-pds">"</span>Quasar Framework<span class="pl-pds">"</span></span>&gt;Quasar Framework&lt;/<span class="pl-ent">cite</span>&gt;&lt;/<span class="pl-ent">small</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="file-style-typography-example-vue-LC36" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">blockquote</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="file-style-typography-example-vue-LC37" class="blob-code blob-code-inner js-file-line">
        </td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="file-style-typography-example-vue-LC38" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">p</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>caption<span class="pl-pds">"</span></span>&gt;Definition Lists - Vertical&lt;/<span class="pl-ent">p</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="file-style-typography-example-vue-LC39" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">dl</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="file-style-typography-example-vue-LC40" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">dt</span>&gt;Description lists&lt;/<span class="pl-ent">dt</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="file-style-typography-example-vue-LC41" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">dd</span>&gt;A description list is perfect for defining terms.&lt;/<span class="pl-ent">dd</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="file-style-typography-example-vue-LC42" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">dt</span>&gt;Euismod&lt;/<span class="pl-ent">dt</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="file-style-typography-example-vue-LC43" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">dd</span>&gt;Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.&lt;/<span class="pl-ent">dd</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="file-style-typography-example-vue-LC44" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">dd</span>&gt;Donec id elit non mi porta gravida at eget metus.&lt;/<span class="pl-ent">dd</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="file-style-typography-example-vue-LC45" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">dt</span>&gt;Malesuada porta&lt;/<span class="pl-ent">dt</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="file-style-typography-example-vue-LC46" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">dd</span>&gt;Etiam porta sem malesuada magna mollis euismod.&lt;/<span class="pl-ent">dd</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="file-style-typography-example-vue-LC47" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">dl</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="file-style-typography-example-vue-LC48" class="blob-code blob-code-inner js-file-line">
        </td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="file-style-typography-example-vue-LC49" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">p</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>caption<span class="pl-pds">"</span></span>&gt;Definition Lists - Horizontal&lt;/<span class="pl-ent">p</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="file-style-typography-example-vue-LC50" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">dl</span>&nbsp;<span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>horizontal<span class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="file-style-typography-example-vue-LC51" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">dt</span>&gt;Description lists&lt;/<span class="pl-ent">dt</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="file-style-typography-example-vue-LC52" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">dd</span>&gt;A description list is perfect for defining terms.&lt;/<span class="pl-ent">dd</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="file-style-typography-example-vue-LC53" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">dt</span>&gt;Euismod&lt;/<span class="pl-ent">dt</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="file-style-typography-example-vue-LC54" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">dd</span>&gt;Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.&lt;/<span class="pl-ent">dd</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="file-style-typography-example-vue-LC55" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">dd</span>&gt;Donec id elit non mi porta gravida at eget metus.&lt;/<span class="pl-ent">dd</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="file-style-typography-example-vue-LC56" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">dt</span>&gt;Malesuada porta&lt;/<span class="pl-ent">dt</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="file-style-typography-example-vue-LC57" class="blob-code blob-code-inner js-file-line">      &lt;<span class="pl-ent">dd</span>&gt;Etiam porta sem malesuada magna mollis euismod.&lt;/<span class="pl-ent">dd</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="file-style-typography-example-vue-LC58" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">dl</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="file-style-typography-example-vue-LC59" class="blob-code blob-code-inner js-file-line">  &lt;/<span class="pl-ent">q-page</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="file-style-typography-example-vue-LC60" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">template</span>&gt;</td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="file-style-typography-example-vue-LC61" class="blob-code blob-code-inner js-file-line">
        </td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="file-style-typography-example-vue-LC62" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&lt;<span class="pl-ent">script</span>&gt;</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="file-style-typography-example-vue-LC63" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-k">export</span>&nbsp;<span class="pl-c1">default</span> {</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="file-style-typography-example-vue-LC64" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&nbsp;&nbsp;<span class="pl-en">data</span> () {</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="file-style-typography-example-vue-LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">return</span> {</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="file-style-typography-example-vue-LC66" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      headings<span class="pl-k">:</span> [</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="file-style-typography-example-vue-LC67" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        {label<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>Light 112sp<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>class<span class="pl-pds">'</span></span><span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>q-display-4<span class="pl-pds">'</span></span>, equivalent<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>h1<span class="pl-pds">'</span></span>, color<span class="pl-k">:</span>&nbsp;<span class="pl-c1">54</span>, weight<span class="pl-k">:</span>&nbsp;<span class="pl-c1">300</span>},</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="file-style-typography-example-vue-LC68" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        {label<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>Regular 56sp<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>class<span class="pl-pds">'</span></span><span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>q-display-3<span class="pl-pds">'</span></span>, equivalent<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>h2<span class="pl-pds">'</span></span>, color<span class="pl-k">:</span>&nbsp;<span class="pl-c1">54</span>, weight<span class="pl-k">:</span>&nbsp;<span class="pl-c1">400</span>},</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="file-style-typography-example-vue-LC69" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        {label<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>Regular 45sp<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>class<span class="pl-pds">'</span></span><span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>q-display-2<span class="pl-pds">'</span></span>, equivalent<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>h3<span class="pl-pds">'</span></span>, color<span class="pl-k">:</span>&nbsp;<span class="pl-c1">54</span>, weight<span class="pl-k">:</span>&nbsp;<span class="pl-c1">400</span>},</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="file-style-typography-example-vue-LC70" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        {label<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>Regular 34sp<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>class<span class="pl-pds">'</span></span><span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>q-display-1<span class="pl-pds">'</span></span>, equivalent<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>h4<span class="pl-pds">'</span></span>, color<span class="pl-k">:</span>&nbsp;<span class="pl-c1">54</span>, weight<span class="pl-k">:</span>&nbsp;<span class="pl-c1">400</span>},</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="file-style-typography-example-vue-LC71" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        {label<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>Regular 24sp<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>class<span class="pl-pds">'</span></span><span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>q-headline<span class="pl-pds">'</span></span>, equivalent<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>h5<span class="pl-pds">'</span></span>, color<span class="pl-k">:</span>&nbsp;<span class="pl-c1">87</span>, weight<span class="pl-k">:</span>&nbsp;<span class="pl-c1">400</span>},</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="file-style-typography-example-vue-LC72" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        {label<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>Medium 20sp<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>class<span class="pl-pds">'</span></span><span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>q-title<span class="pl-pds">'</span></span>, equivalent<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>h6<span class="pl-pds">'</span></span>, color<span class="pl-k">:</span>&nbsp;<span class="pl-c1">87</span>, weight<span class="pl-k">:</span>&nbsp;<span class="pl-c1">500</span>},</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="file-style-typography-example-vue-LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        {label<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>Regular 16sp<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>class<span class="pl-pds">'</span></span><span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>q-subheading<span class="pl-pds">'</span></span>, color<span class="pl-k">:</span>&nbsp;<span class="pl-c1">87</span>, weight<span class="pl-k">:</span>&nbsp;<span class="pl-c1">400</span>},</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="file-style-typography-example-vue-LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        {label<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>Medium 14sp<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>class<span class="pl-pds">'</span></span><span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>q-body-2<span class="pl-pds">'</span></span>, color<span class="pl-k">:</span>&nbsp;<span class="pl-c1">87</span>, weight<span class="pl-k">:</span>&nbsp;<span class="pl-c1">500</span>},</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="file-style-typography-example-vue-LC75" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        {label<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>Regular 14sp<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>class<span class="pl-pds">'</span></span><span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>q-body-1<span class="pl-pds">'</span></span>, color<span class="pl-k">:</span>&nbsp;<span class="pl-c1">87</span>, weight<span class="pl-k">:</span>&nbsp;<span class="pl-c1">400</span>},</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="file-style-typography-example-vue-LC76" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        {label<span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>Regular 12sp<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>class<span class="pl-pds">'</span></span><span class="pl-k">:</span>&nbsp;<span class="pl-s"><span class="pl-pds">'</span>q-caption<span class="pl-pds">'</span></span>, color<span class="pl-k">:</span>&nbsp;<span class="pl-c1">54</span>, weight<span class="pl-k">:</span>&nbsp;<span class="pl-c1">400</span>}</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="file-style-typography-example-vue-LC77" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      ],</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="file-style-typography-example-vue-LC78" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      weights<span class="pl-k">:</span> [</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="file-style-typography-example-vue-LC79" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        <span class="pl-s"><span class="pl-pds">'</span>thin<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>light<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>regular<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>medium<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>bold<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>bolder<span class="pl-pds">'</span></span></span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="file-style-typography-example-vue-LC80" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      ]</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="file-style-typography-example-vue-LC81" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    }</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="file-style-typography-example-vue-LC82" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">  }</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="file-style-typography-example-vue-LC83" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">}</span></td>
      </tr>
      <tr>
        <td id="file-style-typography-example-vue-L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="file-style-typography-example-vue-LC84" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&lt;/<span class="pl-ent">script</span>&gt;</span></td>
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
