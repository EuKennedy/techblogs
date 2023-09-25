import React from 'react'
import Post from './img/post1.jpg'
import Post2 from './img/post2.jpg'
import Post3 from './img/post3.png'
import Post4 from './img/post4.png'
import Post5 from './img/post5.jpg'
import Post6 from './img/post6.png'

const Mid = () => {
  return (
    <div>
      <section className='post-content'>
        <div className="card-post-one">
          <img src={Post} alt="" 
          width={350}/>
          <h1>Como gerar resultados a partir de tecnologias emergentes?</h1><br />
          <p>A adoção de tecnologias emergentes é uma estratégia fundamental para impulsionar o crescimento e...<br /><br /><a href="#"> clique aqui para ler mais.</a></p>
        </div>

        <div className="card-post-two">
          <img src={Post2} alt="" 
          width={350}/>
          <h1>Deep techs: as startups que dominam tecnologias complexas</h1><br />
          <p>Com o avanço tecnológico, sabemos que tudo pode ser aprimorado para níveis bem superiores, sejam ......<br /><br /><a href="#"> clique aqui para ler mais.</a></p>
        </div>

        <div className="card-post-three">
          <img src={Post3} alt="" 
          width={350}/>
          <h1>O que é a inteligência artificial generativa?</h1><br />
          <p>A inteligência artificial (AI) está cada vez mais presente em nosso cotidiano, ganhando novas props...<br /><br /><a href="#"> clique aqui para ler mais.</a></p>
        </div>
      </section>


      <section className='post-content-two'>
        <div className="card-post-one">
          <img src={Post4} alt="" 
          width={350}/>
          <h1>10 fatores para validar uma nova tecnologia!</h1><br />
          <p>Com o mercado cada vez mais competitivo, é natural surgirem novas tecnologias, cada uma com uma fun...<br /><br /><a href="#"> clique aqui para ler mais.</a></p>
        </div>

        <div className="card-post-two">
          <img src={Post5} alt="" 
          width={350}/>
          <h1>Desafios e oportunidades para empreender em 2023!</h1><br />
          <p>Antes de iniciar um novo negócio, todo empresário e empreendedor deve conhecer desafios e oportuni...<br /><br /><a href="#"> clique aqui para ler mais.</a></p>
        </div>

        <div className="card-post-three">
          <img src={Post6} alt="" 
          width={350}/>
          <h1>Data augmentation: o que é e como usar essa técnica?</h1><br />
          <p>Você já ouviu falar em data augmentation? Esse é um conjunto de técnicas utilizadas para ampliar...<br /><br /><a href="#"> clique aqui para ler mais.</a></p>
        </div>
      </section>
    </div>
  )
}

export default Mid
