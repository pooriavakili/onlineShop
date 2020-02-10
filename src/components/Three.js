import React, {Fragment, useContext} from 'react'
import ContextShopProvider from "../stateManagment/Context";
import Product2 from "./Product2";
import Header from "./Header";
import {Link} from "react-router-dom";
import Footer from "./Footer";
export default function Three() {
    useContext(ContextShopProvider)
    return(
        <Fragment>
            <Header/>
            {
                Product2.map((item,index)=>(
                    <div className='Div' key={item.id}>
                        <img className='Aks'  src={item.aks} />
                        <div className='Title'>
                            <h1 className='TitleStyle' >{item.title}</h1>
                        </div>
                        <div className='Pack'>
                            <h2 className='PackStyle'> تعداد:{item.pack}</h2>
                        </div>
                        <div className='Price'>
                            <h3 className='PriceStyle'>قیمت:{item.price}</h3>
                        </div>
                        <div className='Button'>
                            <Link className='StyleButton' to='/kharid'>{item.buy}</Link>
                        </div>
                    </div>

                ))
            }
            <div className='Page'>
                <Link to='/one' className='PageStyle'>1</Link>
                <Link to='/two' className='PageStyle'>2</Link>
            </div>
            <div style={{
                marginTop:'2em'
            }}>
                <Footer/>
            </div>
        </Fragment>
    )
}