module.exports = {
    env: {
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'plugin:jest/recommended',
    ],
    settings: {
        // to understand path aliases
        'import/resolver': {
            typescript: {},
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'jest',
        'modules-newline',
    ],
    rules: {
        // These two cause problems in jest because we need to
        // explicitely call callbacks in some cases to ensure no
        // open handles
        'require-await': 'off',
        'jest/no-done-callback': 'off',

        'arrow-parens': 'off',

        // We use expect in our table tests
        'jest/no-standalone-expect': 'off',
        'jest/valid-title': 'off',

        // Specifying extensions is anoying
        'import/extensions': ['error', 'never'],

        // need to ignore this because of our path aliases
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],

        // TODO: turn it back on after we implement a logger
        // https://app.clubhouse.io/tm/story/9607/implement-a-logger
        'no-console': 'off',

        // We currently use this in our __typename queries, we can remove it
        // but not sure how its used elsewhere
        'no-underscore-dangle': 'off',

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',

        // for loops
        'no-plusplus': 'off',
        'no-continue': 'off',

        'object-curly-newline': ['error', {
            consistent: true,
        }],
        'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],

        indent: ['error', 4],

        'modules-newline/import-declaration-newline': 'error',
        'modules-newline/export-declaration-newline': 'error',

        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['error'],

        quotes: ['error', 'single', { allowTemplateLiterals: true }],
    },
};
