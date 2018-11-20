<template>
  <div class="home">
    <h1>Movies Page</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div class="backdrop">
        <div class="backdrop-content">
        
        </div>
    </div>

    <div class="card-container">
        <MovieCard class="card-item" v-for="item in MovieData" :key="item.id"  :data="item" />
    </div>

    <Paginator :data="MovieConfig" @page="getMovie($event)" /> 

   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Movie, MovieTotal } from '@/models';

import MovieCard from '@/components/MovieCard';
import Paginator from '@/components/Paginator';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


@Component({
    components: {
        MovieCard,
        Paginator
    },
    subscriptions(this: Vue) {
        return {
            // dataMov: this
        }
    },
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
                api_key: '22dbd915ba93d8eab2121edf01a8382d',
                page: event
            }
        }


        return Axios.get<AxiosResponse>('/discover/movie', options)
            .then((res) => {
                if (res) {
                    const data: MovieTotal = res.data;
                    const { page, total_results, total_pages, results } = data;
                    console.log("​getMovie -> data", data);

                    this.MovieData = data.results;
                    this.MovieData.map((e) => {
                        e.poster_path = `https://image.tmdb.org/t/p/w500${e.poster_path}`;
                        e.backdrop_path = `https://image.tmdb.org/t/p/w500${e.backdrop_path}`;
                    });

                    this.MovieConfig = { page, total_results, total_pages };
                    console.log('getMovie', this.MovieData, '\nConfig', this.MovieConfig);
                }
            })
            .catch((err) => console.log('getMovie err', err));
    }
}
</script>

<style>
.backdrop {
  display: block;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.315);
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: solid 1px black;
}

.backdrop-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.card-container {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-item {
  order: 0;
}
</style>
