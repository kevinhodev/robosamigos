import React from 'react';

const Card = ({ nome, email, id }) => 
{
    return (
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src = {`https://robohash.org/${id}?200x200`} alt = 'Foto'/>
            <div>
                <h2> {nome} </h2>
                <p> {email} </p>
            </div>
        </div>
    );
}

export default Card;