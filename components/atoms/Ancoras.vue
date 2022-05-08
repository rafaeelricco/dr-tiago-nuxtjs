<template>
  <div class="Ancoras">
    <NuxtLink class="inicio hvr-float" to="/">
      Início
    </NuxtLink>
    <NuxtLink class="sobre hvr-float" to="#sobre">Sobre</NuxtLink>
    <NuxtLink class="procedimentos hvr-float" to="#procedimentos">Procedimentos</NuxtLink>
    <NuxtLink class="depoimentos hvr-float" to="#depoimentos">Depoimentos</NuxtLink>
  </div>
</template>
<script>
export default {
  setup() {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth'
    })
  }
}
</script>
<style lang="scss" scoped>

.depoimentos {
  @include screen('medium') {
    display: none;
  }
}
.Ancoras {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2rem;
  font-family: Hellix Normal;
  @include screen('small') {
    a {
      display: none;
    }
  }
  @include screen('medium') {
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
