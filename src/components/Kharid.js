import React, { useContext} from 'react'
import Header from "./Header";
import Footer from "./Footer";
import './style.css'
import {Link} from "react-router-dom";
import ContextShopProvider from "../stateManagment/Context";
export default function Kharid() {
    useContext(ContextShopProvider)

    return(
<div>
    <Header/>
    <p className='Style'>کدوم را انتخاب می کنی</p>
    <div className='ButtonAsly'>
        <Link to='/map' className='ButtonMap'> نقشه راه</Link>
    <Link to='/pardakht' className='ButtonShop'>پرداخت</Link>
    </div>
    <div style={{
        marginTop:"3em"
    }}>
<Footer/>
    </div>
</div>
    )
}