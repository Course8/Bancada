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
        this.getList();
    }

    onCreate(event){
        event.preventDefault();
        let form = event.target;

        const dragon = {
            name: form.elements.email.value,
            type: form.elements.type.value,
        } 
        
        const request = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dragon),
        }

        fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon", request)
        .then( response => response.json() )
    }

    onEdit(id){
        console.log("Edit: " + id)
    }

    getList(){
        fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
        .then( response => response.json() )
        .then( data =>  {this.setState({listDragons: data}); } );
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
                <div className="textos2 card fundoMain mt-5 mb-3">Dragões:</div>
                <button className="btn btn-dark buttons2 infos m-2"><Link to="/apidragon/add" onClick={() => this.onCreate()}>Criar</Link></button>
                    <div className="row">

                        {/* desktop */}
                        <div className="col-md-12 col-9 card fundoMain desktop">
                        
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
                                                <button button className="btn btn-dark buttons2 infos mr-1"><Link to={'/apidragon/edit/$(dragon.id)'}>Editar</Link></button>
                                                <button className="btn btn-dark buttons2 infos ml-1" onClick={() => this.abreModalDeletar(dragon.id)}><Link>Deletar</Link></button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* mobile */};
                        <div className="mobile">
                            {listDragons.map(
                                dragon =>
                                <div className="container fundoMain ml-1 mr-1 mb-4">
                                    <div className="row bg-card mr-3"><div className="col textos"><span className="textos">ID: </span>{dragon.id}</div></div>

                                    <div className="row bg-card mr-3"><div className="col textos"><span className="textos">Nome: </span>{dragon.name}</div></div>

                                    <div className="row bg-card mr-3"><div className="col textos"><span className="textos">Tipo: </span>{dragon.type}</div></div>

                                    <div className="row bg-card mr-3"><div className="col textos"><span className="textos">Data: </span>{dragon.createdAt}</div></div>

                                    <div className="row bg-card mr-3">
                                        <div className="col textos">
                                                <span className="textos">Ações:</span>
                                                <br></br>
                                                <button className="btn btn-dark buttons2 infos mr-1"><Link to={'/apidragon/edit/$(dragon.id)'}>Editar</Link></button>
                                                <button className="btn btn-dark buttons2 infos ml-1" onClick={() => this.abreModalDeletar(dragon.id)}><Link>Deletar</Link></button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                <br></br>
            </div>
<<<<<<< HEAD

            <Modal show={showModalDeletar} onHide={()=> this.fechaModalDeletar()}>
                <Modal.Header closeButton className="fundoForm">
                    <Modal.Title className="textos">Deletar Dragão</Modal.Title>
                </Modal.Header>    
=======
            <Modal show={showModal} onHide={()=> this.handleModalClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Criar Dragão</Modal.Title>
                </Modal.Header>
>>>>>>> f37f6bcde7561577f0eec80db254e0711706544b

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