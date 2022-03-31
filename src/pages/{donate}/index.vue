<template>
  <q-page-container>
    <q-page id="content" class="q-pa-lg">
      <img class="platform" alt="Quasar Platforms" src="quasar/responsive-logo.png">
      <h1>Support Quasar Development</h1>
      <p>The Quasar Framework is a feature-complete, material-design compliant, MIT-licensed FOSS project that is completely free to use for both open-source and commercial derivative products. Its success has everything to do with you and all of the members of our community, because experience has shown that sooner or later everyone gives something back.</p>
      <p>No matter if you are working on an open-source project or if you undertaking commercial work with Quasar, there are always ways to nourish the ecosystem. Letting us know about problems you are facing and features you need are great and simple ways to help keep Quasar safe, secure and ultra-modern. Participating in code refactoring and documentation enhancement are also proven patterns for demonstrating your conviction that open-source creates community and makes the world a better place. When Quasar starts to bring you some financial stability, please be considerate of the tens of thousands of hours that went into its creation and send some money back to the team that made it possible. And finally, if your company relies on Quasar, the best way to guarantee that Quasar continues to be there for you is to invest in its maintenance!</p>
      <p>If you or your company need an invoice for bookkeeping purposes, please get in touch with us via e-mail (razvan.stoenescu@gmail.com) before you transfer any funds.</p>
      <q-btn-group push>
        <q-btn push label="Patreon" icon="card_giftcard" @click="goPatreon" />
      </q-btn-group><br><br>
      <div class="row">
        <div class="col">
          <q-card inline class="q-ma-sm text-center">
            <q-card-section>
              <img class="qr-code" src="donate/Bitcoin_QR_code.png">
            </q-card-section>
            <q-card-section>
              <div class="text-subtitle2">Bitcoin</div>
              <span>3358xDasBXGVMu31U3fxwh9u8yAMBjpaaY</span>
            </q-card-section>
          </q-card>
        </div>
        <div class="col">
          <q-card inline class="q-ma-sm text-center">
            <q-card-section>
              <img class="qr-code" src="donate/Litecoin_QR_code.png">
            </q-card-section>
            <q-card-section>
              <div class="text-subtitle2">Litecoin</div>
              <span>MDnrNfVYiCL8Pm4PMn18uNtZBv3vMVH8FG</span>
            </q-card-section>
          </q-card>
        </div>
        <div class="col">
          <q-card inline class="q-ma-sm text-center">
            <q-card-section>
              <img class="qr-code" src="donate/Ethereum_QR_code.png">
            </q-card-section>
            <q-card-section>
              <div class="text-subtitle2">Ethereum</div>
              <span>0x6e62dda120685be5c7b374d408f3fc5b0e92ad99</span>
            </q-card-section>
          </q-card>
        </div>
      </div><br>
      <blockquote>
        <p>"Quasar appeared because I felt that a full featured framework to build Responsive websites, PWAs (Progressive Web Apps), Native Mobile Apps (Android, iOS) and Electron apps simultaneously (using same code-base) was missing. So I quit my job to make this idea a reality."</p>
        <small>Razvan Stoenescu</small>
      </blockquote><br>
      <p>Join us and help ensure that Quasar survives and evolves!</p>
    </q-page>
  </q-page-container>
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

<style lang="scss">
img {
  &.qr-code {
    width: 180px;
    height: 180px;
    margin: auto;
  }
  &.platform {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
</style>
