import React, { Fragment } from 'react'
//Importamos Componentes:
import CardTopTen from '../../components/cardTopTen/cardTopTen'
import { useState, useEffect } from 'react';
//FireBase:
import { db } from '../../components/firebase/firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';


const TopTen = () => {
    const [topFive, setTopFive] = useState([])

    const q = query(collection(db, "topFive"))
  
    useEffect(() =>{
          const getTopFive = async() => {
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
              docs.push({...doc.data(), id:doc.id})
            });
            setTopFive(docs)
          };
          getTopFive()
    }, [])
  
  return (
    <Fragment>
        <div  style={{ display: 'flex', flexWrap: 'wrap' }}>
        {topFive.map(top =>{
            return(
                <div key={top.id} style={{ margin: '10px', width: '380px' }}>
                    <CardTopTen data = {top}/>
                </div>
            )
        })}
    </div>
    </Fragment>
  )
}

export default TopTen