import React, {useState, useEffect}  from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import NotEnrolled from './NotEnrolled';
import Enrolled from './Enrolled';
import { primary } from '../config/colors';

const FirstRoute = () => <NotEnrolled style={[styles.scene]} />;
const SecondRoute = () => <Enrolled style={[styles.scene]} />;

const initialLayout = {width: Dimensions.get('window').width};

const Courses = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Not Enrolled'},
    {key: 'second', title: 'Enrolled'},
  ]);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return ( <Container>
    <TabView
      style={{marginTop: 10}}
      renderTabBar={props => (
        <TabBar
          style={{
            margin: '3%',
            borderRadius: 10,
            backgroundColor: '#8BA79B',
          }}
          activeColor={primary.main}
          {...props}
          indicatorStyle={{
            position: 'absolute',
            margin: 2,
            width: '49%',
            height: '90%',
            top: 0,
            left: 0,
            backgroundColor: 'white',
            borderRadius: 10,
            boxWithShadow: {
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.8,
              shadowRadius: 1,
            },
          }}
          getLabelText={({ route }) => route.title}
        />
      )}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
    {/* <Text>Welcome to the Messages screen</Text> */}
  </Container> );
}
 
export default Courses;

const Container = styled.SafeAreaView`
  flex: 1;
  background: white;
`;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});