<template>
  <div class="about">
    <div v-if="!loading">
      <HomeItemList :home="home" v-for="home in homes" :key="home._id" />
      <button v-on:click="nextPage">
        Next
      </button>
    </div>
    <div v-else></div>
  </div>
</template>
<script>
import { Homes } from '@/network/agent';
import HomeItemList from '@/components/HomeItemList.vue';

export default {
  components: {
    HomeItemList,
  },
  data() {
    return {
      loading: true,
      homes: [],
      pageNumber: 1,
    };
  },
  created() {
    this.fetchHomesByOwner();
  },
  methods: {
    fetchHomesByOwner() {
      this.loading = true;
      Homes.list(this.$route.params.id, this.pageNumber)
        .then((res) => {
          this.homes = [];
          res.homes.forEach((home) => {
            this.homes.push(home);
          });
        })
        .catch((error) => console.log(error))
        .finally(() => (this.loading = false));
    },
    nextPage() {
      this.pageNumber++;
    },
  },
};
</script>
