import tyk from '@taiyuuki/eslint-config'

export default tyk({
    vue: true,
    ts: true,
    ignores: [
        '**/dist',
        '**/src-capacitor',
        '**/src-cordova',
        '**/.quasar',
        '**/node_modules',
        '**.eslintrc.js',
        '**/src-ssr',
    ],
    rules: {
        'vue/multi-word-component-names': ['error', {
            ignores: [
                'index',
                'default',
                '404',
            ],
        }],
    },
}, {
    files: ['quasar.config.js'],
    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'no-undef': 'off',
        '@stylistic/object-curly-newline': 'off',
    },
})
