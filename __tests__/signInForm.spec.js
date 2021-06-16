import React from 'react';

import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import SignInForm from '../screens/forms/SignInForm';
import Button from '../components/Button';
import { REQUIRED, TOO_SHORT, TOO_LONG } from '../model/ValidationErrors';
import storeFactory from '../redux/store';

const FormWrapperFactory = store => props => (
  <Provider store={store}>
    <SignInForm {...props} />
  </Provider>
);

describe('SignInForm', () => {
  jest.useFakeTimers();

  it('shows proper errors if the fields are missing ', async () => {
    const store = storeFactory();
    const FormWrapper = FormWrapperFactory(store);

    const onSubmit = jest.fn();
    const initialValues = {};

    TestRenderer.create(<FormWrapper onSubmit={onSubmit} initialValues={initialValues} />);

    const formState = store.getState().form;
    const {
      signIn: { syncErrors }
    } = formState;

    expect(syncErrors).toEqual({ username: REQUIRED, password: REQUIRED });
  });

  it('shows proper errors if the fields are of incorrect length ', async () => {
    const store = storeFactory();
    const FormWrapper = FormWrapperFactory(store);

    const onSubmit = jest.fn();
    const initialValues = { username: 'thisisverylongusernametoolongifyouaskme', password: 'shr' };

    TestRenderer.create(<FormWrapper onSubmit={onSubmit} initialValues={initialValues} />);

    const formState = store.getState().form;
    const {
      signIn: { syncErrors }
    } = formState;

    expect(syncErrors).toEqual({ username: TOO_LONG(15), password: TOO_SHORT(6) });
  });

  it('calls on submit when form is submitted', async () => {
    const store = storeFactory();
    const FormWrapper = FormWrapperFactory(store);

    const onSubmit = jest.fn();
    const initialValues = { username: 'test', password: 'qwerty1234' };

    const testRenderer = TestRenderer.create(
      <FormWrapper onSubmit={onSubmit} initialValues={initialValues} />
    );
    const testFormWrapper = testRenderer.root;
    const testForm = testFormWrapper.findByType(SignInForm);
    const testSubmitButton = testForm.findAllByType(Button)[0];

    const formState = store.getState().form;
    const {
      signIn: { syncErrors, values }
    } = formState;

    expect(syncErrors).toBeUndefined();
    expect(values).toEqual(initialValues);

    testSubmitButton.props.onPress();

    expect(onSubmit).toHaveBeenCalled();
  });
});
