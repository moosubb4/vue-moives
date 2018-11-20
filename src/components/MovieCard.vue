<template>
  <div class="appcard">
    <div>
          <img :src="data.poster_path" alt="">
          <p>{{data.title}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Movie, MovieTotal } from '@/models';

@Component
export default class MovieCard extends Vue {
  @Prop() private data: Movie;

  public created() {
    // console.log('MovieCard', this.data);
  }
}
</script>

<style scoped>
.appcard {
  border: solid 1px red;
  margin: 5px 15px;
  padding: 5px;
  width: 200px;
}

img {
  width: 100%;
}
</style>
