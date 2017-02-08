module.exports = {
    "extends": "airbnb",
    "env": {
      "browser": true,
    },
    "ecmaFeatures": {
      "jsx": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "comma-dangle": [2, "never"],
      "import/no-extraneous-dependencies": [1, {
        devDependencies: false,
        optionalDependencies: false
      }],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "max-len": [2, 120, 4]
    }
};
