## Overview

This is the mobile app that was built for the user to consume the be-carna-api endpoints.

The app enable the user to sign in with their username and password. once they are signed in their token is gotten and stored in the device using react native's Asyncstorage, which is used to make subsequent calls to the api. I structured the project in a manner that it follows SOLID principles in react. and it also uses a lot of code abstractions which provides reusable parts across the system.

I used the popular state management library "redux" for state management accross the app.

I declared the two major actions of the user
1. auth - can be found in src/actions/auth.js
2. courses - can be found in src/actions/courses.js

1. auth
This action allows makes calls to the api to signUp and Login, during this process it updates it appropriate states declared in src/types/index.js. and is updated in src/reducers/auth.js.

it also updates the global loading state in src/reducers/loading.js

the loading state helps the ActionButton - src/components/ActionButton.js to determine when to show an ActivityLoader and when not to

2. courses.
This action allows the user to.
1. get all courses from the API
2. Enroll in a course.
3. Get all courses that the user has enrolled for.
4. Cancel an enrollment

while these actions are performed, their appropriate states are also being updated in src/reducers/courses.js

There is also a pull to refresh functionality that is attached to the scrollView of the Enrolled and Non enrolled courses screens respectively. the app screens can be found is src/screens

In the src/config folder, we have the color and constants which are used globally across the app.

In the src/helpers folder, we have the api boiler plate that is used to communicate with the API. we also have the Utils.js file that helps us check when a token has expired an logs the user out.

## What was deliberately not Implemented:

Since we have api tests already from the be-carna-api, and all the 15 test cases passed, there was no dire need to implement mock tests for the api on the frontend.

## What would have been built with more time.

It would have been nice to have End-to-End tests using Detox. but that would have taken a whole lot more time.