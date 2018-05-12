<template>
  <div class="post">

    <div class="post-author">
      <img :src="post.author.avatarUrl"/>
      <p>{{ post.author.fullName }}</p>
    </div>

    <img v-if="post.imageUrl" :src="post.imageUrl"/>

    <p>{{ prettyTime }}</p>

    <p>{{ post.text }}</p>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { INote } from '@/app-state';

@Component
export default class Post extends Vue {
  @Prop() public post!: INote;

  get prettyTime() {
    return this.post.time.toLocaleString('en-US', {
      hour12: true,
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: undefined,
    });
  }
}
</script>

