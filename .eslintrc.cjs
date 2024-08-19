module.exports
= {
// root: true,
plugins: ['@typescript-eslint',
'import', 
'prettier'],
extends: [
'airbnb',
'airbnb-typescript',
'prettier',
'plugin:@typescript-eslint/recommended',
'plugin:@typescript-eslint/recommended-requiring-type-checking',
'plugin:import/typescript',
'plugin:prettier/recommended',
],
parser:
'@typescript-eslint/parser',
parserOptions: {
project:
'./tsconfig.eslint.json',
},
rules: {
'@typescript-eslint/no-floating-promises': ['off'],
'@typescript-eslint/no-use-before-define': ['off'],
'@typescript-eslint/no-throw-literal': ['off'],
'@typescript-eslint/restrict-template-expressions': ['error', {
allowNever:
true }],
'react/no-unused-prop-types': ['warn', {
ignore: ['instanceType'] }],
'react/jsx-curly-brace-presence': ['error', {
props:
'always', 
children: 
'never' }],
'react/jsx-boolean-value': ['error',
'always'],
'react/destructuring-assignment': ['off'],
'prefer-destructuring': ['error', {
object:
true, 
array: 
false }],
// 'react/no-array-index-key': ['off'],
// 'react/jsx-props-no-spreading': ['off'],
'react/function-component-definition': [
2,
{
namedComponents:
'arrow-function',
unnamedComponents:
'arrow-function',
},
],
'object-shorthand': [2,
'consistent'],
'no-param-reassign': ['error', {
props:
false }],
'import/prefer-default-export': ['off'],
'no-console': ['error'],
},
}
