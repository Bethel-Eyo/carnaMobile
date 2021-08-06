import React from 'react';
import styled from 'styled-components';
import {primary, background} from '../config/colors';
import ActionButton from '../components/ActionButton';
import OutlineButton from '../components/OutlineButton';
import {useSelector, useDispatch} from 'react-redux';
import { signOut } from '../actions/auth';

const Home = ({navigation}) => {
  const {userData} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <Container>
      <CardView>
        <Title style={{ fontWeight: 'bold'}}>Carna Mobile</Title>
      </CardView>
      <Title>Hi {userData.name}!</Title>
      <Text>username: {userData.username}</Text>
      <Text>city: {userData.city}</Text>
      <Text>country: {userData.country}</Text>
      <ActionButton
        style={{width: '80%', marginTop: '7%'}}
        title="View Courses"
        onPress={() => {
          navigation.navigate('Courses');
        }}
      />
      <OutlineButton
        style={{width: '80%', marginTop: '5%'}}
        title="Log Out"
        onPress={() => {
          dispatch(signOut(navigation))
        }}
      />
    </Container>
  );
};

export default Home;

const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  background: ${background.main};
`;

const Text = styled.Text`
  color: ${primary.text};
  margin-top: 10px;
`;

const Title = styled.Text`
  color: ${primary.text};
  font-size: 25px;
  margin-top: 5%;
`;

const CardView = styled.View`
  height: 200;
  width: 300;
  background: ${primary.light};
  border-radius: 30px;
  margin-top: 10%;
  align-items: center;
  justify-content: center;
`;
