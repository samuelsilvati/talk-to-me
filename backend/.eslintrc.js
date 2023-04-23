module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es2021: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recomended",
    "prettier/@typescript-eslint",
    "standard-with-typescript",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
