module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "react-app", // Add this line to include Create React App rules
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "route/**"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // Add any additional rules here
  },
  overrides: [
    {
      files: ["src/**/*.js"],
      extends: ["react-app"], // Extend the Create React App rules for these files
    },
  ],
};
