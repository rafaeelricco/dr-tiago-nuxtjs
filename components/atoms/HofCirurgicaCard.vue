<template>
  <div class="HofCirurgicaCard">
    <vs-card>
      <template #title>
        <h3 class="titleCard">Harmonização Orofacial Cirurgica</h3>
      </template>
      <template #img>
        <img
          src="https://res.cloudinary.com/dnqiosdb6/image/upload/v1652051149/WEBP/HOFC_mtojtr_v0mfxn.webp"
          alt="Especialidade Harmonização Orofacial"
        />
      </template>
      <template #text>
        <p class="textCard">
          A Harmonização Orofacial Cirúrgica consiste de microcirurgias da face,
          seu propósito são as técnicas cirúrgicas com resultados definitivos
          realizadas em consultório odontológico.
        </p>
        <vs-button id="vs-button">
          <NuxtLink to="/procedimentos/HOFCirurgica"
            >Ver procedimentos</NuxtLink
          >
        </vs-button>
      </template>
      <template #interactions>
        <vs-button class="btn-chat" shadow primary>
          <i class="bx bx-chat"></i>
          <span class="span">4 Procedimentos</span>
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>
