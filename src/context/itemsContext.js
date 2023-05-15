import React, { createContext, useState} from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({children}) =>{
    const[itemsCheckout, setItemsCheckout] = useState([]);
    const[numberOfItems, setNumberOfItems] = useState(0);
    const [onStart, setOnStart] = useState(true) //inicio
    const [onHome, setOnHome] = useState(false) //home
    
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

    function handleVisible(){
        setOnStart(false);
        setOnHome(true)
    }

    return(
    <ItemsContext.Provider
    value ={ {addItemsCheckOut, itemsCheckout, numberOfItems, removeItem, deleteAll,handleVisible,onStart,onHome}}
    >
        {children}
    </ItemsContext.Provider>
    )
}; 