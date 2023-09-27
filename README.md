# Nuxt Migration Example

This repository is a sample repository that uses Nuxt Bridge to migrate from Nuxt 2 to Nuxt 3.

## Migration from Nuxt 2 to Nuxt Bridge

https://github.com/wattanx/nuxt-migration-example/tree/migrate-nuxt-bridge

### Steps
- [First Step](https://nuxt.com/docs/bridge/overview)
  - chore: update nuxt bridge https://github.com/wattanx/nuxt-migration-example/pull/2
- [TypeScript](https://nuxt.com/docs/bridge/typescript)
  - Remove @nuxtjs/typescript-build module https://github.com/wattanx/nuxt-migration-example/pull/4
- [Legacy Composition API](https://nuxt.com/docs/bridge/bridge-composition-api)
  - ⚠️ Optional. You may skip this step and continue on to [New Composition API](https://nuxt.com/docs/bridge/nuxt3-compatible-api).
  - Remove @nuxtjs/composition-api module https://github.com/wattanx/nuxt-migration-example/pull/5
- [Meta Tags](https://nuxt.com/docs/bridge/meta)
  - new meta tag https://github.com/wattanx/nuxt-migration-example/pull/6
- [New Composition API](https://nuxt.com/docs/bridge/nuxt3-compatible-api)
  - Migrate to New Composition API https://github.com/wattanx/nuxt-migration-example/pull/7
- [Plugins and Middleware](https://nuxt.com/docs/bridge/plugins-and-middleware)
  - Plugins and middleware https://github.com/wattanx/nuxt-migration-example/pull/8
  - move to top-level plugin dir https://github.com/wattanx/nuxt-migration-example/pull/12
- [Nitro](https://nuxt.com/docs/bridge/nitro)
  - fix: enable nitro and nuxi https://github.com/wattanx/nuxt-migration-example/pull/9
- [Runtime Config](https://nuxt.com/docs/bridge/runtime-config)
  - Runtime Config https://github.com/wattanx/nuxt-migration-example/pull/10
 
## Migration from Nuxt Bridge to Nuxt 3

https://github.com/wattanx/nuxt-migration-example/tree/migrate-nuxt-3

Example PR: https://github.com/wattanx/nuxt-migration-example/pull/13 
