import { ReactNode } from 'react'
import cx from 'classnames'

import '../styles/question.scss'

type QuestionProps = {
    content: string,
    author: {
        nome: string,
        avatar: string,
    },
    children?: ReactNode,
    isHighlighted?: boolean,
    isAnswered?: boolean
}

export function Question ({
    content,
    author,
    isAnswered = false,
    isHighlighted = false,
    children,
}: QuestionProps) {
    return (
        <div 
            className= { cx(
                'question', 
                { answered: isAnswered},
                { highlighted: isHighlighted && !isAnswered}
            ) }
        >
            <p>{ content }</p>
            <footer>
                <div className="user-info">
                    <img src={ author.avatar } alt={ author.nome} />
                    <span>{ author.nome }</span>
                </div>
                <div>{ children }</div>
            </footer>
        </div>
    );
}