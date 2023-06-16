import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../Card'
import { Container } from './styles'
import 'swiper/swiper.min.css'

function Slider({ info, title }) {
    const breakpoints = {
        390: {
            slidesPerView: 3,
            spaceBetween: -50
        },
        445: {
            slidesPerView: 3,
            spaceBetween: -80
        },
        450: {
            slidesPerView: 3,
            spaceBetween: -80
        },
        480: {
            slidesPerView: 3,
            spaceBetween: -100
        },
        500: {
            slidesPerView: 3,
            spaceBetween: -100
        },
        550: {
            slidesPerView: 3,
            spaceBetween: 20
        },

        600: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        660: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        780: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        800: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        880: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        950: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        1050: {
            slidesPerView: 6,
            spaceBetween: 15
        },
        1215: {
            slidesPerView: 6,
            spaceBetween: 15
        }
    }

    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
                grabCursor
                spaceBetween={-40}
                slidesPerView={1}
                breakpoints={breakpoints}
                className="swiper"
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export default Slider
