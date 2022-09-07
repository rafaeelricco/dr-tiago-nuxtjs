<template>
  <Container>
    <h1 class="TitleDepoimentos hvr-forward" id="depoimentos">Depoimentos</h1>
    <div class="Depoimentos" id="depoimentos">
      <AnaPaula />
      <LauraAllram />
      <StaelTorres />
      <JuliaCardoso />
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.TitleDepoimentos {
  font-family: Hellix Bold;
  font-size: 3rem;
  margin-top: 5rem;
  margin-bottom: 0.618rem;
}
.Depoimentos {
  display: grid;
  margin: 3rem 0;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  grid-gap: 2rem 0;
  grid-auto-rows: auto;
}
</style>
