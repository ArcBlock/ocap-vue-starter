module.exports = (api, options, rootOptions) => {
  // modify package.json fields
  api.extendPackage({
    dependencies: {
      'vue-router': '^3.0.1',
      'semantic-ui-css': '^2.3.3',
      'semantic-ui-vue': '^0.3.3',
      '@arcblock/ocap-js': '^0.3.8',
      'babel-polyfill': '^6.26.0',
    },
    devDependencies: {
      '@vue/cli-plugin-babel': '^3.0.1',
      '@vue/cli-plugin-eslint': '^3.0.1',
      '@vue/cli-service': '^3.0.1',
      'vue-template-compiler': '^2.5.17',
    },
    eslintConfig: {
      root: true,
      env: {
        node: true,
      },
      extends: ['plugin:vue/essential', 'eslint:recommended'],
      rules: {},
      parserOptions: {
        parser: 'babel-eslint',
      },
    },
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
    browserslist: ['> 1%', 'last 2 versions', 'not ie <= 8'],
  });

  // copy and render all files in ./template with ejs
  api.render('./template');
};
