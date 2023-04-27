import React, { createContext, useState} from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({children}) =>{
    const[itemsCheckout, setItemsCheckout] = useState([]);
    const[numberOfItems, setNumberOfItems] = useState(0);
    
    function removeItem(id){
        const revItem = itemsCheckout.filter((item)=> item.identificador !== id);
        setItemsCheckout(revItem)
        setNumberOfItems(itemsCheckout.length)
    };

    function addItemsCheckOut(id, name, imgs, release_date, total_tracks){
        const addNewitem = {
            identificador: id,
            nombre: name,
            imagen: imgs,
            fechaLanzamiento: release_date,
            totalCanciones: total_tracks
        }
        setItemsCheckout([...itemsCheckout, addNewitem])                                                                                
        setNumberOfItems(itemsCheckout.length)
    };

    function deleteAll(){
        itemsCheckout.splice(0, itemsCheckout.length);
    };

    return(
    <ItemsContext.Provider
    value ={ {addItemsCheckOut, itemsCheckout, numberOfItems, removeItem, deleteAll}}
    >
        {children}
    </ItemsContext.Provider>
    )
}; 