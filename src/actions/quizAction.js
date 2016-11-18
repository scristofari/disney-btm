export function nextQuiz(score = 0) {
    return {
        type: 'QUIZ_NEXT',
        payload: score
    };
}

export function selectedAnswer(i) {
    return {
        type: 'ANSWER_SELECTED',
        payload: i
    };
}