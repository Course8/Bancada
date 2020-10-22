import React, {Component} from 'react'
import './apidragon.css'

class Apidragon extends Component {
    constructor(){
        super();
        this.state = {listDragons: [], dragon: {}, id_dragon: 0};
        this.onCreate = this.onCreate.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount(){
        fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
        .then( response => response.json() )
        .then( data =>  {this.setState({listDragons: data}); } );
    }

    onCreate(){
        const dragon = {name: "Dragão de Comodo", type: "NODE_MODULES"}
        const request = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dragon),
        }

        fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon", request)
        .then( response => response.json() )
        .then( response2 => this.getList() )    
    }

    onEdit(id){
        console.log("Edit: " + id)
    }

    getList(){
        fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
        .then( response => response.json() )
        .then( data =>  {this.setState({listDragons: data}); } );
    }

    onDelete(id){
        fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/" + id, {method: 'DELETE'})
        .then( response => response.json() )
        .then( response2 => this.getList() )
    }

    render(){
        const {listDragons} = this.state;
        return<>
            <div className="header col">Portal Course</div>
            <div className="container">
            <button className="btn btn-dark infos m-2" onClick={() => this.onCreate()}>Criar</button>
                <div className="row">
                    <div className="col card fundoMain">
                        <table className="table mt-5 mb-5">
                            <thead className="titulo bg-card">
                                <tr className="bg-card">
                                    <th className="bg-card">ID</th>
                                    <th className="bg-card">Nome</th>
                                    <th className="bg-card">Tipo</th>
                                    <th className="bg-card">Data</th>
                                    <th className="bg-card">Ações</th>
                                </tr>
                            </thead>

                            <tbody className="textos bg-card">
                                {listDragons.map(
                                    dragon =>
                                    <tr className="bg-card">
                                        <td className="bg-card">{dragon.id}</td>
                                        <td className="bg-card">{dragon.name}</td>
                                        <td className="bg-card">{dragon.type}</td>
                                        <td className="bg-card">{dragon.createdAt}</td>
                                        <td className="bg-card">
                                            <button className="btn btn-dark infos mr-1" onClick={() => this.onEdit(dragon.id)}>Editar</button>
                                            <button className="btn btn-dark infos ml-1" onClick={() => this.onDelete(dragon.id)}>Deletar</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <br></br>
            </div>
        </>;
    }
}

export default Apidragon;