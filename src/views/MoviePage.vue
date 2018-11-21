<template>
  <div class="bg-dark">
    <h1>Movies Page</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div class="card-container">
        <div class="card-item-container">
            <div class="card-item" :key="item.id" v-for="item in MovieData">
                <MovieCard :data="item" />
            </div>
        </div>
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
                page: event,
                // language: 'th-TH'
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
.bg-dark {
  /* background-color: #141414; */
}

.card-container {
  /* border: solid 1px red; */
  display: flex;
  padding: 2% 5%;
  /* flex-direction: row;
  flex-wrap: wrap; */
  flex-flow: column nowrap;
  /* justify-content: center; */
  /* align-items: flex-start; */
}

.card-item-container {
  /* border: solid 1px green; */
  display: flex;
  flex-flow: row wrap;
}

.card-item {
  /* border: solid 1px blue; */
  order: 0;
  margin: 5px auto;
  /* width: 250px;
  max-height: 350px; */
  /*  flex-shrink: 0; */
  /* flex-basis: 20%; */
}

.card-item-container::after {
  content: "";
  width: 250px;
  margin: 5px auto;
}

/*small Screen*/
@media screen and (device-width: 320px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait) {
}
</style>
