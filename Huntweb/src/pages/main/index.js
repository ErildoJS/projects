import React, {Component} from 'react';
import './styles.css';
import api from '../../services/api';

export default class Main extends Component {
    state = {//criando variavel estado
        products: []//criando a variavel products
    }
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products')
        const {docs} = response.data   
        
        //preenchendo a variavel products com estado
        this.setState({
            products: docs
        })
    }

    render() {
        const {products} = this.state
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <article key={ product._id}>
                        <strong>{product.title}</strong>
                <p>{product.description}</p>
                    </article>
        ))}
            </div>
        )
    }
}
