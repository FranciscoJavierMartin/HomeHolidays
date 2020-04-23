<template>
  <form @submit.prevent="onSubmit">
    <input v-model="name" placeholder="Name" />
    <input v-model="imageUrl" placeholder="Image url" />
    <textarea v-model="description" placeholder="Description" />
    <input type="submit" value="Create">  
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
  methods: {
    onSubmit(){
      Homes.create({
        name: this.name,
        imageUrl: this.imageUrl,
        description: this.description,
        owner: this.$route.params.id,
      }).then((res) => {
        this.$router.push('HomeList');
      }).catch(error => console.log(error));
    }
  }
};
</script>
