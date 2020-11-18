import React, { Component } from 'react';
import './github.css';

class GitHub extends Component{
    constructor(){
        super();
        this.state = {
            user: [],
            repo: [],
            isHiding: true,
        }
        this.input = React.createRef()
        this.mudarUsuario = this.mudarUsuario.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    mudarUsuario(event){
        this.setState({value: event.target.value})
        let user = this.state.value;
        let url = "https://api.github.com/users/" + user;
        let url_repo = url + "/repos"

        fetch(url)                                                 //Esse comando pega as infos da API github
        .then( response => response.json() )                       //Esse comando converte as infos para o formato JSON
        .then( data => {this.setState({user: data})} );            //Esse comando coloca o valor 'data2' dentro do atributo 'data'

        fetch(url_repo)                                            //Esse comando pega as infos da API github dos repositórios
        .then( response => response.json() )                       //Esse comando converte as infos para o formato JSON 
        .then( data => {this.setState({repo: data})} )             //Esse comando coloca o valor 'data2' dentro do atributo 'data'
        this.setState({isHiding: false});
    }

    render(){
        const {user, repo, isHiding} = this.state;
        let textogit = "";

        if(!isHiding){
            textogit = <div className="container fundoMain">
            <div className="row">
                <div className="col-md-3 col-12">
                    <p className="info py-4 card bg-card">Infos do Usuário:</p>
                        <div>
                            <img className="circle-photo" src={user.avatar_url}></img>
                        </div>

                        <div className="titulo py-4">
                            {user.login}    
                        </div>

                        <div className="info card bg-card py-4">
                            <p>Seguidores: {user.followers}</p>
                            <p>Seguindo: {user.following}</p>
                        </div>
                    </div>

                    <div className="col-md-9 col-12">
                        <p className="info py-4 card bg-card mb-4 mb-md">Repositórios:</p>

                        {repo.map(
                            repositorio =>
                            <div className="textos card bg-card">
                                <span className="textos2">Nome do Repositório: </span> {repositorio.name} <br></br>
                                <span className="textos2">Descrição: </span> {repositorio.description} <br></br>
                                <span className="textos2">Link do Repositório: </span> <a href={repositorio.html_url} target="_blank">Clique Aqui</a> <br></br>
                            </div>
                        )}
                    </div>
              </div>
          </div>
        }

        return<>
          <br></br>
          <div className="fundoMain container">
            <div className="textos">Insira aqui um nome de usuário do GitHub:</div>
            <input id="input" className="buttons mt-1" ref={this.input} onChange={this.handleChange}></input> <button onClick={this.mudarUsuario} className="buttons">Buscar</button>
          </div>
          <br></br>
          {textogit}
          <br></br>
        </>
    }
}

export default GitHub;