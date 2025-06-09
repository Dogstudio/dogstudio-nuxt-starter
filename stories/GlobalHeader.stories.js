import GlobalHeader from '~/components/GlobalHeader.vue'

export default {
  component: GlobalHeader,
}

export const Primary = {
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        args,
      }
    },
    template: '<GlobalHeader v-bind="args">{{ args.label }}</GlobalHeader>',
  }),
  args: {},
}
