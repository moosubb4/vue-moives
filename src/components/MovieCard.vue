<template>
  <div>

    <div class="card" @click="showModal = !showModal" >
      <div class="card-body">
          <img :src="data.poster_path" alt="">
          <label>
            <p>{{data.title}}</p>
          </label>
      </div>
    </div>

    <div v-show="showModal" class="modal">
        <div class="modal-body">
        <a class="modal-close" @click="showModal=false">X</a>
        <img :src="data.backdrop_path" alt="">
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
  border: solid 1px red;
  margin: 5px 15px;
  padding: 5px;
  width: 200px;
}

img {
  width: 100%;
}

div.card-body {
  position: relative;
}
.card-body > label {
  position: absolute;
  /* top: 0; */
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  transition: 0.2s;
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

/* .card-body > img:hover + label {
  top: 100%;
  margin-top: -16px;
} */

/*=================Modal=================*/

.modal {
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

.modal-body {
  /* background-color: #fefefe; */
  margin: 15% auto; /* 15% from the top and centered */
  padding: 5px;
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
  max-height: 100%;
}

.modal-close {
  cursor: pointer;
  position: absolute;
  right: 25%;
  font-size: 25px;
  color: white;
  padding: 10px;
  text-shadow: 0px 0px 10px #080808;
}
.modal-close:hover {
  font-size: 30px;
}

@media screen and (max-width: 500px) {
  .card-container {
    padding: 0 10px;
  }

  .backdrop-content {
    width: 80%;
  }

  .appcard {
    margin: 5px auto;
  }
}

@media screen and (min-width: 320px) {
}
</style>
