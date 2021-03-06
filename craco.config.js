const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json'
      }
    }
  ],
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  }
};
