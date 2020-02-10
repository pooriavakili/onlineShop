import React, {Fragment, useContext} from 'react'
import {Link} from "react-router-dom";
import ContextShopProvider from "../stateManagment/Context";

export default function Footer() {
    useContext(ContextShopProvider)

    return(
    <Fragment>

            <ul className='Footer'>
                <li>
                    <Link to='/one' className='FooterLink'>Home</Link>
                </li>
                <li>
                    <Link to='/signin' className='FooterLink'>SignIn</Link>
                </li>
                <li>
                    <Link to='/register' className='FooterLink'>Register</Link>
                </li>
                <li>
                    <Link to='/search' className='FooterLink'>search</Link>
                </li>
            </ul>

    </Fragment>
)
}