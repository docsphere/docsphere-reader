const langs = [
  'en-US',
  'pt-BR'
]
const i18n = {}
// @ Import pages
// boot
import boot from 'pages/boot'
// index
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

// @ Iterate langs
for (const lang of langs) {
  i18n[lang] = require(`./${lang}/index.hjson`)

  // @ Iterate pages
  for (const [key, page] of Object.entries(pages)) {
    const path = key.slice(1)

    const config = page.config
    const data = page.data
    const meta = page.meta || boot.meta

    // ---

    const dirs = path.split('/')
    const _ = dirs.reduce((accumulator, current) => {
      let node = accumulator[current]

      // Set object if not exists
      if (node === undefined) {
        accumulator[current] = {}

        node = accumulator[current]
      }

      // @ Set metadata
      // title
      if (node._ === undefined) {
        node._ = data[lang]?.title || data['*']?.title
      }

      if (config === null) {
        return node
      }

      // Set subpages sources if not exists
      if (node.overview === undefined) {
        node.overview = {
          _translations: meta[lang].overview?._translations,
          _sections: meta[lang].overview?._sections,
          source: ''
        }
      }
      if (config.subpages.showcase && node.showcase === undefined) {
        node.showcase = {
          _translations: meta[lang].showcase?._translations,
          _sections: meta[lang].showcase?._sections,
          source: ''
        }
      }
      if (config.subpages.vs && node.vs === undefined) {
        node.vs = {
          _translations: meta[lang].vs?._translations,
          _sections: meta[lang].vs?._sections,
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
