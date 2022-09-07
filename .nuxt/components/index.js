export const Container = () => import('../../components/bosons/Container.vue' /* webpackChunkName: "components/container" */).then(c => wrapFunctional(c.default || c))
export const Depoimentos = () => import('../../components/organisms/Depoimentos.vue' /* webpackChunkName: "components/depoimentos" */).then(c => wrapFunctional(c.default || c))
export const Home = () => import('../../components/organisms/Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const Procedimentos = () => import('../../components/organisms/Procedimentos.vue' /* webpackChunkName: "components/procedimentos" */).then(c => wrapFunctional(c.default || c))
export const Bucofacial = () => import('../../components/atoms/Bucofacial.vue' /* webpackChunkName: "components/bucofacial" */).then(c => wrapFunctional(c.default || c))
export const ButtonExplorar = () => import('../../components/atoms/ButtonExplorar.vue' /* webpackChunkName: "components/button-explorar" */).then(c => wrapFunctional(c.default || c))
export const ButtonHeader = () => import('../../components/atoms/ButtonHeader.vue' /* webpackChunkName: "components/button-header" */).then(c => wrapFunctional(c.default || c))
export const ButtonOla = () => import('../../components/atoms/ButtonOla.vue' /* webpackChunkName: "components/button-ola" */).then(c => wrapFunctional(c.default || c))
export const ButtonVer = () => import('../../components/atoms/ButtonVer.vue' /* webpackChunkName: "components/button-ver" */).then(c => wrapFunctional(c.default || c))
export const ChipsGroup = () => import('../../components/atoms/ChipsGroup.vue' /* webpackChunkName: "components/chips-group" */).then(c => wrapFunctional(c.default || c))
export const Facebook = () => import('../../components/atoms/Facebook.vue' /* webpackChunkName: "components/facebook" */).then(c => wrapFunctional(c.default || c))
export const GhostButton = () => import('../../components/atoms/GhostButton.vue' /* webpackChunkName: "components/ghost-button" */).then(c => wrapFunctional(c.default || c))
export const HofCard = () => import('../../components/atoms/HofCard.vue' /* webpackChunkName: "components/hof-card" */).then(c => wrapFunctional(c.default || c))
export const HofCirurgicaCard = () => import('../../components/atoms/HofCirurgicaCard.vue' /* webpackChunkName: "components/hof-cirurgica-card" */).then(c => wrapFunctional(c.default || c))
export const ImplantodontiaCard = () => import('../../components/atoms/ImplantodontiaCard.vue' /* webpackChunkName: "components/implantodontia-card" */).then(c => wrapFunctional(c.default || c))
export const Instagram = () => import('../../components/atoms/Instagram.vue' /* webpackChunkName: "components/instagram" */).then(c => wrapFunctional(c.default || c))
export const Linkdl = () => import('../../components/atoms/Linkdl.vue' /* webpackChunkName: "components/linkdl" */).then(c => wrapFunctional(c.default || c))
export const LogoTiago = () => import('../../components/atoms/LogoTiago.vue' /* webpackChunkName: "components/logo-tiago" */).then(c => wrapFunctional(c.default || c))
export const Tiago = () => import('../../components/atoms/Tiago.vue' /* webpackChunkName: "components/tiago" */).then(c => wrapFunctional(c.default || c))
export const WhatsApp = () => import('../../components/atoms/WhatsApp.vue' /* webpackChunkName: "components/whats-app" */).then(c => wrapFunctional(c.default || c))
export const Banners = () => import('../../components/molecules/Banners.vue' /* webpackChunkName: "components/banners" */).then(c => wrapFunctional(c.default || c))
export const Bucomaxilofacial = () => import('../../components/molecules/Bucomaxilofacial.vue' /* webpackChunkName: "components/bucomaxilofacial" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/molecules/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const HOF = () => import('../../components/molecules/HOF.vue' /* webpackChunkName: "components/h-o-f" */).then(c => wrapFunctional(c.default || c))
export const HOFC = () => import('../../components/molecules/HOFC.vue' /* webpackChunkName: "components/h-o-f-c" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/molecules/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Implantodontia = () => import('../../components/molecules/Implantodontia.vue' /* webpackChunkName: "components/implantodontia" */).then(c => wrapFunctional(c.default || c))
export const Sobre = () => import('../../components/molecules/Sobre.vue' /* webpackChunkName: "components/sobre" */).then(c => wrapFunctional(c.default || c))
export const TitleHome = () => import('../../components/molecules/TitleHome.vue' /* webpackChunkName: "components/title-home" */).then(c => wrapFunctional(c.default || c))
export const AnaPaula = () => import('../../components/molecules/Depoimentos/AnaPaula.vue' /* webpackChunkName: "components/ana-paula" */).then(c => wrapFunctional(c.default || c))
export const Avatar = () => import('../../components/molecules/Depoimentos/Avatar.vue' /* webpackChunkName: "components/avatar" */).then(c => wrapFunctional(c.default || c))
export const JuliaCardoso = () => import('../../components/molecules/Depoimentos/JuliaCardoso.vue' /* webpackChunkName: "components/julia-cardoso" */).then(c => wrapFunctional(c.default || c))
export const LauraAllram = () => import('../../components/molecules/Depoimentos/LauraAllram.vue' /* webpackChunkName: "components/laura-allram" */).then(c => wrapFunctional(c.default || c))
export const StaelTorres = () => import('../../components/molecules/Depoimentos/StaelTorres.vue' /* webpackChunkName: "components/stael-torres" */).then(c => wrapFunctional(c.default || c))

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
