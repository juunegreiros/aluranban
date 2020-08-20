import React from 'react';
import Page from '../../components/Page';
import LoginForm from '../../containers/LoginForm';
import Container from './style';

const Home = () => (
  <Page>
    <Container>
      <LoginForm />
    </Container>
  </Page>
);

export default Home;
