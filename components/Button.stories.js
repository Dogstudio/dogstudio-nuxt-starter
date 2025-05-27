import Button from "./Button.vue";

export default {
  component: Button,
};

export const Primary = {
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        args,
      };
    },
    template: '<Button v-bind="args">{{ args.label }}</Button>',
  }),
  args: {
    primary: true,
    label: "Lorem Ispum",
  },
};
