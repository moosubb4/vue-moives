<template>
  <div class="home">
    <h1>Movies Page</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div class="card-container">
        <MovieCard class="card-item" v-for="item in MovieData" :key="item.id"  :data="item" />
    </div>

    <Paginator :data="MovieConfig" @page="getMovie($event)" /> 

   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Movie, MovieTotal } from "@/models";

import MovieCard from "@/components/MovieCard";
import Paginator from "@/components/Paginator";

import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";

@Component({
  components: {
    MovieCard,
    Paginator
  },
  subscriptions(this: Vue) {
    return {
      // dataMov: this
    };
  }
})
export default class MoviePage extends Vue {
  public MovieData: Movie[] = [];
  public MovieConfig: MovieTotal = {};

  public dataMov: any[] = [];

  public created() {
    this.getMovie();
  }

  public getMovie(event?: number) {
    // ?language=th-TH
    const options = {
      params: {
        api_key: "22dbd915ba93d8eab2121edf01a8382d",
        page: event
      }
    };

    return Axios.get<AxiosResponse>("/discover/movie", options)
      .then(res => {
        if (res) {
          const data: MovieTotal = res.data;
          const { page, total_results, total_pages, results } = data;
          console.log("​getMovie -> data", data);

          this.MovieData = data.results;
          this.MovieData.map(e => {
            e.poster_path = `https://image.tmdb.org/t/p/w500${e.poster_path}`;
            e.backdrop_path = `https://image.tmdb.org/t/p/original${
              e.backdrop_path
            }`;
          });

          this.MovieConfig = { page, total_results, total_pages };
          console.log("getMovie", this.MovieData, "\nConfig", this.MovieConfig);
        }
      })
      .catch(err => console.log("getMovie err", err));
  }
}
</script>

<style>
.card-container {
  padding: 0 100px;
  display: inline-flex;
  /* flex-direction: row;
  flex-wrap: wrap; */
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
}

.card-item {
  order: 0;
  flex-shrink: 1;
  flex-basis: 10%;
}
</style>
