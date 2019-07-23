import React from 'react'

class Products extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        productsList : []
    }
    }

    componentDidMount(){
        fetch("http://127.0.0.1:5000/products")
        .then(response => response.json())
        .then (response => this.setState({productsList:response}));
    }
    render (){
        return(
            this.state.productsList.map(product => {
                return <li>{product.name}</li>
            })
        )
    }
}
export default Products;