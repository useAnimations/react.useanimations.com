import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import IconGrid from '../components/IconGrid';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <Hero />
    <Container>
      <IconGrid />
    </Container>
    <Footer />
  </Layout>
);

export default IndexPage;

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: ${`${theme.space[4]} ${theme.space[5]}`};
`;
