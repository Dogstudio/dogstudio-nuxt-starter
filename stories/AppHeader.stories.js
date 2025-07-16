import AppHeader from '~/components/AppHeader.vue'

export default {
  component: AppHeader,
}

export const Primary = {
  render: (args) => ({
    components: { AppHeader },
    setup() {
      return {
        args,
      }
    },
    template: '<AppHeader v-bind="args" />',
  }),
  args: {},
}
