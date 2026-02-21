import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";

const tsRecommendedRules = tseslint.configs.recommended.reduce(
  (acc, cfg) => ({ ...acc, ...cfg.rules }),
  {}
);

const tsTypeCheckedRules = tseslint.configs.recommendedTypeChecked.reduce(
  (acc, cfg) => ({ ...acc, ...cfg.rules }),
  {}
);

export default [
  { ignores: ["dist/**", ".astro/**"] },

  ...astro.configs["flat/recommended"],

  js.configs.recommended,

  // TS + JS/JSX/TSX rules that come from typescript-eslint recommended
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      ...tsRecommendedRules,

      // you asked to stop caring about this rule
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },

  // Type-aware TS rules
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      ...tsTypeCheckedRules,

      // keep it off here too, in case the typed set re-enables it
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },

  // React / a11y / import rules
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
];