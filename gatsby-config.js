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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-118700310-1`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
  ],
}