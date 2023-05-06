import { boot } from 'quasar/wrappers'

import QZoom from '../components/QZoom'

export default boot(({ app }) => {
  app.component('QZoom', QZoom)
})
