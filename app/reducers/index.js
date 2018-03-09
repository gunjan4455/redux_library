// import { combineReducers } from 'redux'
// import {allBooksReducer, singleBookReducer, isSuccessReducer} from './book'
//
// const rootReducer = combineReducers({
//    books: allBooksReducer,
//    book: singleBookReducer,
//    isSuccess: isSuccessReducer
// });
//
// export default rootReducer

import { combineReducers } from 'redux';
import { booksReducer as library } from './book';
import { gameReducer as game } from './tictactoe';

const rootReducer = combineReducers({
    library,
    game
});

export default rootReducer;
