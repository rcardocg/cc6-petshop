import { useState } from "react";
import { Form, Table } from "react-bootstrap";

export default function Inventory(){
    return(
        <>
        <h2>Inventario</h2>
        <Table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descipción</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
        </Table>
        </>
    );
}

function Redirect(){
    const handleRedirect = () =>{

    }
    return(
        <>
        
        </>
    );
}