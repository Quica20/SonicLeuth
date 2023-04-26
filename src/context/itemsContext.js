import React, {Children, createContext, useState} from "react";

const ItemsContext = createContext();

export const ItemsProvider = ({Children}) =>{
    const[itemsCheckout, setItemsCheckout] = useState([]);
    const[numberOfItems, setNumberOfItems] = useState(0);

    function addItemsCheckOut(id, name, imgs, release_date, total_tracks){
        const itemsOld = itemsCheckout;
        const addNewitem = {
            identificador: id,
            nombre: name,
            imagen: imgs,
            fechaLanzamiento: release_date,
            totalCanciones: total_tracks
        }
        setItemsCheckout([itemsOld, addNewitem])                                                                                
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
    value = {addItemsCheckOut}
    >
        {Children}
    </ItemsContext.Provider>
    )
}; 