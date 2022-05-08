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
            src="https://res.cloudinary.com/dnqiosdb6/video/upload/v1651922841/Implantodontia_dlp6dh.mp4"
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
    <div class="breadcrumbs">
      <h1>Outras especialidades</h1>
      <li>
        <NuxtLink id="Buco" to="./Bucomaxilo">‣Bucomaxilofacial</NuxtLink>
      </li>
      <li>
        <NuxtLink id="Impl" to="/">‣Implantodontia</NuxtLink>
      </li>
      <li>
        <NuxtLink id="Harm" to="./hof">‣Harmonização Orofacial</NuxtLink>
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
