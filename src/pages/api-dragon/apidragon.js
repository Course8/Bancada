import React, {Component} from 'react'
import { Modal, Button, Form } from 'react-bootstrap' 
import './apidragon.css'

class Apidragon extends Component {
    constructor(){
        super();
        this.state = {listDragons: [], showModal: false, showAlert: false};
        this.onCreate = this.onCreate.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount(){
        fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
        .then( response => response.json() )
        .then( data => {this.setState({listDragons: data}) } )
    }

    getList(){
        fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
        .then( response => response.json() )
        .then( data =>  {this.setState({listDragons: data})} )
    }

    async onCreate(event){
        // event.preventDefault();
        // let form = event.target;

        const dragon = {
            name: "testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            type: "testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        } 
        
        const request = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dragon),
        }

        await fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon", request)
        .then( response => response.json() )
        .then( response2 => console.log(response2) )    
    }

    onEdit(id){
        console.log("Edit: " + id)
    }

    onDelete(id){
        fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/" + id, {method: 'DELETE'})
        .then( response => response.json() )
        .then( response2 => this.getList() )
    }

    handleModalClose(){
        this.setState({showModal: false});
    }

    handleModalOpen(){
        this.setState({showModal: true});
    }

    render(){
        const {listDragons, showModal, showAlert} = this.state;

        return<>
            <div className="container">
            <button className="btn btn-dark buttons2 infos m-2" onClick={() => this.onCreate()}>Criar</button>
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
                                            <button className="btn btn-dark buttons2 infos mr-1" onClick={() => this.onEdit(dragon.id)}>Editar</button>
                                            <button className="btn btn-dark buttons2 infos ml-1" onClick={() => this.onDelete(dragon.id)}>Deletar</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <br></br>
            </div>
            <Modal show={showModal} onHide={()=> this.handleModalClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Criar Dragão</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={this.onCreate}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" name="name"></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formType">
                            <Form.Label>Tipo:</Form.Label>
                            <Form.Control type="text" name="type"></Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalClose()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    }
}

export default Apidragon;