## Dogstudio Nuxt Starter

The repository has all the features needed to build blazing-fast experience.

- Nuxt 3
- Prettier
- SCSS/SASS

## Prerequisites

- [Node.js - LTS](https://nodejs.org/en/download/)

## Getting Started

```bash
git clone git@github.com:Dogstudio/dogstudio-nuxt-starter.git my-new-app
git checkout next
```

```bash
cd my-new-app
cp .env.example .env
```

```bash
npm i
npm run dev
```

## Documentation

We recommend the following documentations to master the stack:

- [Vue](https://vuejs.org/guide/introduction.html)
- [Nuxt](https://v3.nuxtjs.org/getting-started/introduction)
- [Pinia](https://pinia.vuejs.org/ssr/nuxt.html#installation)
- [Style Guide](https://vuejs.org/style-guide/)
- [Atomic Design Pattern](https://atomicdesign.bradfrost.com/table-of-contents/)

## References

```bash
# Run Nuxt in development-mode with a local server.
# Visit http://localhost:3000 to see your application running.
npm run dev

# Run Nuxt in production-mode and creates a production build.
npm run build

# Run Nuxt in production-mode with a local server.
# Visit http://localhost:3000 to see your production build.
npm run start

# Run Nuxt in production-mode and generates static files.
npm run generate

# Run ESLint for JS & Vue files
npm run lint

# Upgrade the dependencies and devDependencies with interactive mode
# See: https://www.npmjs.com/package/npm-check-updates
npm run upgrade
```

## Example

An example is available on the `demo` branch to test all the features included in the repository:  

```bash
git checkout demo
```

```bash
npm i
npm run dev
```

## Contributing

Please submit issues, pull requests or [contact us](devops+nuxt-starter@dogstudio.be). We are open to all kind of contributions.

## License

The `dogstudio-nuxt-starter` repository is [MIT licensed](/LICENSE.md).

## Roadmap

- :white_check_mark: Upgrade `dependencies` and `devDependencies`
- :white_check_mark: Migrate architecture from Nuxt 2 to Nuxt 3
- :white_check_mark: Migrate plugins from Nuxt 2 to Nuxt 3
- :white_check_mark: Migrate Vue 2 to Vue 3 with Composition API
- :white_check_mark: Test icons imports
- :white_check_mark: Test fonts imports
- :white_check_mark: Test images imports
- :white_check_mark: Test videos imports
- :white_check_mark: Test audios imports
- :white_check_mark: Test styles imports
- :white_check_mark: Test shaders imports
- :white_check_mark: Test components imports
- :white_check_mark: Test environment variables
- :construction: Upgrade `@nuxtjs/i18n` to next stable version
