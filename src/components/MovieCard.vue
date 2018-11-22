<template>
  <div>

    <div class="card" @click="showModal = !showModal" >
      <div class="card-body">
          <img :src="data.poster_path" alt="">
          <label class="card-label">
            <p>{{data.title}}</p>
          </label>
      </div>
    </div>

    <div v-show="showModal" class="modal">
        <div class="modal-body">
          <div class="modal-body-img">
            <span class="modal-close" @click="showModal=false">&times;</span>
            <p>{{data.original_title}}</p>
            <img :src="data.backdrop_path" alt="">
            <!-- <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/G90vUgcdoA8?controls=0&amp;start=1" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture" 
            allowfullscreen></iframe> -->
            <div class="modal-body-content">
            <!-- <p>{{data.original_language}}</p> -->
            <p>{{data.overview}}</p>
            <p>{{data.vote_average}}% from {{data.vote_count}} people</p>
          </div>
          </div>
          
        </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Movie, MovieTotal } from "@/models";

@Component
export default class MovieCard extends Vue {
  @Prop()
  private data: Movie;
  private showModal: boolean = false;

  public created() {
    // console.log('MovieCard', this.data);
  }
}
</script>

<style scoped>
/*=================Card=================*/

.card {
  /* width: 250px; */
  /* border: solid 1px red; */
  /* margin: 5px 15px; */
  /* padding: 5px; */
  /* width: 200px; */
}

.card > .card-body > img {
  /* min-height: 375px; */
  max-width: 100%;
  max-height: 100%;
}

.card-body {
  position: relative;
  /* height: 375px; */
  cursor: pointer;
}
.card-label {
  position: absolute;
  top: 105%;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.2s;
  margin-top: -16px;
}

.card-body > img:hover + label,
.card-body > img:focus + label {
  top: 85%;
  display: block;
  /* margin-top: -20px; */
}

/*=================Modal=================*/

.modal {
  display: block;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.315);
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: solid 1px black;
}

.modal > .modal-body > img {
  max-width: 100%;
  max-height: 100%;
}

.modal-body {
  background-color: #fefefe;
  margin: 1% auto;
  width: 50%;
  max-height: 100%;
  transition: 0.5s;
  overflow: auto;
}

.modal-body-img {
  /* position: absolute;
  margin: 0 auto;
  top: 5%;
  left: 0;
  right: 0;
  bottom: 0;
  height: 500px; */
}

.modal-body-content {
  /* position: relative;
  position: fixed;
  left: 0;
  bottom: 0;
  color: white; */
}

.modal-body-img > img {
  max-width: 100%;
  max-height: 100%;
}

.modal-close {
  /* cursor: pointer;
  position: absolute;
  margin-left: 28%;
  font-size: 40px;
  color: white;
  padding: 0 5px;
  text-shadow: 0px 0px 10px #080808; */
  cursor: pointer;
  color: #ffffff;
  float: right;
  font-size: 40px;
  font-weight: bold;
  padding: 0 5px;
  text-shadow: 0px 0px 10px #080808;
}
.modal-close:hover,
.modal-close:focus {
  color: rgb(223, 223, 223);
  /* font-size: 45px; */
}

/*small Screen*/
@media screen and (min-width: 320px) and (max-width: 640px) {
  .modal-body {
    width: 80%;
  }
  .modal-close {
    /* margin-left: 27%; */
  }
}

/*medium Screen*/
@media screen and (min-width: 641px) and (max-width: 1007px) {
  .modal-body {
    width: 70%;
  }
  .modal-close {
    /* margin-left: 27%; */
  }
}

/*large Screen*/
@media screen and (min-width: 1008px) {
  .modal-body {
    width: 60%;
  }
  .modal-close {
    /* margin-left: 27%; */
  }
}
</style>
