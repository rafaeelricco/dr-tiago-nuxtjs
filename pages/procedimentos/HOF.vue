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
            src="https://res.cloudinary.com/dnqiosdb6/video/upload/v1652049078/V%C3%ADdeos/HOF_ntcfqv.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="infos">
        <h1>Harmonização Orofacial</h1>
        <p>
          A harmonização orofacial é uma área da odontologia responsável por
          buscar o equilíbrio da estética facial, amenizar os defeitos causados
          pelo tempo e contribuir para o rejuvenescimento.
        </p>
        <ButtonHeader class="btn-header" />
        <div class="procedimento">
          <HOF />
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
