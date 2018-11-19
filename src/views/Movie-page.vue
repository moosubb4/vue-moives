<template>
  <div class="home">
    <h1>Movies Page</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div class="card-container">
      <!-- <div class="card-item" > -->
        <div class="card-item" :key="item.id" v-for="item in MovieData">
          <img :src="item.poster_path" alt="">
          <p>{{item.title}}</p>
        </div>
      <!-- </div> -->
    </div>

   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Axios from "axios";

export interface Movie {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
}

export interface MovieTotal {
  page?: number;
  total_results?: number;
  total_pages?: number;
  results?: Movie[];
}

@Component({})
export default class MoviePage extends Vue {
  public MovieData: Movie[] = [];
  public MovieConfig: MovieTotal = {};

  public created() {
    this.getMovie();
  }

  public getMovie() {
    // ?language=th-TH
    const params = {
      api_key: "22dbd915ba93d8eab2121edf01a8382d"
    };

    Axios.get("/discover/movie", { params })
      .then(res => {
        console.log("getMovie", res);
        if (res) {
          const { page, total_results, total_pages, results } = res.data;

          this.MovieData = results;
          this.MovieData.map(
            e =>
              (e.poster_path = `https://image.tmdb.org/t/p/w500${
                e.poster_path
              }`)
          );
          this.MovieConfig = { page, total_results, total_pages };
        }
        console.log("getMovie", this.MovieData, "\n", this.MovieConfig);
      })
      .catch(err => console.log("getMovie err", err));
  }
}
</script>

<style>
.card-container {
  display: inline-flex;
  flex-wrap: wrap;
}

.card-item {
  order: 0;
  margin: 0 15px;
  width: 175px;
}

img {
  height: 250px;
}
</style>
