<template>
  <Container>
    <Header />
    <div class="procedimentoPage">
      <div class="cardVideo">
        <video
          style="border-radius: 1rem"
          width="100%"
          height="100%"
          loop
          controls
        >
          <source
            src="https://res.cloudinary.com/dnqiosdb6/video/upload/v1652049399/V%C3%ADdeos/Implantodontia_zmz4vb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="infos">
        <h1>Implantodontia</h1>
        <p>
          Implantodontia é a área da odontologia que se destina ao tratamento do
          edentulismo com reabilitações protéticas suportadas ou retidas por
          implantes dentários.
        </p>
        <ButtonHeader class="btn-header" />
        <div class="procedimento">
          <Implantodontia />
        </div>
      </div>
    </div>
    <ChipsGroup />
  </Container>
</template>

<script lang="ts">
import Vue from "vue";
import ChipsGroup from "~/components/atoms/ChipsGroup.vue";

export default Vue.extend({
  layout: "procedimentos",
  components: { ChipsGroup },
});
</script>

<style scoped>
.nuxt-link-active {
  color: #2b8599 !important;
  font-family: Hellix Bold;
  font-weight: Bold;
}

.nuxt-link-exact-active {
  color: #2b8599;
  font-weight: Bold;
  font-family: Hellix Bold;
}
h1 {
  margin: 1rem 0;
  font-family: Hellix Bold;
}

p {
  margin: 1rem 0;
  font-family: Hellix Normal;
}
</style>
