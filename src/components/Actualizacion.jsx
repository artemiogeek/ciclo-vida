import React, { Component } from 'react';

const ANIMAL_IMAGES = {
    panda: "https://i.pinimg.com/originals/e0/3d/5b/e03d5b812b2734826f76960eca5b5541.jpg",
    gato: "https://files.wapa.pe/Wapa/2019/04/18/gato-8-1555608747.jpg",
    delfin: "https://i.pinimg.com/originals/83/bf/48/83bf487c2c8c19281584bf23d3641259.jpg",
};

class AnimalImage extends Component {
    constructor(props){
        super(props);
        this.state = {
            src: ANIMAL_IMAGES[this.props.animal],
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log("-> componentWillReceiveProps");
        console.log(nextProps);
        this.setState({src: ANIMAL_IMAGES[nextProps.animal] })
    }

    shouldComponentUpdate(nextProps) {
        console.log("-> shouldComponentUpdate");
        return this.props.animal !== nextProps.animal;
    }

    UNSAFE_componentWillUpdate(nextProps) {
        console.log("-> componentWillUpdate");
        const img = document.querySelector('img')
        img.animate([{filter: "blur(2px)"}, {filter: "blur(0px)"}], {
            duration: 3500,
            easing: "ease"
        })
    }

    componentDidUpdate() {
        console.log("-> componentDidUpdate");
        const img = document.querySelector('img')
        img.animate([{filter: "blur(0px)"}, {filter: "blur(2px)"}], {
            duration: 3500,
            easing: "ease"
        })
    }

    render(){
        console.log("-> render");
        return(
            <div className='text-center'>
                <img src={this.state.src} alt={this.props.animal} />
            </div>
        )
    }
}

class Actualizacion extends Component {

    state = {
        animal: "panda"
    }
    render() {
        return (
            <div className='container text-center'>
                <h1>Face de Actualizacion</h1>
                <div className='my-3'>
                    <button onClick={() => this.setState({animal: "panda"})} className='btn btn-primary'>Panda</button>
                    <button onClick={() => this.setState({animal: "gato"})} className='btn btn-info mx-5'>Gato</button>
                    <button onClick={() => this.setState({animal: "delfin"})} className='btn btn-success'>Delfin</button>
                </div>
                <AnimalImage animal = {this.state.animal}/>
            </div>
        );
    }
}

export default Actualizacion;