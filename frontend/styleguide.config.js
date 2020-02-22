const path = require('path');

module.exports = {
  components:'src/styled-components/**/*.ts',
  sections: [
    {
      name: 'Basics',
      components: 'src/styled-components/basics/**/*.tsx'
    },
    {
      name: 'Advanced',
      components: 'src/styled-components/advanced/**/*.tsx'
    }

  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname,'src/theme/ThemeProvider.tsx')
  },
  propsParser: require('react-docgen-typescript').withDefaultConfig([]).parse,
	//propParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
	webpackConfig: require('./webpack.dev.config')
}
