<template>
  <v-card style="margin-top:50px; border-radius: 10px">
    <v-layout>
      <v-flex shrink>
        <v-card class="white--text" color="primary" style="height: 100%; padding: 10px; border-radius: 10px 0 0 10px;">
          <v-container fill-height style="padding:0">
            <v-img :height="$vuetify.breakpoint.smAndDown ? 64 : 128" :width="$vuetify.breakpoint.smAndDown ? 64 : 128"
              contain :src="img"></v-img>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex style="background: #BBDEFB; border-radius: 10px;">
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
    },
  });
</script>