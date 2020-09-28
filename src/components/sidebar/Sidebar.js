import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

function Sidebar (){
    return (
        <>
            <ul className="sidebar">
                <Link className="sidebarText" to='/BlogCSS'>CSS (5)</Link>
                <Link className="sidebarText" to='/BlogJS'>JavaScript(4)</Link>
                <Link className="sidebarText" to="/BlogReact">React (6)</Link>
                <Link className="sidebarText" to="/BlogRedux">Redux (5)</Link>
            </ul>
        </>
    )
}

export default Sidebar;