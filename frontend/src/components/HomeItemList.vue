<template>
  <div>
    <img src="home.imageUrl" alt="Image" />
    <span>{{ home.name }}</span>
    <p>{{ home.description }}</p>
  </div>
</template>

<script>
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
};
</script>
