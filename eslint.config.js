import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["vite.config.js"],
    plugins: { js, prettier: eslintPluginPrettier },
    extends: ["js/recommended", eslintConfigPrettier],
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
      "no-console": "warn",
    },
    languageOptions: { globals: globals.browser },
  },
]);
