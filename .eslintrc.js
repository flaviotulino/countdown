module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "describe":true,
    "it":true,
    "expect":true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-console": ["off"],

    "linebreak-style": [
      "error",
      "unix"
    ],
    "semi": [
      "warn",
      "always",
      { "omitLastInOneLineBlock": true}
    ],
    "no-unused-vars": ["off",{"vars":"local"}]
  }
};
