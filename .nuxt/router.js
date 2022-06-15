import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5d70b3ab = () => interopDefault(import('..\\pages\\allusers.vue' /* webpackChunkName: "pages/allusers" */))
const _163426aa = () => interopDefault(import('..\\pages\\createtag.vue' /* webpackChunkName: "pages/createtag" */))
const _5ed4432a = () => interopDefault(import('..\\pages\\createuser.vue' /* webpackChunkName: "pages/createuser" */))
const _47ec3204 = () => interopDefault(import('..\\pages\\loginpage.vue' /* webpackChunkName: "pages/loginpage" */))
const _4920cb5a = () => interopDefault(import('..\\pages\\logs.vue' /* webpackChunkName: "pages/logs" */))
const _35e1c3bd = () => interopDefault(import('..\\pages\\tags.vue' /* webpackChunkName: "pages/tags" */))
const _65134d90 = () => interopDefault(import('..\\pages\\updateuser.vue' /* webpackChunkName: "pages/updateuser" */))
const _189d700a = () => interopDefault(import('..\\pages\\userprofile.vue' /* webpackChunkName: "pages/userprofile" */))
const _899e7b44 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/allusers",
    component: _5d70b3ab,
    name: "allusers"
  }, {
    path: "/createtag",
    component: _163426aa,
    name: "createtag"
  }, {
    path: "/createuser",
    component: _5ed4432a,
    name: "createuser"
  }, {
    path: "/loginpage",
    component: _47ec3204,
    name: "loginpage"
  }, {
    path: "/logs",
    component: _4920cb5a,
    name: "logs"
  }, {
    path: "/tags",
    component: _35e1c3bd,
    name: "tags"
  }, {
    path: "/updateuser",
    component: _65134d90,
    name: "updateuser"
  }, {
    path: "/userprofile",
    component: _189d700a,
    name: "userprofile"
  }, {
    path: "/",
    component: _899e7b44,
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
