import * as types from '../api/constant';

export const getBooksAsync = () => {
    return {
        type: types.GET_BOOKS_ASYNC
    };
};

export const editBookByIdAsync = (id, data) => {
    return {
        type: types.EDIT_BOOK_ASYNC,
        id,
        formData: data
    };
};

export const getBookByIdAsync = (id) => {
    return {
        type: types.GET_BOOK_BY_ID_ASYNC,
        id
    };
};

export const isSuccess = (check) => {
    return {
        type: types.CHECK_SUCCESS,
        check
    };
};

