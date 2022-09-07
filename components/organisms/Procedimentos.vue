<template>
  <Container>
    <div class="Procedimentos" id="procedimentos">
      <h1 class="TitleProcedimentos hvr-forward">Procedimentos</h1>
      <p class="ParghProcedimentos">
        Veja aqui os principais procedimentos dentro do campo da Cirurgia
        Bucomaxilofacial, Harmonização Orofacial, e Implantodontia.
        <br />
        <br />
        Caso tenha interesse em algum desses procedimentos, entre em contato
        <a
          class="WpAnchor"
          href="https://api.whatsapp.com/send?phone=555185020228&text=Ol%C3%A1!%20vim%20pelo%20site!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
          >aqui mesmo</a
        >
        pelo site.
      </p>
      <div class="ProcedimentosCard">
        <Bucofacial />
        <ImplantodontiaCard />
        <HofCard />
        <HofCirurgicaCard />
      </div>
    </div>
  </Container>
</template>

<style lang="scss" scoped>
a {
  color: blue;
}
.WpAnchor {
  text-decoration: underline;
}
.TitleProcedimentos {
  font-family: Hellix Bold;
  font-size: 3rem;
  margin-top: 4rem;
  margin-bottom: 0.618rem;
}
.ParghProcedimentos {
  font-family: Hellix Normal;
  margin: 0.618rem 0 1.618rem 0;
}

.ProcedimentosCard {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;

  @include screen("medium") {
    grid-template-columns: 1fr 1fr;
  }
  @include screen("small") {
    grid-template-columns: 1fr;
    grid-auto-flow: dense;
  }
}

.TitleEspecialidade {
  font-size: 1.5rem;
  font-family: Hellix Semibold;
  margin: 2rem 0 0.618rem 0;
}
</style>
