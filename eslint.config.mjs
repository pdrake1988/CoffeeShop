// @ts-check

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    files: ["**/*.{ts,tsx,js,mjs}"],
    ignores: [".amplify/**", "amplify_outputs*", "amplifyconfiguration*"],
  },
  {
    files: ["__tests__/**/*.{js,ts,tsx}"],
    languageOptions: {
      globals: {
        jest: true,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  eslintPluginPrettierRecommended,
]);
