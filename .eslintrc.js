module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/prettier",
    "prettier",
  ],
  plugins: ["import"],
  parserOptions: {
    parser: "babel-eslint",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src/"]],
      },
      node: {
        path: ["src"],
      },
    },
    extensions: [".vue", ".json", ".js"],
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
