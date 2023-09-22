import { HiOutlineUser } from "react-icons/hi";
import Bg from './img/bg.png'


const Header = () => {
  return (
    <div>
      <section className="main-header">
        <div className="header-navbar">
            <h1>Tech Blog</h1>
            <a href="#">CONTEÚDOS</a>
            <a href="#">DESAFIOS</a>
            <a href="#">QUEM SOMOS</a>
            <a href="#">LOGIN</a>
            <a href="#">CADASTRAR</a>
        </div>
          <section className="header-father">
            <div className="header-content">
              <div className="header-props">
                <h2><span>Tecnologia</span><br></br>Conhecimento<br></br><span>Desenvolvimento</span><br></br>Carreira</h2>
                <p>Busque e implemente com o Distrito as melhores<br></br>soluções para resolver os desafios e impulsionar o<br></br>crescimento da sua empresa</p>
                <div className="button-header">
                  <a href="#">CRIAR MINHA CONTA</a> <a><HiOutlineUser size={30} color="white"/></a>
                </div>
              </div>
              <img src={Bg} alt="img"/>
            </div>
          </section>
      </section>
    </div>
  )
}

export default Header
