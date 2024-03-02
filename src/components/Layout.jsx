import {Link, Outlet} from 'react-router-dom'

const Layout = props => {


    const helpReload = (loc) => {
        window.location = loc
    }

    return (
        <div>
            <div id='header'>
                <h1 id='title'>REACTPARDY</h1>
            </div>
            <div id='secondheader' className='rowtwo'>
                <button className='headerbutton' onClick={() => {helpReload('/')}}>Jeopardy!</button>
                <button className='headerbutton' onClick={() => {helpReload('/double')}}>Double Jeopardy!</button>
                <Link className='headerbutton' to='/view'>View Categories!</Link>
                <Link className='headerbutton' to='/create'>Create Categories!</Link>
            </div>
            
            <Outlet />
        </div>
    )
}

export default Layout