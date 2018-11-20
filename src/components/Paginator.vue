<template>
  <div>
    <div>
        <p>Pages: {{data.page}} of :{{data.total_pages}} | total_result:{{data.total_results}}</p>
        <input type="number" v-model="page" maxlength="1000"> <button @click="onSearch">Search</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MovieTotal } from '@/models';

@Component
export default class Paginator extends Vue {
    @Prop() private data: MovieTotal;
    public page: number = 0;

    public created() {
        this.page = this.data.page;
        // console.log('MovieCard', this.data);
    }

    public onSearch() {
        this.$emit('page', this.page);
    }
}
</script>

<style scoped>
</style>
