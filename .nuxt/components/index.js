export const Container = () => import('../../components/bosons/Container.vue' /* webpackChunkName: "components/container" */).then(c => wrapFunctional(c.default || c))
export const AnimatedGear = () => import('../../components/atoms/AnimatedGear.vue' /* webpackChunkName: "components/animated-gear" */).then(c => wrapFunctional(c.default || c))
export const ButtonHeader = () => import('../../components/atoms/ButtonHeader.vue' /* webpackChunkName: "components/button-header" */).then(c => wrapFunctional(c.default || c))
export const ButtonOla = () => import('../../components/atoms/ButtonOla.vue' /* webpackChunkName: "components/button-ola" */).then(c => wrapFunctional(c.default || c))
export const ButtonVer = () => import('../../components/atoms/ButtonVer.vue' /* webpackChunkName: "components/button-ver" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../../components/atoms/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const Building = () => import('../../components/molecules/Building.vue' /* webpackChunkName: "components/building" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/molecules/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/molecules/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))

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
