import {useState} from 'react'

const QuestionCard = props => {

    const [flips, setFlips] = useState(0);

    const incFlips = () => {
        setFlips(flips + 1)
    }
    

    if(props.question) {
        if(flips == 0) {
            return (
                <div onClick={incFlips}className='answercard'>
                    {props.question.value}
                </div>
            )
        }else if(flips == 1) {
            return (
                <div onClick={incFlips} className='answercard'>
                    {props.question.question}
                </div>
            )
        }else if(flips == 2) {
            return (
                <div onClick={incFlips} className='answercard'>
                    {props.question.answer}
                </div>
            )
        }else {
            return (
                <div className='answercard'>
                </div>
            )
        }
    }else {
        return (
            <div className='answercard'>
                loading...
            </div>
        )
    }
    
    
    
}

export default QuestionCard