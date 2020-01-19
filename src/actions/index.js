export const GET_ENTRIES = 'GET_ENTRIES';
const getEntries = entries => ({type: GET_ENTRIES, entries});

const fetchEntries = () => dispatch => {
    const entries = require('../mocks/entries');
    console.log(entries)
    dispatch(getEntries(entries));
};

export const actions = {
    fetchEntries
};