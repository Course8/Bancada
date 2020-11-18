import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ApiDragonForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            action: '',
            name: '',
            type: '',
            id: '',
        };
    }

    componentDidMount(){
        const {match} = this.props
        const id = match.params.id;

        if(id){
            this.setState({title: 'Editar Dragão', action: 'Salvar'});

            fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + id)
            .then(response => response.json())
            .then(data => this.setState({name: data.name, type: data.type, id: data.id}));
        }

        else{
            this.setState({title:'Criar Dragão', action: 'Criar'});
        }
    }

    onCreate(event) {
        this.event.preventDefault();
        let form = event.target;

        const dragon = {
            name: form.elements.name.value,
            type: form.elements.type.value,
        };

        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dragon)
        }

        fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/', request)
        .then(response => response.json())
    }

    onEdit(id) {
        id.preventDefault();
        let form = id.target;

        const dragon = {
            name: form.elements.name.value,
            type: form.elements.type.value,
            id: form.elements.id.value,
        };
        
        const request = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(dragon)
        }

        fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + dragon.id, request)
        .then(response => response.json())
        .then( () => { window.history.back() })
    }

    changeInput(event){
        let value = event.target.value;
        let name = event.target.name;
        this.setState({[name]: value})
    }

    changeText(event){
        this.setState(
            {textValue : event.target.value}
        );
    }

    render(){
        const {title, action, data} = this.state;
        const {match} = this.props
        const id = match.params.id;

        return<>
            <div className="py-4">
                <div className="container fundoMain">
                    {id ?
                        <form onSubmit= {this.onEdit} className="bg-card mr-2">
                        <p className="textos">{title}</p>

                        <label className="textos">Nome:</label>
                        <br></br>

                        <input className="buttons" type="text" name="name" value={this.state.textValue} onChange={() => this.changeInput} ></input>
                        <br></br>

                        <label className="textos">Tipo:</label>
                        <br></br>

                        <input className="buttons" type="text" name="type" value={this.state.textValue} onChange={() => this.changeInput} ></input>
                        <br></br>

                        <input name="id" type="hidden" value={this.state.id}/>

                        <button className="buttons buttonCreate" type="submit">{action}</button>
                    </form>
                    
                    :

                    <form onSubmit= {this.onCreate} className="bg-card mr-2">
                        <p className="textos">{title}</p>

                        <label className="textos">Nome:</label>
                        <br></br>

                        <input className="buttons" type="text" name="name" value={this.state.textValue} onChange={() => this.changeInput} ></input>
                        <br></br>

                        <label className="textos">Tipo:</label>
                        <br></br>

                        <input className="buttons" type="text" name="type" value={this.state.textValue} onChange={() => this.changeInput} ></input>
                        <br></br>

                        <input name="id" type="hidden" value={this.state.id}/>

                        <button className="buttons buttonCreate" type="submit">{action}</button>
                    </form>
                    }
                </div>
            </div>
        </>
    }
}

export default withRouter(ApiDragonForm);