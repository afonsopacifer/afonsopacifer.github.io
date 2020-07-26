module.exports = {

  siteMetadata: {
    title: `Afonso Pacifer`,
    siteUrl: `https://afonsopacifer.github.io/`,
    description: `Afonso Pacifer personal website`,
    author: `@afonsopacifer`,
  },

  plugins: [

    // SEO

    `gatsby-plugin-react-helmet`,

    // Images

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
    },

    // PWA

    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `afonsopacifer.github.io`,
        short_name: `pacifer`,
        start_url: `https://afonsopacifer.github.io/`,
        background_color: `#2F2F2F`,
        theme_color: `#F5C416`,
        display: `minimal-ui`,
        icon: `src/assets/images/afonso_pacifer_logo.png`,
      },
    },

    // Fonts

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`400`, `600`, `800`],
          },
          {
            family: `Roboto`,
            variants: [`400`],
          },
        ],
      }
    },

    // Track

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-98299009-1",
      },
    },

  ],

}
