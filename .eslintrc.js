module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:node/recommended"],
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "no-console": "off",
    "node/exports-style": ["error", "module.exports"],
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"],
  }
}
