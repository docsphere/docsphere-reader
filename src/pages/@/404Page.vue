<template lang="pug">
q-page-container
  q-page.row(padding)
    q-scroll-area.content.col.text-center
      p
        img(src="sad.svg" style="width:30vw;max-width:150px;")
      p.text-faded Sorry, nothing here...
        strong (404)
      q-btn(color="secondary" style="width:200px;" @click="$router.go(-1)") Go back
</template>
