import React, { Fragment } from 'react'
import './StartPage.css'
import { Button, Form} from 'react-bootstrap'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function StartPage() {
    const handleButtonClick = () => {
        toast.info('Se ha agregado el álbum al carrito', { autoClose: 3000 });
    };
    return (
    <Fragment>
        <div class="full-screen-div">
            <div className="containerChild">
            <h1>SONICLEUTH</h1>
            <h2>all albums in one place</h2>
            <Form.Control
                type="search"
                placeholder="Put the name of an artist"
                className="custom-input"
            />
            <Button 
            type="submit" 
            className="custom-button"
            onClick={handleButtonClick}
            >Search</Button>
            </div>
        </div>
    </Fragment>
    )
}

export default StartPage