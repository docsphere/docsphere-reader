export default {
  // Sections
  _: {
    home: {
      texts: [
        'An <b>alternative documentation</b> of ',
        'Created by'
      ]
    },

    starting: {
      _: 'Getting started',
      intro: {
        _: 'Introduction for Beginners',
        overview: {
          _updated_: '2018-06-14T15:29:43.957Z',
          _subsections_: '15',

          headers: [
            'Single File Vue Components',
            'CSS preprocessors',
            'Using Quasar Directive',
            'Using Quasar Components'
          ],
          texts: [
            'Before you begin with Quasar, it is a good idea to get acquainted with ES6 and have a fairly good knowledge about how Vue works. (',
            ' – don’t worry, you don’t need to understand ALL of ES6). For devs experienced with reactive UIs, ',
            ' itself takes half a day at most to read top-to-bottom and will help you understand how Quasar components can be used and configured.',
            'If you are a total beginner to Vue and reactive UI libraries and want a good tutorial, we recommend you take a look at the ',
            'After reading the Vue documentation, let’s clear up some of the most frequently asked questions, like “How can I use Quasar components, Vue properties, methods and events”.',
            'You’ll be building your Quasar app using ',
            ' files which contain multiple sections: ‘template’ (HTML), ‘script’ (Javascript) and ‘style’ (CSS).',
            'For the ',
            'tag, you can also use whatever CSS preprocessor you want. ',
            ' is available out of the box. For SCSS/SASS or LESS, you’ll need to install their Webpack loaders (example: ',
            'After installing the loader you need (remember Stylus is already installed for you), you can specify you want your chosen preprocessor to handle the CSS code you’re writing:',
            'In the above example, you would replace',
            ' with the preprocessor you’ve chosen.',
            'Quasar comes with a few custom ',
            '. These directives can be applied on almost any DOM element or Component.',
            'Example of a Quasar directive:',
            'Notice how Ripple is used in the HTML template as',
            '. Vue directives are prefixed with ',
            'In order for you to use any of the directives that Quasar supplies, you first need to tell Quasar you want it embedded. Open ',
            ' file and add the following reference:',
            'Let’s take another example. We now also want TouchPan and TouchSwipe directives, so we add them too in ',
            'Now we can write in your Vue files template:'
          ],
          links: [
            ['https://github.com/lukehoban/es6features', 'quick overview of ES6'],
            ['http://es6-features.org/#Constants', 'full description'],
            ['https://vuejs.org/v2/guide/', 'the Vue documentation'],
            ['https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview', 'Udemy Course - Vue JS 2 - The Complete Guide'],
            ['http://stylus-lang.com/', 'Stylus'],
            ['https://vuejs.org/v2/guide/custom-directive.html', 'Vue Directives']
          ]
        }
      },
      platform: {
        _: 'Platform Detection'
      },
      events: {
        _: 'Global Event Bus'
      },
      injections: {
        _: 'Vue Prototype Injections'
      },
      i18n: {
        _: 'Internationalization (i18n)'
      },
      rtl: {
        _: 'RTL Support'
      }
    },

    style: {
      _: 'Style',
      color: {
        _: 'Color Palette',
        overview: {
          _updated_: '2018-06-14T15:35:51.537Z',
          _subsections_: '8',

          headers: [
            'Brand Colors',
            'Color List',
            'Using as CSS Classes',
            'Using Stylus Variables',
            'Adding Your Own Colors'
          ],
          texts: [
            'Quasar Framework offers a wide selection of colors out of the box. You can use them both as Stylus variables in your CSS code or directly as CSS classes in your HTML templates.',
            'This page comes really handy after reading ',
            ' You might also want to check ',
            'There can be three main colors used throughout your App, called ',
            'Most of the colors that Quasar Components use are strongly linked with these three colors that you can change. Choosing these colors is the first step one should take when differentiating the design of its own App. You’ll notice immediately on changing their default values that Quasar Components follow these colors as a guideline.',
            'Here’s the list of colors provided out of the box. Use them as CSS classes (in HTML templates) or as Stylus variables (in ',
            ' tags) within your app’s ',
            'On the following colors there are variations available: ',
            'Example of color variation: ',
            ' See the demo to make a good picture of what variations are. Variation 11 to 14 are color accents.',
            'Use ', ' prefixes as class names to change the color of text or the color of the background.',
            'In your app’s ',
            ' files you can use the colors as ',
            ' and so on.',
            'If you want to use colors of your own for components, let’s say we are adding a color named “brand”, all you need to do is add the following CSS into your app:',
            'Now we can use this color for Quasar components:'
          ],
          links: [
            ['https://quasar-framework.org/guide/quasar-theming.html', 'Quasar Theming'],
            ['https://quasar-framework.org/components/color-utils.html', 'Color Utils']
          ],

          p16: '',
          p17: '',

          t6: 'Dynamic Change of Brand Colors (Dynamic Theme Colors)'
        },
        showcase: {
          _updated_: '2018-06-18T18:22:21.789Z',
          _subsections_: '2',

          headers: [
            'Main Colors',
            'Full Pallete'
          ]
        }
      },
      typography: {
        _: 'Typography',
        showcase: {
          _updated_: '2018-06-18T23:06:14.053Z',
          _subsections_: '5',

          headers: [
            'Headings',
            'Weights',
            'Blockquotes',
            'Definition Lists - Vertical',
            'Definition Lists - Horizontal'
          ]
        }
      },
      ripples: {
        _: 'Material Ripples'
      },
      stylus: {
        _: 'Stylus Variables'
      },
      icons: {
        _: 'Icons'
      },
      addressbar: {
        _: 'Addressbar Color'
      }
    },

    layout: {
      _: 'Layout',
      play: {
        _: 'Play with Layout'
      },
      drawer: {
        _: 'Drawer Panels'
      },
      sticky: {
        _: 'Page Sticky'
      },
      floating: {
        _: 'Floating Action Button'
      },
      flexbox: {
        _: 'Flexbox'
      }
    },

    components: {
      _: 'Components',
      buttons: {
        _: 'Buttons',
        standard: { _: 'Standard Buttons' },
        groups: { _: 'Button Groups' },
        dropdown: { _: 'Dropdown Groups' }
      },
      navigation: {
        _: 'Navigation',
        toolbar: { _: 'Toolbar' },
        tabs: { _: 'Tabs' },
        pull: { _: 'Pull to Refresh' },
        context: { _: 'Context Menu' },
        breadcrumbs: { _: 'Breadcrumbs' },
        pagination: { _: 'Pagination' }
      },
      forms: {
        _: 'Forms',
        fields: { _: 'Fields' },
        input: { _: 'Input Textfield' },
        chips: { _: 'Chips Input' },
        color: { _: 'Color Picker' },
        autocomplete: { _: 'Autocomplete' },
        editor: { _: 'Editor (WYSIWYG)' },
        search: { _: 'Search' },
        slider: { _: 'Slider' },
        range: { _: 'Range' },
        checkbox: { _: 'Checkbox' },
        toggle: { _: 'Toggle' },
        button: { _: 'Button Toggle' },
        option: { _: 'Option Group' },
        datetime: { _: 'Date & Time' },
        select: { _: 'Select' },
        rating: { _: 'Rating' },
        knob: { _: 'Knob' },
        uploader: { _: 'Uploader' }
      },
      grouping: {
        _: 'Grouping',
        card: { _: 'Card' },
        collapsible: { _: 'Collapsible' },
        table: { _: 'Data Table' },
        list: { _: 'List' },
        stepper: { _: 'Stepper' },
        tree: { _: 'Tree' }
      },
      popups: {
        _: 'Popups',
        sheet: { _: 'Action Sheet' },
        dialog: { _: 'Dialog' },
        modal: { _: 'Modal' },
        notify: { _: 'Notify' },
        popover: { _: 'Popover' },
        tooltip: { _: 'Tooltip' }
      },
      progress: {
        _: 'Progress',
        ajax: { _: 'Ajax Bar' },
        loading: { _: 'Loading' },
        inner: { _: 'Inner Loading' },
        bar: { _: 'Progress Bar' },
        spinner: { _: 'Spinner' }
      },
      media: {
        _: 'Media',
        carousel: { _: 'Carousel' },
        parallax: { _: 'Parallax' },
        video: { _: 'Video Embedding' }
      },
      scrolling: {
        _: 'Scrolling',
        infinite: { _: 'Infinite Scroll' },
        area: { _: 'Scroll Area' },
        fire: { _: 'Scroll Fire' },
        top: { _: 'Back to Top' }
      },
      others: {
        _: 'Others Components',
        alert: { _: 'Alert' },
        chip: { _: 'Chip' },
        chat: { _: 'Chat' },
        timeline: { _: 'Timeline' }
      }
    },

    plugins: {
      _: 'Plugins',
      cookies: { _: 'Cookies' },
      storage: { _: 'Web Storage' },
      screen: { _: 'Screen' },
      fullscreen: { _: 'App Fullscreen' },
      visibility: { _: 'App Visibility' }
    },

    directives: {
      _: 'Directives',
      panning: { _: 'Panning Touch/Mouse' },
      swipe: { _: 'Swipe Touch/Mouse' },
      hold: { _: 'Touch/Mouse Hold' }
    },

    helpers: {
      _: 'Helpers',
      spacing: { _: 'Spacing' },
      shadows: { _: 'Shadows' },
      visibility: { _: 'Visibility' },
      positioning: { _: 'Positioning' },
      others: { _: 'Others Helpers Classes' }
    },

    animations: {
      _: 'Animations',
      transition: { _: 'Transition' },
      slide: { _: 'Slide' },
      js: { _: 'JS Animations' },
      css: { _: 'Animation CSS Helpers' }
    },

    utils: {
      _: 'Utils',
      date: { _: 'Date Utils' },
      color: { _: 'Color Utils' },
      dom: { _: 'Dom Utils' },
      formatter: { _: 'Formatter Utils' },
      others: { _: 'Others Utils' }
    }
  },

  footer: {
    github: {
      start: 'Start this page on ',
      complete: 'Complete this page on ',
      edit: 'Edit this page on '
    },
    progress: 'Translation Progress',
    translations: 'Available translations',
    anchor: 'Anchor navigation',
    of: 'of'
  },
  submenu: {
    overview: 'Overview',
    showcase: {
      _: 'Showcase',
      code: 'Code'
    },
    changelog: 'Changelog (WIP)',
    builder: {_: 'Builder'}
  },
  menu: {
    search: '',
    home: 'Home',
    settings: 'Settings',
    changelog: 'Changelog',
    _404: '404 Error - Not Found'
  },

  system: {
    support: 'Support Quasar'
  },
  changelog: {},
  settings: {
    general: {
      _: 'General Settings',
      language: { _: 'Language' }
    },
    appearance: {
      _: 'Appearance',
      background: { _: 'Background Color' }
    }
  },

  _a: ' and ',
  _o: ' or ',
  _f: ' files '
}
