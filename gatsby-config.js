module.exports = {
  siteMetadata: {
    title: '楽しいだけで十分です',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
  ],
}