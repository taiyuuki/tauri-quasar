#  tauri-quasar

Tauri  + Quasar CLI (Vite) starter template.

## Resources

- [x] Vue 3
- [x] Quasar CLI
- [x] Vite
- [x] File system based routing

  - [x] vite-plugin-pages

  - [x] vite-plugin-vue-layouts
- [x]  pinia
- [x] unocss
  - [x]  preset-attributify
  - [x]  preset-icons
  - [x]  preset-uno

## Quick start

Note: Need to **Rust edition 2024 Release** or later.

### Install the dependencies

```bash
pnpm install
```

### Start the app in development mode

```bash
pnpm tauri:dev
```

### Lint the files

```bash
pnpm lint
```

### Build the app

Change the bundle identifier in `tauri.conf.json > tauri > bundle > identifier`, then

```bash
pnpm tauri:build
```
## Preview

![preview.png](preview.png)

## Customize the configuration

https://vitejs.dev/

https://vuejs.org/

https://quasar.dev/

https://tauri.app/
