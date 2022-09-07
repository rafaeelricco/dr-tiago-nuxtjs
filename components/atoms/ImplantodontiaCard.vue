<template>
  <div class="implantodontia">
    <vs-card>
      <template #title>
        <h3 class="titleCard">Implantodontia</h3>
      </template>
      <template #img>
        <img
          src="https://res.cloudinary.com/dnqiosdb6/image/upload/v1652051149/WEBP/implantodontia_ir39ib_s2ksvm.webp"
          alt="Especialidade Implantodontia"
        />
      </template>
      <template #text>
        <p class="textCard">
          Implantodontia é a área da odontologia que se destina ao tratamento do
          edentulismo com reabilitações protéticas suportadas ou retidas por
          implantes dentários.
        </p>
        <vs-button id="vs-button">
          <NuxtLink to="/procedimentos/implantodontia"
            >Ver procedimentos</NuxtLink
          >
        </vs-button>
      </template>
      <template #interactions>
        <vs-button class="btn-chat" shadow primary>
          <i class="bx bx-chat"></i>
          <span class="span"> 7 Procedimentos</span>
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>
