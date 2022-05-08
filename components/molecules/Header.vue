<template>
  <Container>
    <header class="Header" id="header">
      <LogoTiago/>
      <Ancoras/>
      <ButtonHeader/>
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
  @include screen('medium') {
    grid-gap: 1rem;
  }
}
</style>
