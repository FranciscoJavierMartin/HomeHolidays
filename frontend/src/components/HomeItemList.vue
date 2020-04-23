<template>
  <div>
    <img src="home.imageUrl" alt="Image" />
    <span>{{ home.name }}</span>
    <p>{{ home.description }}</p>
    <router-link
      :to="{
        name: 'UpdateHome',
        params: { id: this.$route.params.id, homeid: home._id },
      }"
    >
      Edit
    </router-link>
    <button @click="removeHome">Delete</button>
  </div>
</template>

<script>
import { Homes } from '../network/agent';

export default {
  name: 'HomeItemList',
  props: {
    home: {
      _id: String,
      name: String,
      imageUrl: String,
      description: String,
      owner: String,
    },
  },
  methods: {
    removeHome() {},
  },
};
</script>
