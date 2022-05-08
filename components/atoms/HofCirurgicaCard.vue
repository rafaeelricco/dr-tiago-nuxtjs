<template>
  <div class="bucomaxiloCard">
    <vs-card>
      <template #title>
        <h3 class="titleCard">Harmonização Orofacial Cirurgica</h3>
      </template>
      <template #img>
        <img
          src="https://res.cloudinary.com/dnqiosdb6/image/upload/v1651923695/Img/HOFC_mtojtr.png"
          alt="Especialidade Harmonização Orofacial"
        />
      </template>
      <template #text>
        <p class="textCard">
          A Harmonização Orofacial Cirúrgica consiste de microcirurgias da face,
          seu propósito são as técnicas cirúrgicas com resultados definitivos
          realizadas em consultório odontológico.
        </p>
        <vs-button id="vs-button" :active="active == 0" @click="active = 0">
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