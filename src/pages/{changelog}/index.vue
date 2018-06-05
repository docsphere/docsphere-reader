<template>
  <q-scroll-area id="standard">
    <div id="main">
      <q-card>
        <q-card-title>v0.16.0</q-card-title>
        <q-card-separator />
        <q-card-main>
          <p>The difference between Quasar v0.15.x and v0.16 is minimal. No big breaking changes as you can see below. The only reason for bumping Quasar's version is to maintain consistency (same major + minor version) with Quasar CLI (which got an important update: webpack 4, babel 7, Workbox, electron-builder support, ionicons v4 and many more).</p>
          <p>Upgrading from v0.15.x should be seamless if you are using Quasar CLI -- which will guide you to do some minor changes to your project folder. Note that Ionicons v4 has breaking changes, so if you are using it in your project, then you need to update each such icon to its new name.</p>
          <h2>Breaking Changes</h2>
          <ul>
            <li>QIcon: removed "mat" & "ios" props for performance reasons (use <code>:name="$q.theme === 'mat' ? val : otherVal"</code> instead)</li>
            <li>Removed utils > dom > viewport() method (use window.innerHeight/innerWidth instead)</li>
            <li>Updated Quasar ionicons set to Ionicons v4 -- compatible with quasar-extras@2.0</li>
          </ul>
          <h2>New</h2>
          <ul>
            <li>[Request] QBtn router handling ("to" and "replace" props) #2058</li>
            <li>Improved perf for utils > event by removing legacy IE &lt; 11 code</li>
            <li>QFab "icon" prop is now optional</li>
          </ul>
          <h2>Fixes</h2>
          <ul>
            <li>LayoutDrawer mini mode: still animating when hidden #2059</li>
          </ul>
        </q-card-main>
      </q-card>
    </div>
  </q-scroll-area>
</template>

<script>
export default {}
</script>

<style scoped></style>
