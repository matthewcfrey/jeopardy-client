import {useState} from 'react'

const CategoryCard = props => {

    const [search, setSearch] = useState(false)
    const [currentSelection, setCurrentSelection] = useState(props.text)

    const switchToSearch = () =>{
        setSearch(true);
    }

    const switchToTitle = () => {
        setSearch(false)
    }
    

    if(search) {
        return (
            <div className='answercard category'>
                <input type='text' onChange={(e) => {setCurrentSelection(e.target.value.toUpperCase())}}></input><br></br>
                <button onClick={() => {props.setNewCategory(props.idx, currentSelection)}}>Search</button>
                <button onClick={switchToTitle}>Cancel</button>
            </div>
        )
    }
    return (
        <div className='answercard category' onClick={switchToSearch}>
            {props.text}
        </div>
    )
}

export default CategoryCard