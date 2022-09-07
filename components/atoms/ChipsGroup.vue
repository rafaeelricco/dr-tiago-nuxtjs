<template>
  <div>
    <h1>Outras especialidades</h1>
    <div class="internal-links">
      <NuxtLink to="/procedimentos/bucomaxilo"
        ><v-chip
          class="hvr-float"
          color="#2b8599"
          outlined
          close-icon="mdi-delete"
          link
          >Bucomaxilo</v-chip
        ></NuxtLink
      >
      <NuxtLink to="/procedimentos/implantodontia"
        ><v-chip
          class="hvr-float"
          color="#2b8599"
          outlined
          close-icon="mdi-delete"
          link
          >Implantodontia</v-chip
        ></NuxtLink
      >
      <NuxtLink to="/procedimentos/hof"
        ><v-chip
          class="hvr-float"
          color="#2b8599"
          outlined
          close-icon="mdi-delete"
          link
          >Har. Orofacial</v-chip
        ></NuxtLink
      >
      <NuxtLink to="/procedimentos/hofcirurgica"
        ><v-chip
          class="hvr-float"
          color="#2b8599"
          outlined
          close-icon="mdi-delete"
          link
          >Har. Orofacial Cirurgica</v-chip
        ></NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: Hellix Bold;
  font-style: normal;
  font-weight: bold;
  margin-bottom: 1rem;
}

a {
  font-family: Hellix Normal;
}

.nuxt-link-active {
  color: #2b8599 !important;
  font-family: Hellix Bold;
}

.nuxt-link-exact-active {
  color: #2b8599;
  font-family: Hellix Bold;
}
.nuxt-link--active {
  color: #2b8599 !important;
}
.v-chip {
  cursor: pointer;
  transition: all 0.5s ease-out;
}
.v-chip:hover {
  color: hsl(191, 66%, 38%) !important;
  transition: all 0.2s ease-out;
}
</style>
