<template>
  <div class="home">
    <h1>Movies Page</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <p :key="key" v-for="(item,key) in MovieData">{{item.title}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Axios from 'axios';

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


@Component({
})
export default class MoviePage extends Vue {

    public MovieData: Movie[] = [];
    public MovieConfig: MovieTotal = {};

    public created() {
        this.getMovie();
    }

    public getMovie() {
        // ?language=th-TH
        const params = {
            api_key: '22dbd915ba93d8eab2121edf01a8382d',
        };

        Axios.get('/discover/movie', { params })
            .then((res) => {
                console.log('getMovie', res);
                if (res) {
                    const {
                        page,
                        total_results,
                        total_pages,
                        results,
                    } = res.data;
                    this.MovieData = results;
                    this.MovieConfig = { page, total_results, total_pages };
                }
                console.log('getMovie', this.MovieData, '\n', this.MovieConfig);
            })
            .catch((err) => console.log('getMovie err', err));
    }
}
</script>
