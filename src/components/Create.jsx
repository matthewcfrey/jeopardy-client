import {useState} from 'react'

const Create = props => {

    const [category, setCategory] = useState('')
    const [airDate, setAirDate] = useState('')
    const [question, setQuestion] = useState('')
    const [value, setValue] = useState('')
    const [answer, setAnswer] = useState('')
    const [round, setRound] = useState('')
    const [showNumber, setShowNumber] = useState('')

    const sendAnswer = () => {

        document.getElementById('category').value = ''
        document.getElementById('air_date').value = ''
        document.getElementById('question').value = ''
        document.getElementById('value').value = ''
        document.getElementById('answer').value = ''
        document.getElementById('show_number').value = ''

        fetch(import.meta.env.VITE_CREATE_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'category':category,
                'air_date':airDate,
                'question':question,
                'value':value,
                'answer':answer,
                'round':round,
                'show_number':showNumber
            })
        })
    }

    return (
        <div className='page'>
            category<br></br>
            <input type='text' name='category' id='category' onChange={e => {setCategory(e.target.value)}}></input><br></br>
            air date<br></br>
            <input type='text' name='air_date' id='air_date' onChange={e => {setAirDate(e.target.value)}}></input><br></br>
            question<br></br>
            <input type='text' name='question' id='question' onChange={e => {setQuestion(e.target.value)}}></input><br></br>
            value<br></br>
            <input type='text' name='value' id='value' onChange={e => {setValue(e.target.value)}}></input><br></br>
            answer<br></br>
            <input type='text' name='answer' id='answer' onChange={e => {setAnswer(e.target.value)}}></input><br></br>
            round<br></br>
            <select name='round' id='round' onChange={e => {setRound(e.target.value)}}>
                <option value="Jeopardy!">Jeopardy!</option>
                <option value="Double Jeopardy!">Double Jeopardy!</option>
                <option value="Final Jeopardy!">Final Jeopardy!</option>
            </select><br></br>
            show number<br></br>
            <input type='text' name='show_number' id='show_number' onChange={e => {setShowNumber(e.target.value)}}></input><br></br><br></br>
            <button onClick={sendAnswer}>Submit New Answer</button>
        </div>
    )

}

export default Create