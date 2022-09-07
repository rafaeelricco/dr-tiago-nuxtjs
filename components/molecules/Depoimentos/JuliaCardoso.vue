<template>
  <div class="Paciente">
    <Picture
      image_src="https://res.cloudinary.com/dnqiosdb6/image/upload/v1651939276/Img/julia_bttzik.jpg"
      image_desc="Júlia Cardoso"
    />
    <h1 class="NomePasciente">Júlia Cardoso</h1>
    <p class="Relato">
      “O procedimento de gengivoplastia superou as minhas expectativas. Além do
      processo de recuperação ser rápido, o resultado não só elevou a minha
      autoestima, mas preservou a saúde bucal.”
    </p>
  </div>
</template>

<script lang="ts">
import Picture from './Avatar.vue'

export default {
  components: {
    Picture
  }
}
</script>
