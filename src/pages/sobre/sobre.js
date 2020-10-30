import React, { Component } from 'react'

class Sobre extends Component{
    render(){
        return<>
            <div className="textos2">Este site tem como objetivo reunir APIS para exibir informações <br></br>sobre usuários, tudo isto com uma interface simples e organizada.</div>
            
            <div className="textos">Github = Nesta aba, você consegue ver informações públicas <br></br>do perfil GitHub do usuário inserido no campo de pesquisa. <br></br></div>

            <div className="textos">Apidragon = Nesta aba, o objetivo é que, as pessoas que acessarem <br></br>este site, conseguirem modificar dados públicos inseridos
            por usuários <br></br>aleatórios que também estavam no site, sendo mais para entretenimento <br></br>e passa-tempo ver o enorme número de "dragões" criados pelos usuários <br></br>
            dentro da API do ApiDragon.</div>
            
        </>
    }
}

export default Sobre;