import QuestionCard from './QuestionCard'

const AnswerRow = props => {

    const row = [
        props.cat1,
        props.cat2,
        props.cat3,
        props.cat4,
        props.cat5,
        props.cat6
    ]

    return (
        <div className='row'>
            {row.map((elem, idx) =>
                <QuestionCard key={props.value + idx} question={elem} />
            )}
        </div>
    )
    
}

export default AnswerRow