module.exports = {
  siteMetadata: {
    title: '楽しいだけで十分です',
    description: 'Webエンジニアのyinmのブログです',
    siteUrl: 'https://yinm.info',
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}
