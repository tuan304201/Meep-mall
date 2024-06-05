module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    // Cấu hình các quy tắc ESLint ở đây
    "no-unused-vars": "off",
  },
}
