<template>
  <d-page disable-nav :nodes="nodes">
    <d-page-h h="3-1" />

    <div v-for="heading in headings" :key="heading.class" class="row items-center q-mb-lg">
      <div class="col-sm-3 col-12">
        <q-chip color="primary" square>.{{ heading.class }}</q-chip>
        <q-chip color="secondary" square v-if="heading.equivalent">{{ heading.equivalent }}</q-chip>
      </div>
      <div class="col-sm-9 col-12 q-pl-md q-pt-md">
        <div class="q-mb-md" :class="[heading.class, `${heading.class}-opacity`]">{{ heading.label }}</div>
        <div class="text-weight-light">
          black <strong>{{ heading.color }}%</strong>, font weight <strong>{{ heading.weight }}</strong>
        </div>
      </div>
    </div>

    <d-page-h h="3-2" />

    <div v-for="weight in weights" :key="weight" class="row items-center q-mb-md">
      <div class="col-sm-3 col-12">
        <q-chip color="primary" square>.text-weight-{{ weight }}</q-chip>
      </div>
      <div class="col-sm-9 col-12 q-mb-none q-pl-md q-pt-sm q-pb-sm">
        <div :class="`text-weight-${weight}`"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      </div>
    </div>

    <d-page-h h="3-3" />

    <blockquote>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <small>Someone famous for <cite title="Quasar Framework">Quasar Framework</cite></small>
    </blockquote>

    <blockquote class="text-right">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <small>Someone famous for <cite title="Quasar Framework">Quasar Framework</cite></small>
    </blockquote>

    <d-page-h h="3-4" />

    <dl>
      <dt>Description lists</dt>
      <dd>A description list is perfect for defining terms.</dd>
      <dt>Euismod</dt>
      <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
      <dd>Donec id elit non mi porta gravida at eget metus.</dd>
      <dt>Malesuada porta</dt>
      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
    </dl>

    <d-page-h h="3-5" />

    <dl class="horizontal">
      <dt>Description lists</dt>
      <dd>A description list is perfect for defining terms.</dd>
      <dt>Euismod</dt>
      <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
      <dd>Donec id elit non mi porta gravida at eget metus.</dd>
      <dt>Malesuada porta</dt>
      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
    </dl>
  </d-page>
</template>

<script>
import Showcase from 'src/pages/showcase'

export default {
  mixins: [Showcase],

  data () {
    return {
      nodes: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }
      ],
      headings: [
        { label: 'Light 112sp', class: 'text-h1', equivalent: 'h1', color: 54, weight: 300 },
        { label: 'Regular 56sp', class: 'text-h2', equivalent: 'h2', color: 54, weight: 400 },
        { label: 'Regular 45sp', class: 'text-h3', equivalent: 'h3', color: 54, weight: 400 },
        { label: 'Regular 34sp', class: 'text-h4', equivalent: 'h4', color: 54, weight: 400 },
        { label: 'Regular 24sp', class: 'text-h5', equivalent: 'h5', color: 87, weight: 400 },
        { label: 'Medium 20sp', class: 'text-h6', equivalent: 'h6', color: 87, weight: 500 },
        { label: 'Regular 16sp', class: 'text-subtitle1', color: 87, weight: 400 },
        { label: 'Medium 14sp', class: 'text-body2', color: 87, weight: 500 },
        { label: 'Regular 14sp', class: 'text-body1', color: 87, weight: 400 },
        { label: 'Regular 12sp', class: 'text-caption', color: 54, weight: 400 }
      ],
      weights: [
        'thin', 'light', 'regular', 'medium', 'bold', 'bolder'
      ]
    }
  }
}
</script>
