import { HiOutlineUser } from "react-icons/hi";

import Post from './img/post1.png'
import Post2 from './img/post2.png'
import Post3 from './img/post3.png'
import Post4 from './img/post4.png'
import Post5 from './img/post5.png'
import Post6 from './img/post6.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  
import './Header.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';

const carousel = [ 
 { id: '1', Image: Post, saibaMaisLink: 'Saiba Mais'},
 { id: '2', Image: Post2, saibaMaisLink: 'Saiba Mais'},
 { id: '3', Image: Post3, saibaMaisLink: 'Saiba Mais'},
 { id: '4', Image: Post4, saibaMaisLink: 'Saiba Mais'},
 { id: '5', Image: Post5, saibaMaisLink: 'Saiba Mais'},
 { id: '6', Image: Post6, title: 'a', saibaMaisLink: 'Saiba Mais'},

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
            <a href="../login">LOGIN</a>
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