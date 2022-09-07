import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c0bb0a1 = () => interopDefault(import('../pages/procedimentos/Bucomaxilo.vue' /* webpackChunkName: "pages/procedimentos/Bucomaxilo" */))
const _50348c95 = () => interopDefault(import('../pages/procedimentos/HOF.vue' /* webpackChunkName: "pages/procedimentos/HOF" */))
const _2f2ddd78 = () => interopDefault(import('../pages/procedimentos/HOFCirurgica.vue' /* webpackChunkName: "pages/procedimentos/HOFCirurgica" */))
const _34f8c3ea = () => interopDefault(import('../pages/procedimentos/Implantodontia.vue' /* webpackChunkName: "pages/procedimentos/Implantodontia" */))
const _7190e3fe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/procedimentos/Bucomaxilo",
    component: _2c0bb0a1,
    name: "procedimentos-Bucomaxilo"
  }, {
    path: "/procedimentos/HOF",
    component: _50348c95,
    name: "procedimentos-HOF"
  }, {
    path: "/procedimentos/HOFCirurgica",
    component: _2f2ddd78,
    name: "procedimentos-HOFCirurgica"
  }, {
    path: "/procedimentos/Implantodontia",
    component: _34f8c3ea,
    name: "procedimentos-Implantodontia"
  }, {
    path: "/",
    component: _7190e3fe,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
