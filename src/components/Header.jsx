import { HiOutlineUser } from "react-icons/hi";
import Bg from './img/bg.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const carousel = [ 
 { id: '1', Image: 'https://img.freepik.com/fotos-gratis/homem-tiro-medio-usando-oculos-vr_23-2149126949.jpg?w=1380&t=st=1695496173~exp=1695496773~hmac=ae45710588f978f50cfa473faa2832cd74def961bfadb356086917b5b8765929' },
 { id: '2', Image: 'https://img.freepik.com/fotos-gratis/homem-tiro-medio-usando-oculos-vr_23-2149126949.jpg?w=1380&t=st=1695496173~exp=1695496773~hmac=ae45710588f978f50cfa473faa2832cd74def961bfadb356086917b5b8765929' },
 { id: '3', Image: 'https://img.freepik.com/fotos-gratis/homem-tiro-medio-usando-oculos-vr_23-2149126949.jpg?w=1380&t=st=1695496173~exp=1695496773~hmac=ae45710588f978f50cfa473faa2832cd74def961bfadb356086917b5b8765929' },
 { id: '4', Image: 'https://img..com/fotos-gratis/homem-tiro-medio-usando-oculos-vr_23-2149126949.jpg?w=1380&t=st=1695496173~exp=1695496773~hmac=ae45710588f978f50cfa473faa2832cd74def961bfadb356086917b5b8765929' },
 { id: '5', Image: 'https://img.freepik.com/fotos-gratis/homem-tiro-medio-usando-oculos-vr_23-2149126949.jpg?w=1380&t=st=1695496173~exp=1695496773~hmac=ae45710588f978f50cfa473faa2832cd74def961bfadb356086917b5b8765929' },

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
                  navigation={{clickable: true}}
                  >
                    {carousel.map((item) =>(
                      <SwiperSlide key={item.id}>
                        <img src={item.Image} 
                        alt="slider"
                        className="slide-item" />
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