<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="entryCard" :elevation="hover ? 12 : 2"
      :style="{'margin-top' : ($vuetify.breakpoint.smAndDown) ? '15px' : '50px'}"
      style="margin-top:50px; border-radius: 10px; cursor: pointer;"
      href="https://jacobbusfield.github.io/BattleCards/">
      <v-layout>

        <v-flex shrink>
          <v-card class="white--text" color="primary"
            style="height: 100%; padding: 10px; border-radius: 10px 0 0 10px;">
            <v-container fill-height style="padding:0">
              <v-img :height="$vuetify.breakpoint.smAndDown ? 64 : 128"
                :width="$vuetify.breakpoint.smAndDown ? 64 : 128" contain :src="img"></v-img>
            </v-container>
          </v-card>
        </v-flex>

        <v-flex :style="{background: $vuetify.theme.themes.light.accent}" style="border-radius: 0 10px 10px 0;">
          <v-container>
            <div class="primary--text" style="font-size:24px; font-weight: 500;">
              {{title}}
            </div>
            <div class="primary--text" style="font-size: 16px; font-weight: 400;">
              <slot></slot>
            </div>
          </v-container>
        </v-flex>

      </v-layout>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      title: {
        required: true,
        type: String,
      },
      img: {
        required: true,
        type: String,
      },
      link: {
        required: false,
        type: String,
        default: "",
      }
    },
  });
</script>

<style scoped>
  .entryCard:hover {
    filter: brightness(115%);
  }
</style>