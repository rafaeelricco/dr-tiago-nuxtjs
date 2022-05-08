<template>
  <Container>
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
            src="https://res.cloudinary.com/dnqiosdb6/video/upload/v1651922840/HOF_ohjgqu.mp4"
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
    <div class="breadcrumbs">
      <h1>Outras especialidades</h1>
      <li>
        <NuxtLink id="Buco" to="./Bucomaxilo">‣Bucomaxilofacial</NuxtLink>
      </li>
      <li>
        <NuxtLink id="Impl" to="./implantodontia">‣Implantodontia</NuxtLink>
      </li>
      <li>
        <NuxtLink id="Harm" to="/">‣Harmonização Orofacial</NuxtLink>
      </li>
      <li>
        <NuxtLink id="Hof" to="./hofcirurgica"
          >‣Harmonização Orofacial Cirurgia</NuxtLink
        >
      </li>
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "procedimentos",
});
</script>
