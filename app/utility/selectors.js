import { createSelector } from 'reselect';
import _ from 'lodash';

const getFilteredBooks = (state) => state.library.books;
const getFilteringParams = (state, props) => props.match.params && props.match.params.book ?
    props.match.params.book : '';

export const getBooks = createSelector(
    [getFilteredBooks, getFilteringParams],
    (books, searchKey) => _.filter(books, (book) => book.title.toLowerCase().search(searchKey.toLowerCase()) !== -1)
);
