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

    <div v-show="showModal" class="modal" @click="showModal=false">
      <div class="modal-body">
        <span class="modal-close" @click="showModal=false">&times;</span>
        <div class="modal-progress" 
            :class="{
              'modal-progress-danger':data.vote_average < 3,
              'modal-progress-warn':data.vote_average < 7 && data.vote_average > 3,
              'modal-progress-good':data.vote_average >= 7,
            }">
          <p>{{Math.round(+data.vote_average * 10)}}%</p>
        </div>
        <div class="modal-body-title">
          <h2> {{data.original_title}}  
            <br>
            <small>{{data.release_date | dateFilter}}</small>
          </h2>
        </div>
        <img :src="data.backdrop_path" alt="">
        <div class="modal-body-content">
          <!-- <h3><span>{{data.original_title}}</span></h3>
          <p>Release {{data.release_date}}</p> -->
          <p>{{data.overview}}</p>
        </div>
      </div>
    </div>

    <!-- <div v-show="showModal" class="modal">
        <div class="modal-body">
          <div class="modal-body-img">
            <span class="modal-close" @click="showModal=false">&times;</span>
            <p>{{data.original_title}}</p>
            <img :src="data.backdrop_path" alt="">
            <div class="modal-body-content">
            <p>{{data.overview}}</p>
            <p>{{data.vote_average}}% from {{data.vote_count}} people</p>
          </div>
          </div>
        </div>
    </div> -->

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Movie, MovieTotal } from "@/models";

@Component({
  filters: {
    filterName(value: any) {
      return 'Hello filter' + value;
    },
    dateFilter(value: string) {
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const dateIso = new Date(value);
      const splitDate = value.toString().split('-');
      const date = monthNames[+splitDate[1] - 1] + " " + splitDate[2] + ", " + splitDate[0];

      // var c = dateIso.toString().split(' ');
      // var g = c[1] + " " + c[2] + ", " + c[3];
      return date;
    }
  }
})
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

.card-body {
  position: relative;
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

.modal > .modal-body > .modal-body-content {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  color: white;
  letter-spacing: -1px;
  background: rgba(0, 0, 0, 0.7);
  padding: 0 10px;
}

.modal > .modal-body > .modal-body-title {
  position: absolute;
  top: 5px;
  left: 100px;
  /* background: rgba(0, 0, 0, 0.3); */
  padding: 0 5px;
  letter-spacing: -1px;
  color: white;
  text-align: left;
  text-shadow: 0px 0px 15px black;
}

.modal-body {
  margin: 1% auto;
  width: 80%;
  position: relative;
}

.card > .card-body > p {
  position: absolute;
  width: 100%;
}

.card > .card-body > img {
  max-width: 100%;
  max-height: 100%;
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
  /* float: right; */
  cursor: pointer;
  color: #ffffff;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 40px;
  font-weight: bold;
  padding: 0 10px;
  text-shadow: 0px 0px 10px #080808;
}
.modal-close:hover,
.modal-close:focus {
  color: rgb(223, 223, 223);
  font-size: 43px;
}

.modal-progress {
  display: block;
  width: 80px;
  height: 80px;
  background-color: #000000bd;
  position: absolute;
  border-radius: 50%;
  border: solid 5px rgb(151, 151, 151);
  margin: 5px;
}

.modal-progress-danger {
  border: solid 5px red;
  box-shadow: inset 0 0 30px red;
}
.modal-progress-warn {
  border: solid 5px rgb(248, 220, 61);
  box-shadow: inset 0 0 30px rgb(248, 220, 61);
}
.modal-progress-good {
  border: solid 5px rgb(52, 196, 16);
  box-shadow: inset 0 0 30px rgb(52, 196, 16);
}

.modal-progress > p {
  color: whitesmoke;
  margin: 23px 18px;
  font-size: 25px;
  font-weight: bold;
}

/*small Screen*/
@media screen and (max-width: 640px) {
  .modal-body {
    width: 80%;
  }

  .modal > .modal-body > .modal-body-content {
    top: 95%;
    left: 0;
    bottom: unset;
  }
}

/*medium Screen*/
@media screen and (max-width: 1007px) {
  .modal-body {
    width: 70%;
  }
  .modal > .modal-body > .modal-body-content {
    top: 95%;
    left: 0;
    bottom: unset;
  }
}

/*large Screen*/
/* @media screen and (min-width: 1008px) {
  .modal-body {
    width: 60%;
  }
} */
</style>
