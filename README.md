

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

### Build Error

The following errors may occur during the build: 

```bash
[vite:resolve] Missing "./preload-helper" export in "vite" package
```

Opens the file that reported the error(`\node_modules\vite\dist\node\chunks\dep-[hash].js`), find the `vite/preload-helper`, modify to `\0vite/preload-helper`, save and run `pnpm tauri:build` again.

## Customize the configuration

https://vitejs.dev/

https://vuejs.org/

https://quasar.dev/

https://tauri.app/
