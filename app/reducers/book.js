import * as types from '../api/constant';

const initialState = {
    books: [],
    book: {},
    isSuccess: false
};

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_BOOKS:
            return {
                ...state,
                books: action.books
            };

        case types.GET_BOOK_BY_ID:
            return {
                ...state,
                book: action.book
            };

        case types.EDIT_BOOK:
            return {
                ...state,
                book: action.book
            };

        case types.CHECK_SUCCESS:
            return {
                ...state,
                isSuccess: action.check
            };

        default:
            return state;
    }
};
