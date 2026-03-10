// eslint.config.js// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
	{
    basePath: 'src/',
		files: ["**/*.ts"],
    "extends": [
        eslint.configs.recommended,
        tseslint.configs.recommended,
    ],
		rules: {
      semi: 'error',
      "no-unused-vars": "off",
      "no-mixed-spaces-and-tabs": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-var-requires": "warn"
		},
	},
]);
