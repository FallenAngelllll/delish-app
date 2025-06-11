import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-next";
import prettierPlugin from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    root: true,
    rules: {
      ...prettierPlugin.configs.recommended.rules, // prettier
      ...eslintConfigPrettier.rules, // prettier
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // consts export
      'prefer-const': 'warn', // use const for variables which are never reassigned
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }], // no curly braces in JSX
      'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }], // use arrow function for function components
      'react/self-closing-comp': ['error', { component: true, html: true }], // no self-closing components without children
      'max-lines': ['warn', { max: 124 }], // no more than 124 lines
      'max-params': ['warn', 3], // no more than 3 params
      'prettier/prettier': ['error', { endOfLine: 'auto' }], // prettier
      'no-console': 'warn', // no console
      eqeqeq: 'warn', // use === instead of ==
      camelcase: 'error', // use camelCase in variable names and function names
      'array-callback-return': 'warn', // use array.map instead of array.forEach
      'object-curly-spacing': ['warn', 'always'], // no curly braces in arrays
      semi: ['error', 'never'], // no semi
      indent: ['error', 2, { SwitchCase: 1 }], // no more than 2 spaces
      'jsx-quotes': ['error', 'prefer-single'], // use double quotes for JSX
      'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }], // newline per chained call
    },
  },
  {
    languageOptions: {
      parser: "@typescript-eslint/parser",
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ["@typescript-eslint"],
  }
];

export default eslintConfig;
