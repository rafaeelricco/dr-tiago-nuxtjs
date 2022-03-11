<template>
  <Container>
    <header class="Header">
      <Logo/>
      <div class="Ancoras">
        <a id="inicio" href="#">Início</a>
        <a id="sobre" href="#">Sobre</a>
        <a id="procedimentos" href="">Procedimentos</a>
        <a id="depoimentos" href="">Depoimentos</a>
      </div>
      <ButtonHeader />
    </header>
  </Container>
</template>

<style lang="scss" scoped>
.Header {
  font-family: Hellix;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-items: center;
  margin-top: 0.8rem;
  @include screen('medium') {
    grid-gap: 1rem;
  }
}

#depoimentos {
  @include screen ('smallMedium') {
    display: none;
  }
}

.Ancoras {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2rem;
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
