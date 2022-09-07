export { default as Container } from '../../components/bosons/Container.vue'
export { default as Depoimentos } from '../../components/organisms/Depoimentos.vue'
export { default as Home } from '../../components/organisms/Home.vue'
export { default as Procedimentos } from '../../components/organisms/Procedimentos.vue'
export { default as Banners } from '../../components/molecules/Banners.vue'
export { default as Bucomaxilofacial } from '../../components/molecules/Bucomaxilofacial.vue'
export { default as Footer } from '../../components/molecules/Footer.vue'
export { default as HOF } from '../../components/molecules/HOF.vue'
export { default as HOFC } from '../../components/molecules/HOFC.vue'
export { default as Header } from '../../components/molecules/Header.vue'
export { default as Implantodontia } from '../../components/molecules/Implantodontia.vue'
export { default as Sobre } from '../../components/molecules/Sobre.vue'
export { default as TitleHome } from '../../components/molecules/TitleHome.vue'
export { default as Bucofacial } from '../../components/atoms/Bucofacial.vue'
export { default as ButtonExplorar } from '../../components/atoms/ButtonExplorar.vue'
export { default as ButtonHeader } from '../../components/atoms/ButtonHeader.vue'
export { default as ButtonOla } from '../../components/atoms/ButtonOla.vue'
export { default as ButtonVer } from '../../components/atoms/ButtonVer.vue'
export { default as ChipsGroup } from '../../components/atoms/ChipsGroup.vue'
export { default as Facebook } from '../../components/atoms/Facebook.vue'
export { default as GhostButton } from '../../components/atoms/GhostButton.vue'
export { default as HofCard } from '../../components/atoms/HofCard.vue'
export { default as HofCirurgicaCard } from '../../components/atoms/HofCirurgicaCard.vue'
export { default as ImplantodontiaCard } from '../../components/atoms/ImplantodontiaCard.vue'
export { default as Instagram } from '../../components/atoms/Instagram.vue'
export { default as Linkdl } from '../../components/atoms/Linkdl.vue'
export { default as LogoTiago } from '../../components/atoms/LogoTiago.vue'
export { default as Tiago } from '../../components/atoms/Tiago.vue'
export { default as WhatsApp } from '../../components/atoms/WhatsApp.vue'
export { default as AnaPaula } from '../../components/molecules/Depoimentos/AnaPaula.vue'
export { default as Avatar } from '../../components/molecules/Depoimentos/Avatar.vue'
export { default as JuliaCardoso } from '../../components/molecules/Depoimentos/JuliaCardoso.vue'
export { default as LauraAllram } from '../../components/molecules/Depoimentos/LauraAllram.vue'
export { default as StaelTorres } from '../../components/molecules/Depoimentos/StaelTorres.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
