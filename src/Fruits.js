import React from 'react'

class Fruits extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fruitsList : []
        }
    }
    componentDidMount(){
        fetch("http://127.0.0.1:5000/products/fruits")
        .then(response => response.json())
        .then(response => this.setState({fruitsList:response}));

    }
    render(){
        return(
            this.state.fruitsList.map(fruit => {
                return <li>{fruit.name}</li>
            })
        )
    }

}

export default Fruits;