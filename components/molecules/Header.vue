<template>
  <header class="Header" id="header">
    <LogoTiago />
    <div class="Ancoras">
      <NuxtLink class="inicio hvr-float" to="/">
        <vs-button transparent> Início </vs-button></NuxtLink
      >
      <NuxtLink class="sobre hvr-float" to="/#sobre">
        <vs-button transparent> Sobre </vs-button>
      </NuxtLink>
      <NuxtLink class="procedimentos hvr-float" to="/#procedimentos">
        <vs-button transparent> Procedimentos </vs-button>
      </NuxtLink>
      <NuxtLink class="depoimentos hvr-float" to="/#depoimentos">
        <vs-button transparent> Depoimentos </vs-button>
      </NuxtLink>
    </div>
    <ButtonHeader />
  </header>
</template>

<script lang="js"></script>

<style lang="scss" scoped>
.Header {
  font-family: Hellix;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-items: center;
  margin: 0 0 1.618rem 0;
  @include screen("medium") {
    grid-gap: 1rem;
  }
}
.vs-button--active {
  color: #2b8599 !important;
}
.vs-button:hover {
  color: #2b8599 !important;
}
.vs-button {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 1rem;
  color: inherit;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.nuxt-link-exact-active {
  color: #2b8599 !important;
  font-weight: Bold;
  font-family: Hellix Bold;
}
.depoimentos {
  @include screen("medium") {
    display: none;
  }
}
.Ancoras {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2rem;
  font-family: Hellix Normal;
  @include screen("small") {
    a {
      display: none;
    }
  }
  @include screen("medium") {
    .Ancoras {
      grid-gap: 2rem;
    }
  }
}

a {
  text-decoration: none;
  color: #000000;
}
</style>
