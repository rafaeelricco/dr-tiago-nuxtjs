<template>
  <div id="footer" class="Footer">
    <Container>
      <div class="TextFooter">
        <h1 class="TitleFooter">
          Entre em contato agora e agende sua avaliação!
        </h1>
        <p class="PaghFooter">
          <strong>Ficou com alguma dúvida?</strong> clique no botão e agende sua
          avaliação agora mesmo!
        </p>
        <div class="ButtonsLayout">
          <ButtonOla />
        </div>
        <div class="IconsLayout">
          <a
            href="https://www.instagram.com/tiagobucomaxilo.odt/?hl=pt-br"
            target="_blank"
          >
            <Instagram /> </a
          ><a
            href="https://api.whatsapp.com/send?phone=555185020228&text=Ol%C3%A1!%20vim%20pelo%20site!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
          >
            <WhatsApp /> </a
          ><a
            href="https://www.linkedin.com/in/tiago-machado-86659b236/?originalSubdomain=br"
            target="_blank"
          >
            <Linkdl />
          </a>

          <a
            href="https://www.facebook.com/tiago.machadodesouza.3"
            target="_blank"
          >
            <Facebook />
          </a>
        </div>
        <div class="contactLocation">
          <div class="contact">
            <svg
              id="contact"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#FFFF"
                d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
              />
            </svg>
            <a href="tel:518502-0228"
              ><p style="margin: 0">(51) 9 8502-0228</p></a
            >
          </div>
          <div class="location">
            <svg
              id="location"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="#FFFF"
                d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
              />
            </svg>
            <a href="https://goo.gl/maps/Hdvz3XwtLVujdf4MA"
              ><p class="location" style="margin: 0">
                R. Maj. Ouríques, 2111, Sala 33 - Santo<br />
                Antônio, Cachoeira do Sul - RS
              </p></a
            >
          </div>
        </div>
      </div>
      <p class="Copy">&copy; {{ currentYear }}, Tiago Machado de Souza.</p>
    </Container>
  </div>
</template>

<script lang="typescript">
import Vue from 'vue'
export default Vue.extend({
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    }
})
</script>

<style lang="scss" scoped>
.TextFooter {
  margin: 2rem 0 2rem 0;
}
.Footer {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 40rem;
  background-color: #595657;
  @include screen("small") {
    height: 40rem;
    .TitleFooter {
      margin-top: 1rem;
    }
  }
  .container {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    justify-items: start;
    align-items: center;
    grid-template-rows: 1fr auto;
    p {
      color: #ffff;
    }
  }
}
.TitleFooter {
  font-family: Hellix Bold;
}

h1 {
  display: grid;
  justify-content: start;
  color: #ffff;
  margin-top: 0;
  margin-bottom: 1rem;
}
p {
  color: #ffff;
  margin-bottom: 2rem;
  font-family: Hellix normal;
}
.ButtonsLayout {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  grid-template-columns: max-content;
}
.IconsLayout {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, minmax(10px, 3.5rem));
  justify-items: start;
  margin: 2rem 0rem;
}

#location {
  width: 1.2rem;
}

#contact {
  width: 1.2rem;
}

img {
  width: 2.5rem;
  height: 2.5rem;
}

.contactLocation {
  display: grid;
  grid-auto-flow: dense;
  grid-gap: 1.5rem;
  margin: 2.5rem 0rem;
}

.contact {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content;
  grid-gap: 0.8rem;
  align-items: center;
}

.location {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content;
  grid-gap: 0.8rem;
  align-items: center;
}

.Copy {
  font-size: 0.9rem;
  color: #9d9d9d;
  bottom: 0;
}
</style>
