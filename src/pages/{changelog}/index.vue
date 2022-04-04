<template lang="pug">
q-page-container
  q-page#content.q-pa-lg
    q-card
      q-card-section
        .text-h6 v0.16.0
      q-separator
      q-card-section
        p The difference between Quasar v0.15.x and v0.16 is minimal. No big breaking changes as you can see below. The only reason for bumping Quasar&apos;s version is to maintain consistency (same major + minor version) with Quasar CLI (which got an important update: webpack 4, babel 7, Workbox, electron-builder support, ionicons v4 and many more).
        p Upgrading from v0.15.x should be seamless if you are using Quasar CLI -- which will guide you to do some minor changes to your project folder. Note that Ionicons v4 has breaking changes, so if you are using it in your project, then you need to update each such icon to its new name.
        h2 Breaking Changes
        ul
          li QIcon: removed &quot;mat&quot; &amp; &quot;ios&quot; props for performance reasons (use
            code :name=&quot;$q.theme === &apos;mat&apos; ? val : otherVal&quot;
            | instead)
          li Removed utils &gt; dom &gt; viewport() method (use window.innerHeight/innerWidth instead)
          li Updated Quasar ionicons set to Ionicons v4 -- compatible with quasar-extras@2.0
        h2 New
        ul
          li [Request] QBtn router handling (&quot;to&quot; and &quot;replace&quot; props) #2058
          li Improved perf for utils &gt; event by removing legacy IE &lt; 11 code
          li QFab &quot;icon&quot; prop is now optional
        h2 Fixes
        ul
          li LayoutDrawer mini mode: still animating when hidden #2059
</template>

<script></script>

<style></style>
