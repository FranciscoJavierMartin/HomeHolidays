<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="!loading">
      <HomeOwnerItemList
        :homeOwner="homeOwner"
        v-for="homeOwner in homeOwners"
        :key="homeOwner.id"
      />
    </div>
    <div v-else>
      Loading
    </div>
  </div>
</template>

<script>
import { HomeOwner } from '@/network/agent';
import HomeOwnerItemList from '@/components/HomeOwnerItemList.vue';

export default {
  name: 'Home',
  components: {
    HomeOwnerItemList,
  },
  data() {
    return {
      loading: false,
      homeOwners: [],
    };
  },
  created() {
    this.fetchHomeOwners();
  },
  methods: {
    fetchHomeOwners() {
      this.loading = true;
      HomeOwner.list()
        .then((res) => {
          res.homeOwners.forEach((homeOwner) => {
            this.homeOwners.push(homeOwner);
          });
        })
        .catch((error) => console.log(error))
        .finally(() => (this.loading = false));
    },
  },
};
</script>
