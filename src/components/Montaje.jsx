import React, { Component } from 'react';

class Montaje extends Component {

    constructor(props) {
        console.log("-> constructor");
        super(props);
        this.state = {
            titulo: "Titulo Inicial",
            bpi: "",
        }
        this.handleClick = this.handleClick.bind(this);
        
    }

    UNSAFE_componentWillMount(){
        console.log('-> componentWillMount');
        this.setState({titulo: "Titulo actualizado desde componentWillMount"})
    }

    async componentDidMount() {
        console.log("-> componentDidMount");
        const urlApi = 'https://api.coindesk.com/v1/bpi/currentprice.json';

        const data = await fetch(urlApi);
        const {bpi} = await data.json();
        console.log(bpi);
        this.setState({...this.state, bpi: bpi});
    }

    handleClick(){
        this.setState({titulo: "Titulo actualizado"});
        
    }

    render() {
        console.log('-> render');
        const{bpi} = this.state;
        const currentList = Object.keys(bpi);
        console.log(currentList);
        return (
            <div>
                <h1>Fase de Montaje</h1>
                <h4>{this.state.titulo}</h4>
                <button onClick={this.handleClick}>Cambiar Titulo</button>

                <div className='alert aler-primary'>
                    {currentList.map((current)=> (
                        <p key={current}>Un Botcoin equivale a {bpi[current].rate} {current}</p>
                    ))}
                </div>
            </div>
        );
    }
}

export default Montaje;