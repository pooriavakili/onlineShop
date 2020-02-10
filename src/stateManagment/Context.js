import React,{createContext} from 'react'
export const ContextShop=createContext();
export default function ContextShopProvider({children}) {
return(
    <ContextShop.Provider>
        {
            children
        }

    </ContextShop.Provider>
)
}