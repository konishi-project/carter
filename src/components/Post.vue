<template>
    <article class="box">

      <div class="flex mb3">
        <figure class="image is-64x64">
          <img :src="post.author.avatarUrl"/>
        </figure>
        <p class="has-text-weight-bold is-size-5 mh2 mv1">{{ post.author.fullName }}</p>
      </div>

      <p class="has-text-left">{{ post.text }}</p>

      <div class="mv3">
        <figure class="image center">
          <img v-if="post.imageUrl" :src="post.imageUrl"/>
        </figure>
      </div>

      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item buttons">
            <a :class="['button', kekGiven? 'is-dark': '']" @click="toggleKek">
              <span class="icon">
                <i class="fas fa-thumbs-up"></i>
              </span>
              <span>{{ kekString }}</span>
            </a>
          </div>
        </div>
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

  public kekGiven = false;

  get totalKeks() {
    const { keks } = this.post;
    return keks + (this.kekGiven ? 1 : 0);
  }

  get kekString() {
    const keks = this.totalKeks;
    return `${keks > 0 ? keks : ''} Kek${keks > 1 ? 's' : ''}`;
  }

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

  public toggleKek() {
    this.kekGiven = !this.kekGiven;
  }
}
</script>
