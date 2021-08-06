import React, {useState} from 'react';
import styled from 'styled-components';
import {primary, background} from '../config/colors';
import {HomeIllustration, AuthBackIcon} from '../components/SVGImages';
import ActionButton from '../components/ActionButton';
import InputField from '../components/InputField';
import {ScrollView, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { login } from '../actions/auth';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);

  const handleLogin = () => {
    let data = {
      username,
      password,
    };

    console.log(data);
    dispatch(login(data, navigation));
  };
  return (
    <Container>
      <ScrollView
        style={{flex: 1, width: '100%'}}
        contentContainerStyle={{alignItems: 'center'}}>
        <>
          <FullWidth>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{marginLeft: '7%', marginTop: '2%'}}>
              <AuthBackIcon />
            </TouchableOpacity>
          </FullWidth>
          <Title>Create An Account</Title>
          <HomeIllustration style={{marginTop: '7%'}} />
          <InputField
            label="username"
            labelWidth={63}
            placeholder="johndoe"
            onChangeText={username => setUsername(username)}
          />
          <InputField
            label="Password"
            labelWidth={60}
            placeholder="*******"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <ActionButton
            style={{width: '80%', marginTop: '7%'}}
            title="Login"
            onPress={handleLogin}
            loading={isLoading}
          />
        </>
      </ScrollView>
    </Container>
  );
};

export default Login;

const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  background: ${background.main};
`;

const FullWidth = styled.View`
  width: 100%;
`;

const Title = styled.Text`
  color: ${primary.text};
  font-size: 30px;
  margin-top: 5%;
`;
