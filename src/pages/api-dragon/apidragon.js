import React, {Component} from 'react'
import { Modal, Button, Form } from 'react-bootstrap' 
import { Link } from 'react-router-dom'
import './apidragon.css'

class Apidragon extends Component {
    constructor(){
        super();
        this.state = {listDragons: [], showModalDeletar: false, dragon: [], id_dragon: 0};
    }

    componentDidMount(){
        this.getList();
    }

    getList(){
        fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
        .then( response => response.json() )
        .then( data =>  {this.setState({listDragons: data})} )
    }

    onDelete(id){
        fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/" + this.state.id_dragon, {method: 'DELETE'})
        .then( response => response.json() )
        .then( () => {this.getList(); this.fechaModalDeletar()} )
    }

    fechaModalDeletar(){
        this.setState({showModalDeletar: false});
    }

    abreModalDeletar(id_dragon){
        this.setState({id_dragon: id_dragon})
        this.setState({showModalDeletar: true});
    }

    render(){
        const {listDragons, showModalDeletar} = this.state;

        return<>
            <div className="container">
            <Link to="/apidragon/add" className="btn btn-dark buttons2 infos m-2" onClick={() => this.onCreate()}>Criar</Link>
                <div className="row">
                    <div className="col-md-12 col-9 card fundoMain">
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
                                            <Link to={'/apidragon/edit/$(dragon.id)'} className="btn btn-dark buttons2 infos mr-1">Editar</Link>
                                            <button className="btn btn-dark buttons2 infos ml-1" onClick={() => this.abreModalDeletar(dragon.id)}>Deletar</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <br></br>
            </div>
            <Modal show={showModalDeletar} onHide={()=> this.fechaModalDeletar()}>
                <Modal.Header closeButton className="fundoForm">
                    <Modal.Title className="textos">Deletar Dragão</Modal.Title>
                </Modal.Header>    

                <Modal.Body className="fundoForm2">
                    <p className="textos2">Tem certeza que quer deletar o dragão?</p>

                    <Button className="mr-1"variant="dark" onClick={() => this.onDelete()}>
                            Deletar
                    </Button>

                    <Button className="ml-1"variant="dark" onClick={() => this.fechaModalDeletar()}>
                            Fechar
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    }
}

export default Apidragon;