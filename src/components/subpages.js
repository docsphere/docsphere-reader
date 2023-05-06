import DPage from 'src/components/DPage'

// Headers
import DH1 from 'src/components/DH1'
import DH2 from 'src/components/DH2'
import DH3 from 'src/components/DH3'
import DH4 from 'src/components/DH4'
import DH5 from 'src/components/DH5'
import DH6 from 'src/components/DH6'

// Sections
import DPageSection from 'src/components/DPageSection'
// -> Source Codes
import DPageSourceCode from 'src/components/DPageSourceCode'

// @ Mixins
import Translation from 'src/i18n/translation'

export default {
  components: {
    DPage,
    // Headers
    DH1,
    DH2,
    DH3,
    DH4,
    DH5,
    DH6,
    // Sections
    DPageSection,
    // -> Source Codes
    DPageSourceCode
  },
  mixins: [Translation]
}
