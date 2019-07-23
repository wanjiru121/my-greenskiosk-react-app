import React from 'react'

class Vegetables extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vegetablesList:[]
        }
    }

    componentDidMount(){
        fetch("http://127.0.0.1:5000/products/vegetables")
        .then(response => response.json())
        .then(response => this.setState({vegetablesList:response}));
    }

    render(){
        return(
            this.state.vegetablesList.map(vegetable => {
               return <li>{vegetable.name}</li>
            })
        )
    }
}

export default Vegetables;