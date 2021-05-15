import React, { Component } from 'react'
import TechItem from './TechItem'

class techList extends Component {
    state = {
        newTech: '',
        techs: [
            'Nodejs',
            'React js',
            'React Native'
        ]
    }

    handlInputChange = e => {
        //pegando o valor do input
        this.setState({ newTech: e.target.value}) 
    }

    handleSubmit = e => {
        e.preventDefault()

        //colocando o valor do newTech na techs
        this.setState({techs: [...this.state.techs, this.state.newTech], newTech: ''})

    }

    handleRemoveItem = tech => {
        this.setState({techs: this.state.techs.filter(t => t !== tech)})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <ul>
                {this.state.techs.map(tech => (
                    <TechItem  key={tech} tech={tech} onDelete={() => this.handleRemoveItem(tech)}/>
                ))}
                </ul>
                <input type="text" onChange={this.handlInputChange} value={this.state.newTech} />
                <button type="submit">enviar</button>
                </form>
        )
    }
}

export default techList
