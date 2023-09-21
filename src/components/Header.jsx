const Header = () => {
  return (
    <div>
        <div className="header-navbar">
            <h1>Tech Blog</h1>
            <a href="#">SOLUÇÕES</a>
            <a href="#">PLANOS</a>
            <a href="#">CONTEÚDOS</a>
            <a href="#">DESAFIOS</a>
            <a href="#">QUEM SOMOS</a>
            <a href="#">SOU STARTUP</a>
            <a href="#">LOGIN</a>
        </div>
        <section className="header-father">
            <div className="header-content">
                <h2>Transforme tecnologia<br></br>e inovação em<br></br>resultados reais</h2>
                <p>Busque e implemente com o Distrito as melhores<br></br>soluções para resolver os desafios e impulsionar o<br></br>crescimento da sua empresa</p>
                <button>EU QUERO ENTRAR EM CONTATO</button>
            </div>
        </section>
    </div>
  )
}

export default Header
