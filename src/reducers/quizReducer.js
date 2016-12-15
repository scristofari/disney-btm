import data from '../fixtures/quiz'

export default function reducer(state = {
    step: 0,
    score: 0,
    finished: false,
    data: data,
    selected: {}
}, action) {
    switch (action.type) {
        case 'QUIZ_NEXT':
            state.score += action.payload
            if (state.step + 1 < state.data.length) {
                state = Object.assign({}, state, {
                    step: state.step + 1
                })
            } else {
                state = Object.assign({}, state, {
                    finished: true
                })
            }
            break;
        case '@@router/LOCATION_CHANGE':
            state = Object.assign({}, state, {
                step: 0,
                score: 0,
                finished: false,
                data: data
            })
            break;
        case 'ANSWER_SELECTED':
            state = Object.assign({}, state, {
                selected: {
                    [state.step] : action.payload
                }
            })
            break;
        default:
            break;
    }
    return state;
}