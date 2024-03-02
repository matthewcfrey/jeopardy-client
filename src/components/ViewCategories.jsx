import {useState, useEffect} from 'react'

const ViewCategories = props => {
    const [singleCategories, setSingleCategories] = useState([])
    const [doubleCategories, setDoubleCategories] = useState([])

    useEffect(() => {
        fetch(import.meta.env.VITE_CATEGORY_API)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            setSingleCategories(data);
        })

        fetch(import.meta.env.VITE_DOUBLECATEGORY_API)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            setDoubleCategories(data);
        })
    },[])
    
    if(singleCategories.length < 1 || doubleCategories.length < 1) {
        return (
            <h1 className='loadingbar'>Loading...</h1>
        )
    }
    return (
        <div>
            <div id='catContainer'>
                <div >
                    <h1>Jeopardy Categories</h1>
                    <ul>
                        {singleCategories.map(sc =>
                            <li key={"single" + sc}>{sc}</li>
                        )}
                    </ul>
                </div>
                <div>
                    <h1>Double Jeopardy Categories</h1>
                    <ul>
                        {doubleCategories.map(sc =>
                            <li key={"double" + sc}>{sc}</li>
                        )}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default ViewCategories