<template>
  <div class="HOF">
    <vs-card>
      <template #title>
        <h3 class="titleCard">Harmonização Orofacial</h3>
      </template>
      <template #img>
        <img
          src="https://res.cloudinary.com/dnqiosdb6/image/upload/v1652051149/WEBP/HOF_sunaio_mx50qn.webp"
          alt="Especialidade Harmonização Orofacial"
        />
      </template>
      <template #text>
        <p class="textCard">
          A harmonização Orofacial é uma área da odontologia responsável por
          buscar o equilíbrio da estética facial, amenizar os defeitos causados
          pelo tempo e contribuir para o rejuvenescimento.
        </p>
        <vs-button id="vs-button">
          <NuxtLink to="/procedimentos/HOF">Ver procedimentos</NuxtLink>
        </vs-button>
      </template>
      <template #interactions>
        <vs-button class="btn-chat" shadow primary>
          <i class="bx bx-chat"></i>
          <span class="span"> 6 Procedimentos </span>
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>
