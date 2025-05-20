import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
//   { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.node } },
//   tseslint.configs.recommended,
// ]);

export default [
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  { ignores: ["**/*.js"] },
  {
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
];
