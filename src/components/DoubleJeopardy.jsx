import {useState, useEffect} from 'react'

import CategoryCard from "./PlayComponents/CategoryCard.jsx"
import AnswerRow from './PlayComponents/AnswerRow.jsx'

const DoubleJeopardy = props => {

    const cats = ['HISTORY', 'TAINTED GOV', 'AMERICAN NICKNAMES', 'DOWN MEXICO WAY', 'SCOTLAND', 'SCIENCE & NATURE']
    const vals = ['$400', '$800', '$1200', '$1600', '$2000']

    const [cat1, setCat1] = useState([])
    const [cat2, setCat2] = useState([])
    const [cat3, setCat3] = useState([])
    const [cat4, setCat4] = useState([])
    const [cat5, setCat5] = useState([])
    const [cat6, setCat6] = useState([])
    const [categories, setCategories] = useState(cats)
    const [values, setValues] = useState(vals)

    const fetchCategories = (category, setCat) =>{
        fetch(import.meta.env.VITE_ANSWER_API + category)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            setCat(data);
        })
    }

    useEffect(() => {
        fetchCategories(categories[0], setCat1)
        fetchCategories(categories[1], setCat2)
        fetchCategories(categories[2], setCat3)
        fetchCategories(categories[3], setCat4)
        fetchCategories(categories[4], setCat5)
        fetchCategories(categories[5], setCat6)
    },[])

    const setNewCategory = (idx, selection) => {
        const newCategories = [...categories];
        newCategories[idx] = selection;
        setCategories(newCategories)
        let setCats = [setCat1, setCat2, setCat3, setCat4, setCat5, setCat6];

        fetchCategories(selection, setCats[idx])
    }


    return (
        <div className='page'>
            <div id='board'>
                {categories.map((c, idx) => 
                    <CategoryCard key={c} text={c} idx={idx} setNewCategory={setNewCategory}/>
                )}
                {values.map((v, idx) =>
                    <AnswerRow key={v + idx}
                    cat1={cat1.find(elem => elem.value == v)}
                    cat2={cat2.find(elem => elem.value == v)}
                    cat3={cat3.find(elem => elem.value == v)}
                    cat4={cat4.find(elem => elem.value == v)}
                    cat5={cat5.find(elem => elem.value == v)}
                    cat6={cat6.find(elem => elem.value == v)}
                    value={v}/>
                )}
            </div>
        </div>
    )
}

export default DoubleJeopardy