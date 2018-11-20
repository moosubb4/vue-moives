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
import { Component, Vue } from 'vue-property-decorator';
import Axios from 'axios';
import { Movie, MovieTotal } from '@/models';

import MovieCard from '@/components/MovieCard';
import Paginator from '@/components/Paginator';

@Component({
    components: {
        MovieCard,
        Paginator
    },
})
export default class MoviePage extends Vue {
    public MovieData: Movie[] = [];
    public MovieConfig: MovieTotal = {};

    public created() {
        this.getMovie();
    }

    public getMovie(event?: number) {
        // ?language=th-TH
        const params = {
            api_key: '22dbd915ba93d8eab2121edf01a8382d',
            page: event
        };

        Axios.get('/discover/movie', { params })
            .then((res) => {
                // console.log('getMovie', res);
                if (res) {
                    const { page, total_results, total_pages, results } = res.data;

                    this.MovieData = results;
                    this.MovieData.map(
                        (e) =>
                            (e.poster_path = `https://image.tmdb.org/t/p/w500${
                                e.poster_path
                                }`),
                    );
                    this.MovieConfig = { page, total_results, total_pages };
                }
                console.log('getMovie', this.MovieData, '\nConfig', this.MovieConfig);
            })
            .catch((err) => console.log('getMovie err', err));
    }
}
</script>

<style>
.card-container {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-item {
  order: 0;
}
</style>
