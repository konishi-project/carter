<template>
  <div id="app">
    <Post :post="post" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Post from './components/Post.vue';
import state from './random-state';

@Component({
  components: {
    Post,
  },
})
export default class App extends Vue {
  get post() {
    return state.posts[0];
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
