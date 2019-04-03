import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _18fe257c = () => import('../pages/biography.vue' /* webpackChunkName: "pages/biography" */).then(m => m.default || m)
const _00880814 = () => import('../pages/concerts.vue' /* webpackChunkName: "pages/concerts" */).then(m => m.default || m)
const _20113ada = () => import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */).then(m => m.default || m)
const _2713cb4a = () => import('../pages/guestbook.vue' /* webpackChunkName: "pages/guestbook" */).then(m => m.default || m)
const _7bb1d526 = () => import('../pages/media.vue' /* webpackChunkName: "pages/media" */).then(m => m.default || m)
const _0b3b964c = () => import('../pages/news.vue' /* webpackChunkName: "pages/news" */).then(m => m.default || m)
const _44bee544 = () => import('../pages/photoalbum.vue' /* webpackChunkName: "pages/photoalbum" */).then(m => m.default || m)
const _0c58024c = () => import('../pages/press.vue' /* webpackChunkName: "pages/press" */).then(m => m.default || m)
const _0be68781 = () => import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */).then(m => m.default || m)
const _0d8d00fe = () => import('../pages/repertoire.vue' /* webpackChunkName: "pages/repertoire" */).then(m => m.default || m)
const _1270a75b = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/biography",
			component: _18fe257c,
			name: "biography"
		},
		{
			path: "/concerts",
			component: _00880814,
			name: "concerts"
		},
		{
			path: "/contacts",
			component: _20113ada,
			name: "contacts"
		},
		{
			path: "/guestbook",
			component: _2713cb4a,
			name: "guestbook"
		},
		{
			path: "/media",
			component: _7bb1d526,
			name: "media"
		},
		{
			path: "/news",
			component: _0b3b964c,
			name: "news"
		},
		{
			path: "/photoalbum",
			component: _44bee544,
			name: "photoalbum"
		},
		{
			path: "/press",
			component: _0c58024c,
			name: "press"
		},
		{
			path: "/projects",
			component: _0be68781,
			name: "projects"
		},
		{
			path: "/repertoire",
			component: _0d8d00fe,
			name: "repertoire"
		},
		{
			path: "/",
			component: _1270a75b,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
