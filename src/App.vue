<template>
  <v-app>
    <v-app-bar app color='primary' dark>
      <v-btn @click='$router.push("/")' text>
        Jacob's Site Under Construction
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn v-for='link in links' :key='link.name' :to='link.url' text>
        <span>{{link.name}}</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang='ts'>
  import Vue from 'vue';

  export default Vue.extend({
    name: 'App',

    data: () => ({
      links: [{
          name: 'Home',
          url: '/',
        },
        {
          name: 'About',
          url: 'about',
        },
      ],
    }),
  });
</script>