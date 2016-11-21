export default function reducer(state={
    user: {
        name: "Bob"
    }
}, action) {
    switch (action.type) {
        default:
            //state =  {...state, name: action.payload}
            state = Object.assign(state, action.payload)
    }
    return state;
}