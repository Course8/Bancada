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

    handleChange(event){
        this.setState({value: event.target.value})
    }

    render(){
        const {title, action, data} = this.state;
        return<>
            <div className="py-4">
                <div className="container fundoMain">
                    <form className="bg-card">
                        <p className="textos">{title}</p>
                        <label className="textos">Nome:</label>
                        <input className="buttons" type="text" name="name" value={this.state.textValue} onChange={() => this.changeInput} ></input>
                        <br></br>
                        <label className="textos">Tipo:</label>
                        <input className="buttons" type="text" name="type" value={this.state.textValue} onChange={() => this.changeInput} ></input>
                        <br></br>
                        <button className="buttons buttonCreate" type="submit">{action}</button>
                    </form>
                </div>
            </div>
        </>;
    }
}

export default withRouter(ApiDragonForm);