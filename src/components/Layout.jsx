import {Link, Outlet, NavLink} from 'react-router-dom'

const Layout = props => {

    return (
        <div>
            <div id='header'>
                <h1 id='title'>REACTPARDY</h1>
            </div>
            <div id='secondheader' className='rowtwo'>
                <Link as={NavLink} className='headerbutton' reloadDocument={true} to='/'>Jeopardy!</Link>
                <Link as={NavLink} className='headerbutton' reloadDocument={true} to='/double'>Double Jeopardy!</Link>
                <Link as={NavLink} className='headerbutton' to='/view'>View Categories!</Link>
                <Link as={NavLink} className='headerbutton' to='/create'>Create Categories!</Link>
            </div>
            
            <Outlet />
        </div>
    )
}

export default Layout