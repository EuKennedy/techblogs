import { HiOutlineUser } from "react-icons/hi";

import Post from './img/post1.jpg'
import Post2 from './img/post2.jpg'
import Post3 from './img/post3.png'
import Post4 from './img/post4.png'
import Post5 from './img/post5.jpg'
import Post6 from './img/post6.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';

const carousel = [ 
 { id: '1', Image: Post, title: 'Como gerar resultados a partir de tecnologias emergentes?', paragraph: 'A adoção de tecnologias emergentes é uma estratégia fundamental para impulsionar o crescimento e...', saibaMaisLink: 'Saiba Mais'},
 { id: '2', Image: Post2, title: 'Deep techs: as startups que dominam tecnologias complexas', paragraph: 'Com o avanço tecnológico, sabemos que tudo pode ser aprimorado para níveis bem superiores, sejam ......', saibaMaisLink: 'Saiba Mais'},
 { id: '3', Image: Post3, title: 'O que é a inteligência artificial generativa?', paragraph: 'A inteligência artificial (AI) está cada vez mais presente em nosso cotidiano, ganhando novas props...', saibaMaisLink: 'Saiba Mais'},
 { id: '4', Image: Post4, title: '10 fatores para validar uma nova tecnologia!', paragraph: 'Com o mercado cada vez mais competitivo, é natural surgirem novas tecnologias, cada uma com uma fun...', saibaMaisLink: 'Saiba Mais'},
 { id: '5', Image: Post5, title: 'Desafios e oportunidades para empreender em 2023!', paragraph: 'Antes de iniciar um novo negócio, todo empresário e empreendedor deve conhecer desafios e oportuni...', saibaMaisLink: 'Saiba Mais'},
 { id: '6', Image: Post6, title: 'Data augmentation: o que é e como usar essa técnica?', paragraph: 'Você já ouviu falar em data augmentation? Esse é um conjunto de técnicas utilizadas para ampliar...', saibaMaisLink: 'Saiba Mais'},

]

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
              <div className="header-section">
                <div className="carousel">
                  <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  slidesPerView={1}
                  navigation={{ clickable: true }}
                  pagination={{ clickable: true }}
                  >
                    {carousel.map((item) =>(
                      <SwiperSlide key={item.id}>
                        <div className="slide-item">
                          <img src={item.Image} 
                          alt="slider"
                          />
                          <h1>{item.title}</h1>
                          <p>{item.paragraph}</p>
                          <a href="#">{item.saibaMaisLink}</a>
                        </div>    
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              
          </section>
      </section>
    </div>
  )
}

export default Header