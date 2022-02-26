import React from 'react';

//styles
import {Title, UnderTitle} from '../../../styles/Text';
import {Wrapper} from './HomePage.styles';
import {LogoContainer, Logo} from '../../../styles/Image';

const Home = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo source={require('../../../assets/logos/logo1.png')} />
      </LogoContainer>

      <Title></Title>
    </Wrapper>
  );
};

export default Home;
