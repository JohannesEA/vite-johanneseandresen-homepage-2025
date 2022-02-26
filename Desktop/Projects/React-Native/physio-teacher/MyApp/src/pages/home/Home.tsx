import React from 'react';

//styles
import {View, Text} from 'react-native';
import {Title} from '../../styles/Text';
import {Wrapper} from '../../styles/Wrapper';

//components
import Login from './Login/Login';

const Home = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
};

export default Home;
