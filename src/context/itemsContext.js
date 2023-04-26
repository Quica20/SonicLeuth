import React, {Children, createContext, useState} from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({children}) =>{
    const[itemsCheckout, setItemsCheckout] = useState([]);
    const[numberOfItems, setNumberOfItems] = useState(0);


    
    function addItemsCheckOut(id, name, imgs, release_date, total_tracks){
        const addNewitem = {
            identificador: id,
            nombre: name,
            imagen: imgs,
            fechaLanzamiento: release_date,
            totalCanciones: total_tracks
        }
        setItemsCheckout([...itemsCheckout, addNewitem])                                                                                
    };

    function removeItem(id){
        const revItem = itemsCheckout.filter((item)=> item.id !== id);
        setItemsCheckout(revItem)
    };
    
    function countOfItems () {
        setNumberOfItems(itemsCheckout.length)
    };

    return(
    <ItemsContext.Provider
    value ={ {addItemsCheckOut, itemsCheckout, numberOfItems, removeItem}}
    >
        {children}
    </ItemsContext.Provider>
    )
}; 