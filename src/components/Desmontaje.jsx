import React, { Component } from 'react';

class ComponenteDesmontaje extends Component {
    state = {
        windowWidth: 0
    }

    componentDidMount() {
        window.addEventListener("resize", this.actualizarAncho);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.actualizarAncho)
    }

    actualizarAncho = () => {
        console.log('ejecutando evento');
        this.setState({windowWidth: document.body.clientWidth});
    }

    render(){
        return (
            <div className='alert alert-primary'>
                <h2>Componente ComponenteDesmontaje</h2>
                <p>el ancho de la pantalla es: {this.state.windowWidth}</p>

            </div>
        )
    }
}

class Desmontaje extends Component {

    state = {
        mostrarComponente: true,
    }

    render() {
            if(this.state.mostrarComponente){
                return (
                    <div>
                        <h1>Fase de Desmontaje</h1>
                        <ComponenteDesmontaje/>
                        <button 
                            onClick={()=>this.setState({ mostrarComponente: false})} 
                            className='btn btn-primary'
                        >
                            Desmontar componente
                        </button>
                    </div>
                );
            }   else {
                return <p>El componente esta desmontado</p>
            }
    }
}

export default Desmontaje;