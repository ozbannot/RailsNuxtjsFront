export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as AppFooter } from '../../components/App/AppFooter.vue'
export { default as HomeAbout } from '../../components/Home/HomeAbout.vue'
export { default as HomeAppBar } from '../../components/Home/HomeAppBar.vue'
export { default as HomeCompany } from '../../components/Home/HomeCompany.vue'
export { default as HomeContact } from '../../components/Home/HomeContact.vue'
export { default as HomePrice } from '../../components/Home/HomePrice.vue'
export { default as HomeProducts } from '../../components/Home/HomeProducts.vue'
export { default as WelcomeWelAbout } from '../../components/welcome/welAbout.vue'
export { default as WelcomeWelAppBar } from '../../components/welcome/welAppBar.vue'
export { default as WelcomeWelCompany } from '../../components/welcome/welCompany.vue'
export { default as WelcomeWelContact } from '../../components/welcome/welContact.vue'
export { default as WelcomeWelPrice } from '../../components/welcome/welPrice.vue'

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
