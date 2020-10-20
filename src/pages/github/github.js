import React, { Component } from 'react';

class GitHub extends Component{
    constructor(){
        super();
        this.state = {
            user: [],
            repo: [],
        }
    }

    componentDidMount(){
        fetch('https://api.github.com/users/Course8')              //Esse comando pega as infos da API github
        .then( response => response.json() )                       //Esse comando converte as infos para o formato JSON 
        .then( data => {this.setState({user: data})} )             //Esse comando coloca o valor 'data2' dentro do atributo 'data'

        fetch('https://api.github.com/users/Course8/repos')        //Esse comando pega as infos da API github dos repositórios
        .then( response => response.json() )                       //Esse comando converte as infos para o formato JSON 
        .then( data => {this.setState({repo: data})} )             //Esse comando coloca o valor 'data2' dentro do atributo 'data'
    }

    render(){
        const {user, repo} = this.state;
        return<>
          <div className="header titulo col py-4">{user.login}</div>

          <div className="container">
                <div>
                    <p className="info py-4">Infos do Usuário do GitHub</p>
                </div>

                <div className="row">
                    <div className="col">
                        {repo.map(
                            repositorio => 
                            <p className="textos">
                                Nome do Repositório: {repositorio.name} <br></br>
                                Descrição: {repositorio.description} <br></br>
                                Link do Repositório: <a href={repositorio.html_url}>Clique Aqui</a>
                            </p>
                        )}
                    </div>
              </div>
          </div>
        </>
    }
}

export default GitHub;