module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: ['react-refresh', '@typescript-eslint', 'import', 'prettier'],
    rules: {
        /* Common rules */
        'prefer-destructuring': ['error', { object: true, array: false }],
        'object-shorthand': [2, 'consistent'],
        'no-param-reassign': ['error', { props: false }],
        'no-console': ['error'],
        'no-unused-vars': ['off'],

        /* TypeScript rules */
        '@typescript-eslint/no-floating-promises': ['off'],
        '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/no-throw-literal': ['off'],
        '@typescript-eslint/restrict-template-expressions': ['error', { allowNever: true }],
        '@typescript-eslint/no-unsafe-assignment': ['off'],
        '@typescript-eslint/no-unused-vars': ['warn'],

        /* React rules */
        'react/no-unused-prop-types': ['warn', { ignore: ['instanceType'] }],
        'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'never' }],
        'react/jsx-boolean-value': ['error', 'always'],
        'react/destructuring-assignment': ['off'],
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

        /* Import rules */
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['**/*.config.ts'],
            },
        ],
        'import/prefer-default-export': ['off'],
        'import/no-unused-imports': ['off'],

        /* A11y rules */
        'jsx-a11y/click-events-have-key-events': ['off'],
        'jsx-a11y/no-static-element-interactions': ['off'],
    },
}
