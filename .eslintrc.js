module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/jsx-one-expression-per-line": ["off"],
      "max-len": ["error", { "ignoreTemplateLiterals": true, "code": 120 }]
    }
};
