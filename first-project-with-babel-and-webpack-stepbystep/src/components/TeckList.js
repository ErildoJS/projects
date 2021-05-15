import React, {Component} from 'react'
import teckItem from './TeckItem'
import TeckItem from './TeckItem'



export default class extends Component {
    static defaultProps = {
        tech: 'oculto'
    }

    state = {
        newTech: '',
        techs: []
    }

    //executado assim que o componente aparece em tela
    componentDidMount() {
        const techs = localStorage.getItem('techs')

        if (techs) {
            this.setState({techs: JSON.parse(techs)})
        }
    }

    //executado sempre que houver alteracoes nas props ou estado do componente
    componentDidUpdate(_, prevState) {
        //acessalas 
        //this.state,  this.props
        if (prevState.techs !== this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }
    }

    //executado quando o componente deixa de existir
    componentWillUnmount() {

    }

    handleInputChange = e => {
        this.setState({newTech: e.target.value})
    }

    handlSubmit = e => {
        e.preventDefault()

        this.setState({techs: [...this.state.techs, this.state.newTech], newTech: ''})


    }

    handleDelete = (tech) => {
        this.setState({techs: this.state.techs.filter(t => t !== tech)})
    }

    render() {
        return (
            <form onSubmit={this.handlSubmit}>
                <ul>
                    {this.state.techs.map(tech => <TeckItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)} />)}
                </ul>
                    <input
                        type="text"
                        onChange={this.handleInputChange}
                        value={this.state.newTech}
                    />
                    <button type="submit">
                        enviar
                    </button>
                
            </form>
        )
    }
}

