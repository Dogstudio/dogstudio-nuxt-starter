import AppFooter from '~/components/AppFooter.vue'

export default {
  component: AppFooter,
}

export const Primary = {
  render: (args) => ({
    components: { AppFooter },
    setup() {
      return {
        args,
      }
    },
    template: '<AppFooter v-bind="args" />',
  }),
  args: {},
}
