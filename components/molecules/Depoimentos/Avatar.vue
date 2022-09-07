<template>
  <div class="Avatar">
    <v-row justify="space-around">
      <vs-avatar id="vs-avatar" size="128" circle>
        <img :src="image_src" :alt="image_desc" />
      </vs-avatar>
    </v-row>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Picture',
  props: {
    image_src: String,
    image_desc: String
  }
}
</script>

<style lang="scss" scoped>
#vs-avatar {
  margin: 0.8rem;
}
</style>
