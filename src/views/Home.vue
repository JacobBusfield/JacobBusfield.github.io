<template>
  <Page>
    <div class="accent--text" style="padding-top: 50px; font-size:40px; font-weight: 400;">
      Hello,
    </div>
    <div class="accent--text" style="padding-top:0px; font-size:18px; font-weight: 300;">
      Welcome to my blog:
    </div>

    <Entry title="Guitar" :img="require('@/assets/guitar.svg')" link="https://jacobbusfield.github.io/Guitar/">
      A thrown together Karplus-Strong guitar synthesiser based upon the original ActionScipt from André Michelle and
      blog post by Matthew Rahtz (<a href="http://amid.fish/" target="_blank">amid.fish</a>). Full credit for this
      project must go to them. The code is among of the worst I've written, but hopefully the app itself is interesting
      (Jun 2020).
    </Entry>

    <Entry title="The Island" :img="require('@/assets/castle.svg')" link="https://jacobbusfield.github.io/TheIsland/">
      A game I made alone for a 24 hour Game Jam event. It is a 2-player local game made using <span
        style="font-weight:bold">Phaser</span> in a time before ES6. As it was made for a game jam, don't expect great
      code
      here! (Dec 2016).
    </Entry>

    <Entry title="Under Construction" :img="require('@/assets/logo.svg')">
      Something will be put here soon.
    </Entry>
  </Page>
</template>

<script lang="ts">
  // @ is an alias to /src
  import Page from '@/components/Page.vue';
  import Entry from '@/components/Entry.vue';

  export default {
    name: 'Home',
    components: {
      Page,
      Entry,
    },
  };
</script>