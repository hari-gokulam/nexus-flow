module.exports = {
    root: true, // Ensures ESLint stops looking for config files in parent directories
    env: {
        node: true, // Enables Node.js global variables and Node.js scoping
        browser: true, // Enables browser global variables
    },
    extends: [
        'eslint:recommended', // Uses the recommended rules from ESLint
        'plugin:vue/vue3-recommended', // Uses the recommended rules for Vue 3
       
    ],
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        parser: '@babel/eslint-parser', // Specifies the parser to use (e.g., for Babel features)
        babelOptions: {
            presets: ["@babel/preset-env"], // Include your Babel presets here
            // You can also add plugins or other Babel options
        },
    },
    rules: {
        'no-unused-vars': 'off',
        // Custom rules or overrides go here
        // Example: 'vue/no-unused-vars': 'error',
        // Example: 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // Example: 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    // Optionally, you might include settings for specific plugins or resolvers
    // settings: {
    //   'import/resolver': {
    //     webpack: {
    //       config: 'webpack.config.js', // If you're using webpack and need module resolution
    //     },
    //   },
    // },
};