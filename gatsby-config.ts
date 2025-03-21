import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Afonso Pacifer`,
    siteUrl: `https://afonsopacifer.github.io/`,
    description: `Afonso Pacifer | Software Engineer and DevRel`,
    author: `@afonsopacifer`,
  },
  plugins: [

    // SEO

    // `gatsby-plugin-react-helmet`,

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

    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/articles/`, `/talks/`, `/videos/`, `/projects/`],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `afonsopacifer.github.io`,
        short_name: `pacifer`,
        start_url: `.`,
        background_color: `#2F2F2F`,
        theme_color: `#F5C416`,
        display: `minimal-ui`,
        icon: `static/logo/afonso_pacifer_logo_white.svg`,
        icon_options: {
          purpose: `any maskable`,
        },
        cache_busting_mode: 'none',
      },
    },

    // Fonts

    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Poppins`,
            file: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap`,
          },
          {
            name: `Roboto`,
            file: `https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'`,
          },
        ],
      },
    },

    // Track

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_ID,
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },

  ],

};

export default config;