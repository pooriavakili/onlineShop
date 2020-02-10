import React, {Fragment, useContext} from 'react'
import {Link} from 'react-router-dom'
import './style.css';
import ContextShopProvider from "../stateManagment/Context";
export default function Header() {
    useContext(ContextShopProvider)

    return(
<Fragment>
    <div>
    <ul className='Ul'>
        <li><Link to='/one' className='Links'>Home</Link></li>
        <li><Link to='/signin' className='Links'>signIn</Link></li>
        <li><Link to='/register' className='Links'>Register</Link></li>
        <li><Link to='/search' className='Links'>search</Link></li>

    </ul>
    </div>
</Fragment>
)
}