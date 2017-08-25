import { call, put, takeEvery, all } from 'redux-saga/effects';
import apiCall from '../api/apiRequest';
import endPoints from '../api/endPoints';
import * as types from '../api/constant';

export function* getBooksAsync() {
    try {
        const books = yield call(apiCall, {
            method: 'get',
            endpoint: endPoints.books
        });
        yield put({ type: types.GET_BOOKS, books });

    } catch (err) {
        console.log('error', err);
    }
}

export function* getBookByIdAsync(obj) {
    try {
        const endpoint = `${endPoints.book}/${obj.id}`;
        const book = yield call(apiCall, {
            method: 'get',
            endpoint
        });
        yield put({ type: types.GET_BOOK_BY_ID, book });
    } catch (err) {
        console.log('error', err);
    }
}

export function* editBookByIdAsync(action) {
    try {
        const endpoint = `${endPoints.book}/${action.id}`;
        const book = yield call(apiCall, {
            method: 'put',
            endpoint,
            payload: action.formData
        });
        yield put({ type: types.EDIT_BOOK, book });
        yield put({ type: types.CHECK_SUCCESS, check: true });
    } catch (err) {
        console.log('error', err);
    }
}

export function* watchGetBooks() {
    yield takeEvery(types.GET_BOOKS_ASYNC, getBooksAsync);
}

export function* watchGetBookById() {
    yield takeEvery(types.GET_BOOK_BY_ID_ASYNC, getBookByIdAsync);
}

export function* watchEditBook() {
    yield takeEvery(types.EDIT_BOOK_ASYNC, editBookByIdAsync);
}

export default function* rootSaga() {
    yield all([
        watchGetBooks(),
        watchGetBookById(),
        watchEditBook()
    ]);
}
