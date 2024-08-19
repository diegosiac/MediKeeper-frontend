module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "simple-import-sort"],
  rules: {
    "no-console": "warn",
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "simple-import-sort/imports": [
      2,
      {
        groups: [
          ["^.+\\.s?css$"],
          [
            `^(${require("module").builtinModules.join("|")})(/|$)`,
            "^react",
            "^@?\\w",
          ],
          ["^components(/.*|$)"],
          ["^lib(/.*|$)", "^hooks(/.*|$)"],
          ["^\\."],
        ],
      },
    ],
  },
};
