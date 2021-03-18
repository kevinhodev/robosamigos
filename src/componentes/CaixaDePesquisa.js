import React from 'react'

const CaixaDePesquisa = ({ aoAlterarOConteúdoDaCaixaDePesquisa }) => {
    return (
        <div className = "tc">
            <input className = "pa3 ba b--green bg-lightest-blue" type = "search" placeholder = "Procurar robô" onChange = { aoAlterarOConteúdoDaCaixaDePesquisa }/>
        </div>
    )
}

export default CaixaDePesquisa
