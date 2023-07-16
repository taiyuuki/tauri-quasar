import {
    defineConfig,
    presetUno,
    presetAttributify,
    presetIcons,
} from 'unocss'

export default defineConfig({
    presets: [
        presetAttributify({}),
        presetUno(),
        presetIcons(),
    ],
    shortcuts: [],
    variants: [],
})
