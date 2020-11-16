import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class ApiDragonForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            action: '',
            data: [],
        };
    }

    componentDidMount(){
        const {match} = this.props
        const id = match.params.id;

        if(id){
            this.setState({title: 'Editar Dragão', action: 'Salvar'});

            fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/'+id)
            .then(response => response.json())
            .then(data => this.setState({data: data}));
        }
        else{
            this.setState({title:'Criar Dragão', action: 'Criar'});
        }
    }

    render(){
        const {title, action, data} = this.state;
        return<>
            <p>{title}</p>
            <form>
                <label>Name</label>
                <input type="text" name="name" value=""></input>
                <label>Type</label>
                <input type="text" name="type" value=""></input>
                <button type="submit">{action}</button>
            </form>
        </>;
    }
}

export default withRouter(ApiDragonForm);