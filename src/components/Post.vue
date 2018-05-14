<template>
    <article class="box">

      <div class="mb3">
        <figure class="image is-64x64 mb2">
          <img :src="post.author.avatarUrl"/>
        </figure>
        <p class="has-text-weight-bold">{{ post.author.fullName }}</p>
      </div>

      <p class="has-text-left">{{ post.text }}</p>

      <div class="mv3">
        <figure class="image center">
          <img v-if="post.imageUrl" :src="post.imageUrl"/>
        </figure>
      </div>

      <div class="level">
        <div class="level-left"></div>
        <div class="level-right">
          <p class="level-item has-text-grey-light">{{ prettyTime }}</p>
        </div>
      </div>

    </article>
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
