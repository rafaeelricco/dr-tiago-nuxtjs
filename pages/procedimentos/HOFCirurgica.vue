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
            src="https://res.cloudinary.com/dnqiosdb6/video/upload/v1651922838/HOFC_dkfxgl.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="infos">
        <h1>Harmonização Orofacial Cirurgica</h1>
        <p>
          A Harmonização Orofacial Cirúrgica consiste de microcirurgias da face,
          seu propósito são as técnicas cirúrgicas com resultados definitivos
          realizadas em consultório odontológico.
        </p>
        <ButtonHeader class="btn-header" />
        <div class="procedimento">
          <HOFC />
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
        <NuxtLink id="Harm" to="./hof">‣Harmonização Orofacial</NuxtLink>
      </li>
      <li>
        <NuxtLink id="Hof" to="/">‣Harmonização Orofacial Cirurgia</NuxtLink>
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
