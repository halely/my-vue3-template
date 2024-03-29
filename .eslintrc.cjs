module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-essential",
        'plugin:prettier/recommended', // 添加 prettier 插件
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": '@typescript-eslint/parser',
        "sourceType": "module",
        "extraFileExtensions": [".vue"]
    },
    "plugins": [
        "vue",'@typescript-eslint', 'import'
    ],
    "rules": {
        'no-console': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
    }
}
