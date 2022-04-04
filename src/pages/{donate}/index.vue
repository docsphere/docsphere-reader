<template lang="pug">
q-page-container
  q-page#content.q-pa-lg
    img.platform(alt="Quasar Platforms" src="quasar/responsive-logo.png")
    h1 Support Quasar Development
    p The Quasar Framework is a feature-complete, material-design compliant, MIT-licensed FOSS project that is completely free to use for both open-source and commercial derivative products. Its success has everything to do with you and all of the members of our community, because experience has shown that sooner or later everyone gives something back.
    p No matter if you are working on an open-source project or if you undertaking commercial work with Quasar, there are always ways to nourish the ecosystem. Letting us know about problems you are facing and features you need are great and simple ways to help keep Quasar safe, secure and ultra-modern. Participating in code refactoring and documentation enhancement are also proven patterns for demonstrating your conviction that open-source creates community and makes the world a better place. When Quasar starts to bring you some financial stability, please be considerate of the tens of thousands of hours that went into its creation and send some money back to the team that made it possible. And finally, if your company relies on Quasar, the best way to guarantee that Quasar continues to be there for you is to invest in its maintenance!
    p If you or your company need an invoice for bookkeeping purposes, please get in touch with us via e-mail (razvan.stoenescu@gmail.com) before you transfer any funds.
    q-btn-group(push)
      q-btn(push label="Patreon" icon="card_giftcard" @click="goPatreon")
    br
    br
    .row
      .col.col-xs-12
        q-card.q-ma-sm.text-center(inline)
          q-card-section
            img.qr-code(src="donate/Bitcoin_QR_code.png")
          q-card-section
            .text-subtitle2 Bitcoin
            span 3358xDasBXGVMu31U3fxwh9u8yAMBjpaaY
      .col.col-xs-12
        q-card.q-ma-sm.text-center(inline)
          q-card-section
            img.qr-code(src="donate/Litecoin_QR_code.png")
          q-card-section
            .text-subtitle2 Litecoin
            span MDnrNfVYiCL8Pm4PMn18uNtZBv3vMVH8FG
      .col.col-xs-12
        q-card.q-ma-sm.text-center(inline)
          q-card-section
            img.qr-code(src="donate/Ethereum_QR_code.png")
          q-card-section
            .text-subtitle2 Ethereum
            span 0x6e62dda120685be5c7b374d408f3fc5b0e92ad99
    br
    blockquote
      p &quot;Quasar appeared because I felt that a full featured framework to build Responsive websites, PWAs (Progressive Web Apps), Native Mobile Apps (Android, iOS) and Electron apps simultaneously (using same code-base) was missing. So I quit my job to make this idea a reality.&quot;
      small Razvan Stoenescu
    br
    p Join us and help ensure that Quasar survives and evolves!
</template>

<script>
export default {
  methods: {
    goPatreon () {
      window.open('https://www.patreon.com/quasarframework', '_blank')
    }
  }
}
</script>

<style lang="sass">
img
  &.qr-code
    width: 180px
    height: 180px
    margin: auto
  &.platform
    padding-top: 30px
    padding-bottom: 30px
</style>
