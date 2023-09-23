import { HiOutlineUser } from "react-icons/hi";
import Bg from './img/bg.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const carousel = [ 
 { id: '1', Image: 'https://distrito.me/wp-content/themes/distrito/img/grupo3.webp' },
 { id: '2', Image: 'https://distrito.me/wp-content/uploads/2022/10/ilustra-distrito-startups.webp' },
 { id: '3', Image: 'https://distrito.me/wp-content/uploads/2022/10/ilustra-distrito-startups.webp' },
 { id: '4', Image: 'https://distrito.me/wp-content/uploads/2022/10/ilustra-distrito-startups.webp' },
 { id: '5', Image: 'https://distrito.me/wp-content/uploads/2022/10/ilustra-distrito-startups.webp' },

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
                  slidesPerView={1}
                  pagination={{clickable: true}}
                  navigation
                  >
                    {carousel.map((item) =>(
                      <SwiperSlide key={item.id}>
                        <img src={item.Image} 
                        alt="slider"
                        className="slide-item" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <h1>olá</h1>
                </div>
              </div>
              
          </section>
      </section>
    </div>
  )
}

export default Header