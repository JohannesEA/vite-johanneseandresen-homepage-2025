import React, {useState, MouseEvent} from 'react';
import {Link} from 'react-router-native';

//styles
import {Title, UnderTitle} from '../../../styles/Text';
import {Wrapper} from './Login.styles';
import {LogoContainer, Logo} from '../../../styles/Image';
import {Input, Form} from '../../../styles/Forms';
import {Alert} from 'react-native';
import {Button} from '../../../styles/Buttons';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('username: ' + username);
    console.log('password: ' + password);
  };

  return (
    <Wrapper>
      <LogoContainer>
        <Logo source={require('../../../assets/logos/logo1.png')} />
      </LogoContainer>
      <Form>
        <Title></Title>
        <Input
          name="username"
          secureTextEntry={false}
          placeholder="Brukernavn"
          onChangeText={userInput => setUsername(userInput)}
        />
        <Input
          name="password"
          secureTextEntry={true}
          placeholder="Passord"
          onChangeText={userInput => setPassword(userInput)}
        />

        <Link to="/homepage">
          <Button title="LOGG INN" />
        </Link>
      </Form>
    </Wrapper>
  );
};

export default Home;
