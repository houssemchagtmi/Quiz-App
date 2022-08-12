import React, { FC } from 'react'
import { AnswerObject } from '../App'
import { Wrapper } from '../App.style';
import { ButtonWrapper } from './QuestionCard.styles';
type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number
}

const QuestionCard: FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => {
    return (
        <div>
            <Wrapper>
                <p className='number'>
                    Question: {questionNr} / {totalQuestions}
                </p>
                <p dangerouslySetInnerHTML={{ __html: question }} />
                <div>
                    {answers.map((answer) => (
                        <ButtonWrapper
                            key={answer}
                            correct={userAnswer?.correctAnswer === answer}
                            userClicked={userAnswer?.answer === answer}
                        >
                            <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        </ButtonWrapper>
                    ))}
                </div>
            </Wrapper>
        </div>
    )
}

export default QuestionCard