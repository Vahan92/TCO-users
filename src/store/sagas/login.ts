import { message } from 'antd';
import { takeLatest } from 'redux-saga/effects';

import { client } from '../../modules/request';
import { LOGIN_ACTION } from '../actions/login';

interface IUser {
  email: string,
  password: string
}

interface ResponseGenerator {
  data?: any;
}

function* loginUser({ payload }: { payload: IUser, type: IUser }) {
  try {
    const user: ResponseGenerator = yield client.post('login', payload);
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = '/';
  } catch (err) {
    message.error('Something went wrong');
  }
}

function* LoginSaga() {
  yield takeLatest(LOGIN_ACTION.ATTEMPT_TO_LOGIN, loginUser);
}

export default LoginSaga;
