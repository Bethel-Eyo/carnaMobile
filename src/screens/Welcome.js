import React from 'react';
import styled from 'styled-components';
import {primary} from '../config/colors';
import ActionButton from '../components/ActionButton';
import OutlineButton from '../components/OutlineButton';
import {HomeIllustration} from '../components/SVGImages';

const Welcome = ({navigation}) => {
  return (
    <Container>
      <Title>Learn.English</Title>
      <Text>It's time to Learn a new language</Text>
      <HomeIllustration style={{marginTop: '10%'}} />
      <ActionButton
        style={{width: '80%', marginTop: '15%'}}
        title="Sign In"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <OutlineButton
        style={{width: '80%', marginTop: '5%'}}
        title="Signup For Free"
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </Container>
  );
};

export default Welcome;

const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
`;

const Text = styled.Text`
  color: ${primary.text};
`;

const Title = styled.Text`
  color: ${primary.text};
  font-size: 30px;
  margin-top: 10%;
`;
