export default function reducer(state={
    user: {
        name: "Bob"
    },
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_USER_FULFILLED':
            state = Object.assign({}, state.user, {
                user: {
                    name: action.payload
                }
            })
            break;
        default:
            //console.log('Action not implemented');
            break;
    }
    return state;
}