// Componetes
import React from 'react';
import ListaDeCards from '../componentes/ListaDeCards';
import CaixaDePesquisa from '../componentes/CaixaDePesquisa';
import Scroll from '../componentes/Scroll'
import ErrorBoundry from '../componentes/ErrorBoundry'

// CSS
import './App.css';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            robôs: [],
            conteúdoDaCaixaDePesquisa: ""
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resposta => resposta.json())
            .then(usuários => this.setState({ robôs: usuários}));
    }

    aoAlterarOConteúdoDaCaixaDePesquisa = (event) =>
    {
        this.setState({ conteúdoDaCaixaDePesquisa: event.target.value });
    }

    render()
    {
        const { robôs, conteúdoDaCaixaDePesquisa } = this.state;
        const robôsFiltrados = robôs.filter(robo => {
            return robo.name.toLowerCase().includes(conteúdoDaCaixaDePesquisa.toLowerCase());
        })

        return !robôs.length ? 
            <h1 className = "tc"> Carregando... </h1> :
            (
                <div className = "tc">
                    <h1 className = "f2"> Amigos Robos </h1>
                    <CaixaDePesquisa aoAlterarOConteúdoDaCaixaDePesquisa = { this.aoAlterarOConteúdoDaCaixaDePesquisa }/>
                    <Scroll>
                        <ErrorBoundry>
                            <ListaDeCards robos = { robôsFiltrados }/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
    
}

export default App
