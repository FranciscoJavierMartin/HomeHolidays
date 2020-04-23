<template>
  <div>
    <span>{{ homeOwner._id }}</span>
    <router-link :to="{ name: 'HomeList', params: { id: homeOwner._id }}">
      <span>{{ homeOwner.name }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeOwnerItemList',
  props: {
    homeOwner: {
      name: String,
      _id: String,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
