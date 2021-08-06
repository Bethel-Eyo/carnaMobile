import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {primary, background} from '../config/colors';
import {useSelector, useDispatch} from 'react-redux';
import {cancelEnrollment, getAllCourses, getEnrolledCourses} from '../actions/courses';
import {ScrollView, RefreshControl} from 'react-native';
import ActionButton from '../components/ActionButton';
import {withNavigation} from 'react-navigation';

const Enrolled = ({navigation}) => {
  const {enrolledCourses} = useSelector(state => state.courses);
  const {isLoading, isRefreshing} = useSelector(state => state.loading);
  const {userData} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [id, setId] = useState(null)

  useEffect(() => {
    dispatch(getEnrolledCourses(userData.user_id, navigation));
  }, []);

  useEffect(() => {
    if (isRefreshing) {
      setRefreshing(true);
    } else {
      setRefreshing(false);
    }
  }, [refreshing]);

  const handleCancelEnrollment = (id) => {
    console.log(id);
    setId(id);
    dispatch(cancelEnrollment(id, navigation));
  };

  const onRefresh = () => {
    dispatch(getEnrolledCourses(userData.user_id, navigation, true));
  }

  return (
    <Container>
      {enrolledCourses == null ? (
        <Text>You currently do not have any enrolled course</Text>
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[primary.main]}
              tintColor={primary.main}
            />
          }
          style={{flex: 1, width: '100%'}}
          contentContainerStyle={{alignItems: 'center'}}>
          <>
            {enrolledCourses.map((course, index) => (
              <CardView key={index}>
                <Title>{course.course_title}</Title>
                <Text>{course.course_description}</Text>
                <ActionButton
                  style={{width: '60%', marginTop: '7%'}}
                  title="Cancel Enrollment"
                  loading={(isLoading && course.course_id == id) ? true : false}
                  onPress={() => {handleCancelEnrollment(course.library_id)}}
                />
              </CardView>
            ))}
          </>
        </ScrollView>
      )}
    </Container>
  );
};

export default withNavigation(Enrolled);

const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  background: ${background.main};
`;

const Text = styled.Text`
  color: ${primary.text};
  margin-top: 20px;
  width: 80%;
`;

const Title = styled.Text`
  color: ${primary.text};
  font-size: 25px;
  margin-top: 5%;
`;

const CardView = styled.View`
  height: 200;
  width: 80%;
  padding-left: 5%;
  background: ${primary.light};
  border-radius: 30px;
  margin-top: 20px;
`;
