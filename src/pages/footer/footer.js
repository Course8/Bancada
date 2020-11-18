import React, {Component} from 'react';
import "./footer.css"
import facebook from "../../img/icon-facebook.png"
import twitter from "../../img/icon-twitter.png"
import instagram from "../../img/icon-instagram.png"
import whatsapp from "../../img/icon-whatsapp.png"
import discord from "../../img/icon-discord.png"

class Footer extends Component{
    render(){
        const localizacao = "https://www.google.com/maps/place/Av.+Dr.+Severo+da+Silva+-+Est%C3%A2ncia+Velha,+Canoas+-+RS/@-29.9202322,-51.1526058,17z/data=!3m1!4b1!4m5!3m4!1s0x95197046624c6619:0x7a91478da2ccdcc!8m2!3d-29.9202322!4d-51.1504171"

        return(
            <footer className="pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <span className="">Redes Sociais:</span>
                            <div className="row imgDir mr-3">
                                <div className="col-12 col-md ml-md-5 ml-6">
                                    <a href="https://www.facebook.com/profile.php?id=100010774175639" target="_blank"><img src={facebook}></img></a>
                                    <a href="https://twitter.com/cursoito" target="_blank"><img src={twitter}></img></a>
                                    <a href="https://www.instagram.com/leocourse8/?hl=pt-br" target="_blank"><img src={instagram}></img></a>
                                    <a href="https://api.whatsapp.com/send?phone=+555195218066" target="_blank"><img src={whatsapp}></img></a>
                                    <a href="https://discord.com" target="_blank"><img src={discord}></img></a>
                                </div>
                            </div>
                        </div>  

                        <div className="col texto mb-4">
                            <p className="">Endereço: <br></br><a href={localizacao} target="_blank">Rua Severo da Silva, RS Brasil</a></p>
                        </div>

                        <div className="col texto">
                            <p className="">Email: <a href="mailto:leonardomm14@outlook.com">leonardomm14@outlook.com</a></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col texto mb-md-4"><p>Telefone: <br></br><a href="tel:51995218066">(51) 99521-8066</a></p></div>
                    </div>
                </div>
                <p className="dir pb-3">Direitos Reservados © Leonardo</p>
            </footer>
        )
    }
}

export default Footer;