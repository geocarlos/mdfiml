const entries = (state = [], action) => {
    switch(action.type) {
        case 'GET_ENTRIES':
            return [];
        default:
            return state;
    }
}

export default entries;