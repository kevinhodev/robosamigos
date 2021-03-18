import React from 'react'
import Card from './Card.js';

const ListaDeCards = ({ robos }) => 
{

    return (
        <div> 
        { 
            robos.map((usuario, i) => 
            {
                return ( 
                        <Card 
                            key = {i} 
                            nome = {robos[i].name} 
                            id = {robos[i].id} 
                            email = {robos[i].email}
                        /> 
                    )
            })

        } 
        </div>
    );
} 

export default ListaDeCards
