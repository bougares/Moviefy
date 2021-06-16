# Moviefy - Centralized Movie Store

## Introduction

You are working for a company called Moviefy, the world’s largest online movie store. The core concept that made your company a leader in the market is centralization, as Moviefy has become the one and only service allowing people to buy all the movies in the world. Being such a centralization enthusiasts, your company has recently discovered `redux`, a centralized state container, and has started adopting the idea across all the provided applications. Your team has been chosen for this job. You will be starting from the mobile app.

## Problem Statemenfffffft

1. In order to complete the task, debug or write additional code to ensure all the unit tests pass.

2. Service objects under `/model` are designed to mimic the asynchronous HTTP API and serve as a fake back end. A corresponding service should be used to perform any updates on its model.

3. Below you can find a list of missing features and technical requirements of the application. Make sure all of them are implemented and working according to the specification.

4. You should use redux along with redux-specific environment in your solution.

## Requirements


1. The Sign In and Sign Up forms should be connected to the redux store with the help of a `redux-form`.

  * The Sign In form should contain a username and a password.
  * Both fields should be required.
  * The username can be at most 15 characters long.
  * The password has to be at least 6 characters long.
  * The Sign In form should be visible under the `signIn` key in the store.
  * The Sign Up form should contain a username and a password confirmation.
  * All of those fields should be required.
  * The username can be at most 15 characters long.
  * The password has to be at least 6 characters long.
  * The password and password confirmation fields have to match.
  * The Sign Up form should be visible under the `signUp` key in the store.


2. Dispatching asynchronous redux actions should be possible.


  * This should be achieved with redux middleware.
  * When passing an action as a function to this middleware, it should invoke this action passing all information required for this action to dispatch additional ones.
    

3. The user should be able to make an order.


  * There should be a redux action to add, remove and complete an order.
  * When an order is completed, it should be published with the `OrderService` instantiated with a token taken from the signed up user, that is from the `account -> user -> token` in the redux store.
  * If publishing an order succeeds, the order should be confirmed.
  * If publishing an order fails, the order should be denied.
  * There should be a reducer computing the order state based on the current order and the dispatched actions.
  * Adding or removing a movie should adjust the `totalPrice` and the `movies` list.
  * Confirming an order or logging out, should clear out the order form.
  * The user should dispatch proper actions through a `MovieOrderScreen`.


4. The user should be able to filter the list of the possible movies and order it by genre or title.


  * Currently, there is a bug and the list is not loading properly.
   
   
5. In the profile screen, the user should have the ability to see the total price of all previously made orders.


## Hints

Focus on the following files:
  - `screens/forms/SignInForm.js`,
  - `screens/forms/SignUpForm.js`,
  - `screens/ConnectedMoviesOrderScreen.js`,
  - `redux/middleware.js`,
  - `redux/selectors/moviesSelector.js`,
  - `redux/selectors/totalMoneySpentSelector.js`,
  - `redux/reducers/currentOrderReducer.js`,
  - `redux/actionCreators/orderActionCreators.js`.

## Setup

In order to run the project in a local environment, you need to download the project and run `npm install` to fetch and install all the dependencies. Then, you will be able to use the following commands:

- Run for iOS - `npm run ios`,
- Run for Android - `npm run android`,
- Run tests - `npm run test`.
