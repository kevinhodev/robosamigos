import React from 'react'

class ErrorBoundry extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            temErro: false
        }
    }

    componentDidCatch(erro, info)
    {
        this.setState({ temErro: true });
    }

    render()
    {
        if (this.state.temErro)
        {
            return <h1> Eita! Algo deu errado. </h1>
        }
        else
        {
            return this.props.children
        }
    }
}

export default ErrorBoundry
