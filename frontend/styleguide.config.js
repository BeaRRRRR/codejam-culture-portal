const path = require('path');

module.exports = {
  components:'src/styled-components/**/*.ts',
  sections: [
		{
      name: 'Surfaces',
      components: 'src/styled-components/surfaces/**/*.tsx'
    },
    {
      name: 'Basics',
      components: 'src/styled-components/basics/**/*.tsx'
    },
    {
      name: 'Loading',
      components: 'src/styled-components/loading/**/*.tsx'
    }
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname,'src/theme/ThemeProvider.tsx')
  },
  propsParser: require('react-docgen-typescript').withDefaultConfig([]).parse,
	//propParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
	webpackConfig: require('./webpack.dev.config'),
	moduleAliases: {
    'rsg-example':  path.resolve(__dirname, 'src/styled-components')
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto'
        }
      ]
    },
    favicon: 'https://assets-cdn.github.com/favicon.ico'
  },
  theme: {
    fontFamily: {
      base: '"Roboto", sans-serif'
    }
  }
}
