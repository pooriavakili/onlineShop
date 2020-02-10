import React,{useContext} from 'react';
import Search from 'react-search'

import Data from "./Data";
import Header from "./Header";
import Footer from "./Footer";
import ContextShopProvider from "../stateManagment/Context";
export default function Searching(props) {
    useContext(ContextShopProvider)
    const Footers={
        marginTop:"35em"
    }

    return (
        <div>
            <Header/>
            {
                Data.map((item, index) =>
                    <div className='Search'
                    key={item.id}>
                        <Search items={item.value} />

                        <Search items={item.value}

                                maxSelected={20}
                                multiple={true}
                                />
                    </div>
                )

            }
   <div style={Footers}>
<Footer/>
   </div>
        </div>

    )
}
