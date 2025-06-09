import GlobalFooter from '~/components/GlobalFooter.vue'

export default {
  component: GlobalFooter,
}

export const Primary = {
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        args,
      }
    },
    template: '<GlobalFooter v-bind="args">{{ args.label }}</GlobalFooter>',
  }),
  args: {},
}
