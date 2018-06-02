export default {
  _: {
    home: {
      p1: 'Use sidebar to browse through demos, which showcase only a few of the Quasar components and features. ('
    },

    starting: {
      _: 'Getting started',
      intro: {
        _: 'Introduction for Beginners',
        overview: {
          h: [
            'Single File Vue Components',
            'CSS preprocessors',
            'Using Quasar Directive',
            'Using Quasar Components'
          ],
          p: [
            'Before you begin with Quasar, it is a good idea to get acquainted with ES6 and have a fairly good knowledge about how Vue works. (',
            ' – don’t worry, you don’t need to understand ALL of ES6). For devs experienced with reactive UIs, ',
            ' itself takes half a day at most to read top-to-bottom and will help you understand how Quasar components can be used and configured.',
            'If you are a total beginner to Vue and reactive UI libraries and want a good tutorial, we recommend you take a look at the ',
            'After reading the Vue documentation, let’s clear up some of the most frequently asked questions, like “How can I use Quasar components, Vue properties, methods and events”.',
            'You’ll be building your Quasar app using',
            'files which contain multiple sections: ‘template’ (HTML), ‘script’ (Javascript) and ‘style’ (CSS).',
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
          l: [
            ['https://github.com/lukehoban/es6features', 'quick overview of ES6'],
            ['http://es6-features.org/#Constants', 'full description'],
            ['https://vuejs.org/v2/guide/', 'the Vue documentation'],
            ['https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview', 'Udemy Course - Vue JS 2 - The Complete Guide'],
            ['http://stylus-lang.com/', 'Stylus'],
            ['https://vuejs.org/v2/guide/custom-directive.html', 'Vue Directives']
          ]
        }
      },
      platform: {_: 'Platform Detection'},
      events: {_: 'Global Event Bus'},
      injections: {_: 'Vue Prototype Injections'},
      i18n: {_: 'Internationalization (i18n)'},
      rtl: {_: 'RTL Support'}
    },

    style: {
      _: 'Style',
      color: {
        _: 'Color Palette',
        overview: {
          h: [
            'Brand Colors',
            'Color List',
            'Using as CSS Classes',
            'Using Stylus Variables',
            'Adding Your Own Colors'
          ],
          p: [
            'Quasar Framework offers a wide selection of colors out of the box. You can use them both as Stylus variables in your CSS code or directly as CSS classes in your HTML templates.',
            'This page comes really handy after reading ',
            ' You might also want to check '
          ],
          l: [
            ['https://quasar-framework.org/guide/quasar-theming.html', 'Quasar Theming'],
            ['https://quasar-framework.org/components/color-utils.html', 'Color Utils']
          ],

          t1: '',
          p4: 'There can be three main colors used throughout your App, called',
          p5: 'Most of the colors that Quasar Components use are strongly linked with these three colors that you can change. Choosing these colors is the first step one should take when differentiating the design of its own App. You’ll notice immediately on changing their default values that Quasar Components follow these colors as a guideline.',

          t2: '',
          p6: 'Here’s the list of colors provided out of the box. Use them as CSS classes (in HTML templates) or as Stylus variables (in',
          p7: 'tags) within your app’s',
          p8: 'On the following colors there are variations available',
          p9: 'Example of color variation',
          p10: 'See the demo to make a good picture of what variations are. Variation 11 to 14 are color accents',

          t3: '',
          p11: 'Use',
          p12: 'prefixes as class names to change the color of text or the color of the background.',

          t4: '',
          p13: 'In your app’s',
          p14: 'files you can use the colors as',
          p15: 'and so on.',

          t5: '',
          p16: 'If you want to use colors of your own for components, let’s say we are adding a color named “brand”, all you need to do is add the following CSS into your app:',
          p17: 'Now we can use this color for Quasar components:',

          t6: 'Dynamic Change of Brand Colors (Dynamic Theme Colors)'
        },
        showcase: {}
      },
      typography: {
        _: 'Typography'
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
      play: {_: 'Play with Layout'},
      drawer: {_: 'Drawer Panels'},
      sticky: {_: 'Page Sticky'},
      floating: {_: 'Floating Action Button'},
      flexbox: {_: 'Flexbox'}
    },

    components: {
      _: 'Components',
      buttons: {
        _: 'Buttons'
      },
      navigation: {_: 'Navigation'},
      forms: {_: 'Forms'},
      grouping: {_: 'Grouping'},
      popups: {_: 'Popups'},
      progress: {_: 'Progress'},
      media: {_: 'Media'},
      scrolling: {_: 'Scrolling'},
      others: {_: 'Others Components'}
    },

    plugins: {_: 'Plugins'},

    directives: {_: 'Directives'},

    helpers: {
      _: 'Helpers',
      shadows: {_: 'Shadows'}
    },

    animations: {_: 'Animations'},

    utils: {_: 'Utils'}
  },

  toolbar: {
    start: 'Start this page on ',
    complete: 'Complete this page on ',
    edit: 'Edit this page on '
  },
  tools: {
    overview: 'Overview',
    showcase: {
      _: 'Showcase',
      code: 'Showcase Code'
    },
    changelog: 'Changelog WIP',
    builder: {_: 'Builder'}
  },

  menu: {
    search: '',
    home: 'Home',
    settings: 'Settings'
  },

  settings: {
    general: 'General Settings',
    language: {
      label: 'Language'
    }
  },

  _a: ' and ',
  _o: 'or',
  _f: 'files'
}
