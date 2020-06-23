<template>
  <Page>
    <div class="accent--text" style="padding-top: 50px; font-size:40px; font-weight: 400;">
      Hello,
    </div>
    <div class="accent--text" style="padding-top:0px; font-size:18px; font-weight: 300;">
      Welcome to my blog:
    </div>

    <Entry title="Battle Cards" :img="require('@/assets/cards.svg')"
      link="https://jacobbusfield.github.io/BattleCards/">
      This is a description. With
      <span style="font-weight:bold">peerjs</span> and
      <span style="font-weight:bold">dynamoDB</span>. This is a work in
      progress!
    </Entry>

    <Entry title="Guitar" :img="require('@/assets/guitar.svg')" link="https://jacobbusfield.github.io/Guitar/">
      This is also a description. This is a work in progress!
    </Entry>

    <Entry title="The Island" :img="require('@/assets/castle.svg')" link="https://jacobbusfield.github.io/TheIsland/">
      A game I made solo for a 24 hour Game Jam event. 2-player local game. Made using <span
        style="font-weight:bold">Phaser</span> in a time before ES6.
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