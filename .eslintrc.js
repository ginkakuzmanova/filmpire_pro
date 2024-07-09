module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/react-in-jsx-scope': 0,
        'import/extensions': 0,
        'react/prop-types': 0,
        'linebreak-style': 0,
        'react/state-in-constructor': 0,
        'import/prefer-default-export': 0,
    }
};
