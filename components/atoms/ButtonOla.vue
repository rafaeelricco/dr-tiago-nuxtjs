<template>
  <div class="buttonOla">
    <vs-button id="vs-ola" class="OlaBtn">
      <a
        id="OlaText"
        href="https://api.whatsapp.com/send?phone=555185020228&text=Ol%C3%A1!%20vim%20pelo%20site!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
        >Diga Olá!</a
      >
    </vs-button>
  </div>
</template>
<style>
#OlaText {
  color: #ffff;
  font-family: Hellix Medium;
  font-size: 1rem;
  font-weight: medium;
  text-decoration: none;
}
#vs-ola {
  background: linear-gradient(
    90deg,
    rgba(55, 135, 153, 1) 0%,
    rgba(82, 173, 193, 1) 100%
  );
  width: 8rem;
  height: 2.3rem;
  border-radius: 0.6rem;
  border-style: none;
}
</style>
