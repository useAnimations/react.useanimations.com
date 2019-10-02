import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import GlobalStyles from './GlobalStyles';
import Header from './Header';

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title, description } = data.site.siteMetadata;

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://useanimations.com/feather-og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@phung_cz" />
        <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
        <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
      </Helmet>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
