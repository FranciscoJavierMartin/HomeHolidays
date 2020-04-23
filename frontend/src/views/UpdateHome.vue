<template>
  <form @submit.prevent="onSubmit">
    <input v-model="name" placeholder="Name" />
    <input v-model="imageUrl" placeholder="Image url" />
    <textarea v-model="description" placeholder="Description" />
    <input type="submit" value="Update" />
  </form>
</template>

<script>
import { Homes } from '../network/agent';
export default {
  data() {
    return {
      name: '',
      imageUrl: '',
      description: '',
    };
  },
  created() {
    this.getHome();
  },
  methods: {
    getHome() {
      Homes.get(this.$route.params.homeid)
        .then((res) => {
          const { name, description, imageUrl } = res.home;
          this.name = name;
          this.imageUrl = imageUrl;
          this.description = description;
        })
        .catch((err) => console.log(err));
    },
    onSubmit() {
      Homes.put(this.$route.params.homeid, {
        name: this.name,
        imageUrl: this.imageUrl,
        description: this.description,
        owner: this.$route.params.id,
      })
        .then(() => {
          this.$router.push({
            name: 'HomeList',
            params: { id: this.$route.params.id },
          });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
