<template>
  <div>
    <Container>
      <Header />
      <div class="procedimentoPage">
        <div class="cardVideo">
          <video
            style="border-radius: 1rem"
            width="100%"
            height="100%"
            loop
            controls
          >
            <source
              src="https://res.cloudinary.com/dnqiosdb6/video/upload/v1652048876/V%C3%ADdeos/bucomaxilo_yjoipq.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="infos">
          <h1>Cirurgia Buxomaxilofacial</h1>
          <p>
            A cirurgia e traumatologia bucomaxilofacial é uma área da
            odontologia que realiza o diagnóstico e tratamento cirúrgico as
            doenças da cavidade bucal, do crânio, face e pescoço, tais como:
            traumatismos e deformidades faciais (congênitos ou adquiridos),
            traumas e deformidades dos maxilares e da mandíbula.
          </p>
          <ButtonHeader class="btn-header" />
          <div class="procedimento">
            <Bucomaxilofacial />
          </div>
        </div>
      </div>
      <ChipsGroup />
    </Container>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.nuxt-link-active {
  color: #2b8599 !important;
  font-family: Hellix Bold;
  font-weight: Bold;
}

.nuxt-link-exact-active {
  color: #2b8599;
  font-weight: Bold Bold;
  font-family: Hellix;
}
h1 {
  margin: 1rem 0;
  font-family: Hellix Bold;
}

p {
  margin: 1rem 0;
  font-family: Hellix Normal;
}
</style>
