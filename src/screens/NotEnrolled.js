import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {primary, background} from '../config/colors';
import {useSelector, useDispatch} from 'react-redux';
import {enrollInCourse, getAllCourses, getEnrolledCourses} from '../actions/courses';
import {ScrollView, RefreshControl} from 'react-native';
import ActionButton from '../components/ActionButton';
import {withNavigation} from 'react-navigation';

const NotEnrolled = ({ navigation }) => {
  const {courses, enrolledCourses} = useSelector(state => state.courses);
  const {isLoading, isRefreshing } = useSelector(state => state.loading);
  const {userData} = useSelector(state => state.auth);
  const [id, setId] = useState(null)
  const [nonEnrolled, setNonEnrolled] = useState(null)
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getAllCourses(navigation));
  }, []);

  useEffect(() => {
    // Task to seive out the non enrolled course using the enrolled courses
    if(enrolledCourses != null){
      let objArr = [];
      let idArray = []
      // push course id of each enroll courses into an array
      enrolledCourses.forEach(element => {
        idArray.push(element.course_id)
      });

      // check if all courses includes it, if it doesn't set it as non enrolled course.
      courses.forEach(course => {
        if(idArray.includes(course.course_id)){
        } else {
          objArr.push(course);
        }
      });
      setNonEnrolled(objArr);
    }
  }, [enrolledCourses]);

  useEffect(() => {
    if (isRefreshing) {
      setRefreshing(true);
    } else {
      setRefreshing(false);
    }
  }, [refreshing]);

  const handleEnrollment = (course) => {
    setId(course.course_id);
    let data = {
      user_id: userData.user_id,
      course_id: course.course_id,
      course_title: course.title,
      course_description: course.description
    }

    console.log(data);
    dispatch(enrollInCourse(data, navigation))
    // console.log(nonEnrolled);
  };

  const onRefresh = () => {
    dispatch(getEnrolledCourses(userData.user_id, navigation, true));
  }

  return (
    <Container>
      {nonEnrolled == null ? (
        <Text>
          Either the courses had not been listed yet or You don't have any
          non-enrolled courses at the moment
        </Text>
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
            {nonEnrolled.map((course, index) => (
              <CardView key={index}>
                <Title>{course.title}</Title>
                <Text>{course.description}</Text>
                <ActionButton
                  style={{width: '30%', marginTop: '7%'}}
                  title="Enroll"
                  loading={(isLoading && course.course_id == id) ? true : false}
                  onPress={() => {handleEnrollment(course)}}
                />
              </CardView>
            ))}
          </>
        </ScrollView>
      )}
    </Container>
  );
};

export default withNavigation(NotEnrolled);

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
