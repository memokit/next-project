import fetch from 'isomorphic-unfetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_ITEM,
} from '../../../constants/ActionTypes';
import { fetchItemDataFail, fetchItemDataSuccess } from '../../actions/blog';
import api from '../../../constants/ApiUrl';
/**
 * userItem saga
 */
export function *blogItem() {
  while (true) {
    yield take(FETCH_ITEM);
    try {
      const res = yield fetch(api.getItem);
      const data = yield res.json();
      yield put(fetchItemDataSuccess(data));
    } catch (error) {
      yield put(fetchItemDataFail(error));
    }
  }
}

export default [
  fork(blogItem)
];




