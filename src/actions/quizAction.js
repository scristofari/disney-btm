export function nextQuiz(score = 0) {
    return {
        type: 'QUIZ_NEXT',
        payload: score
    };
}