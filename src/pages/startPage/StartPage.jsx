import React, { Fragment, Nav } from 'react'
import './StartPage.css'
import { Button, Form} from 'react-bootstrap'
import { useContext } from 'react'

//Importamos contexto
import { ItemsContext } from '../../context/itemsContext'

function StartPage() {
    const {handleVisible} = useContext(ItemsContext)
    return (
    <Fragment>
        <div class="full-screen-div">
            <div className="containerChild">
                <h1>SONICLEUTH</h1>
                <h2>all albums in one place</h2>
                <h3>¡We do sends to all the country!</h3>
                <Form.Control
                    type="search"
                    placeholder="Put the name of an artist"
                    className="custom-input"
                />
                <Button 
                type="submit" 
                className="custom-button"
                onClick={
                    handleVisible()
                }
                >Search</Button>
            </div>
        </div>
    </Fragment>
    )
}

export default StartPage