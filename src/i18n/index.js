const langs = [
  'en-US',
  'pt-BR'
]
const i18n = {}
import pages from 'pages'

function filter (source) {
  const regex1 = /{/gm
  const regex2 = /}/gm
  const regex3 = /([@|])+/gm

  source = source
    .replace(regex1, '&#123;')
    .replace(regex2, '&#125;')
    .replace(regex3, "{'$&'}")

  return source
}
function load (path, subpage, lang) {
  const markdown = require(`pages/${path}/${subpage}.${lang}.md`)

  const content = String(markdown.default)

  const source = filter(content)

  return source
}

for (const lang of langs) {
  i18n[lang] = require(`./${lang}/index.hjson`)

  for (const [key, page] of Object.entries(pages)) {
    const path = key.slice(1)
    const config = page.config
    const data = page.data

    // ---

    const dirs = path.split('/')
    const _ = dirs.reduce((accumulator, current) => {
      let node = accumulator[current]

      // Set object if not exists
      if (node === undefined) {
        accumulator[current] = {}

        node = accumulator[current]
      }

      // Set title if not exists
      if (node._ === undefined) {
        node._ = data[lang]?.title || data['*']?.title
      }

      if (config === null) {
        return node
      }

      // Set subpages sources if not exists
      if (node.overview === undefined) {
        node.overview = {
          source: ''
        }
      }
      if (config.subpages.showcase && node.showcase === undefined) {
        node.showcase = {
          source: ''
        }
      }
      if (config.subpages.vs && node.vs === undefined) {
        node.vs = {
          source: ''
        }
      }

      return node
    }, i18n[lang]._)

    // ---

    if (config === null || config.status === 'empty') {
      continue
    }

    // Overview
    _.overview.source = load(path, 'overview', lang)
    // showcase
    if (config.subpages.showcase === true) {
      _.showcase.source = load(path, 'showcase', lang)
    }
    // Vs
    if (config.subpages.vs === true) {
      _.vs.source = load(path, 'vs', lang)
    }
  }
}

export default i18n
