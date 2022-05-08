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
            src="https://res.cloudinary.com/dnqiosdb6/video/upload/v1651922831/bucomaxilo_mdwz57.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="infos">
        <h1>Cirurgia Buxomaxilofacial</h1>
        <p>
          A cirurgia e traumatologia bucomaxilofacial é uma área da odontologia
          que realiza o diagnóstico e tratamento cirúrgico as doenças da
          cavidade bucal, do crânio, face e pescoço, tais como: traumatismos e
          deformidades faciais (congênitos ou adquiridos), traumas e
          deformidades dos maxilares e da mandíbula.
        </p>
        <ButtonHeader class="btn-header" />
        <div class="procedimento">
          <Bucomaxilofacial />
        </div>
      </div>
    </div>
    <div class="breadcrumbs">
      <h1>Outras especialidades</h1>
      <li>
        <NuxtLink id="Buco" to="/">‣Bucomaxilofacial</NuxtLink>
      </li>
      <li>
        <NuxtLink id="Impl" to="./implantodontia">‣Implantodontia</NuxtLink>
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
