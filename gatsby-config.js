module.exports = {
  siteMetadata: {
    title: 'UseAnimations – React micro-animations library',
    description:
      'Animated icons in Lottie Framework and After Effects for immediate implementation to your apps or websites.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'UseAnimations',
        short_name: 'UseAnimations',
        description: 'React micro-animations library',
        start_url: '/',
        theme_color: '#06f',
        background_color: '#fff',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-63028889-4',
        anonymize: true,
      },
    },
  ],
};
