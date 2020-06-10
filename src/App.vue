<template>
  <v-app>
    <v-app-bar app dark color='primary'>
      <v-btn @click='() => { if ($route.path !== "/"){$router.push("/")}}' text>
        <v-img height="48" width="48" contain :src="require('./assets/logo.svg')"></v-img>
        <span class="accent--text"
          style="font-size:20px; text-transform: capitalize; font-weight: 400; margin-left: 20px;">
          Jacob Busfield
        </span>
      </v-btn>

      <v-spacer></v-spacer>

      <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn class="accent--text" v-for='link in links' :key='link.name' :to='link.url' text>
          <span>{{link.name}}</span>
        </v-btn>
      </div>

      <v-btn class="accent--text" v-else text @click.stop="drawer = !drawer">
        <v-icon style="font-size:24pt">
          mdi-menu
        </v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer dark color='primary' v-model="drawer" absolute temporary>
      <v-list>
        <v-list-item v-for="link in links" :key="link.name" link :to="link.url">
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
      drawer: false,
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