export default function reducer(state={
    isOpen: false,
}, action) {
    switch (action.type) {
        case 'MENU_TOGGLE':
            state = Object.assign({}, state, { isOpen: !state.isOpen })
            break;
        default:
            //console.log('Action not implemented');
            break;
    }
    return state;
}