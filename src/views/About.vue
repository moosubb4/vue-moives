<template>
  <div class="about">
      <h1>Test Components , Mixins ,Filters</h1>

      <svg
   class="progress-ring"
   width="120"
   height="120">
  <circle
    class="progress-ring__circle"
    stroke="white"
    stroke-width="4"
    fill="transparent"
    r="52"
    cx="60"
    cy="60"/>
</svg>


<VueRing radius="60" :progress="100" stroke="4" />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueRing from '@/components/VueRing';
@Component({
  components: {
    VueRing
  }
})
export default class About extends Vue { }



</script>


<style scoped>
/*=================*/
.progress-ring {
  background-color: #2962ff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}
.progress-ring__circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>

