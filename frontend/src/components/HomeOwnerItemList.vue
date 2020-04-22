<template>
  <div>
    <span>{{homeOwner.name}}</span>
    <span>{{homeOwner._id}}</span>
  </div>
</template>

<script>
export default {
  name: "HomeOwnerItemList",
  props: {
    homeOwner: {
      name: String,
      _id: String,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
