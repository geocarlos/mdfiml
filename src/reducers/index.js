import { GET_ENTRIES } from '../actions';

const entries = (state = [], action) => {
    switch(action.type) {
        case GET_ENTRIES:
            return {
                ...state,
                entries: action.entries
            };
        default:
            return state;
    }
}

export default entries;