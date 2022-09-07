<template>
  <div class="bucomaxiloCard">
    <vs-card>
      <template #title>
        <h3 class="titleCard">Bucomaxilofacial</h3>
      </template>
      <template #img>
        <img
          src="https://res.cloudinary.com/dnqiosdb6/image/upload/v1652051215/WEBP/bucomaxilofacial_yut2mu_p4rhvo.webp"
          alt="Especialidade Bucomaxilofacial"
        />
      </template>
      <template #text>
        <p class="textCard">
          A cirurgia e traumatologia bucomaxilofacial é uma área da odontologia
          que realiza o diagnóstico e tratamento cirúrgico as doenças da
          cavidade bucal, do crânio, face e pescoço.
        </p>
        <vs-button id="vs-button">
          <NuxtLink to="/procedimentos/bucomaxilo">Ver procedimentos</NuxtLink>
        </vs-button>
      </template>
      <template #interactions>
        <vs-button class="btn-chat" shadow primary>
          <i class="bx bx-chat"></i>
          <span class="span"> 9 Procedimentos </span>
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>
