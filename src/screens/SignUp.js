import React, {useState} from 'react';
import styled from 'styled-components';
import {background, primary} from '../config/colors';
import {HomeIllustration, AuthBackIcon} from '../components/SVGImages';
import ActionButton from '../components/ActionButton';
import InputField from '../components/InputField';
import {ScrollView, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { register } from '../actions/auth';

const SignUp = ({navigation}) => {
  const {isLoading} = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSignUp = () => {
    let data = {
      name,
      username,
      password,
      city,
      country,
    };

    console.log(data);
    dispatch(register(data, navigation));
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
          <HomeIllustration style={{marginTop: '3%'}} />
          <InputField
            label="Full Name"
            labelWidth={63}
            placeholder="John Doe"
            onChangeText={name => setName(name)}
          />
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
            onChangeText={password => setPassword(password)}
          />
          <InputField
            label="city"
            labelWidth={27}
            placeholder="Florida"
            onChangeText={city => setCity(city)}
          />
          <InputField
            label="Country"
            labelWidth={55}
            placeholder="USA"
            onChangeText={country => setCountry(country)}
          />
          <ActionButton
            style={{width: '80%', marginTop: '7%'}}
            title="Sign Up"
            loading={isLoading}
            onPress={handleSignUp}
          />
        </>
      </ScrollView>
    </Container>
  );
};

export default SignUp;

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
  margin-top: 3%;
`;
