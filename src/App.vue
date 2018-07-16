<template>
  <div id="app">
    <Navbar/>
    <div id="feed" class="section">
      <div class="container is-block-desktop" style="max-width: 600px;">
        <Post :post="post"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Post from '@/components/Post.vue';
import Navbar from '@/components/Navbar.vue';
import state from './random-state';

@Component({
  components: {
    Navbar,
    Post,
  },
})
export default class App extends Vue {
  get post() {
    return state.posts[0];
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";


// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   align-content: center;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
