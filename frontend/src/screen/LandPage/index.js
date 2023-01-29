import { Button, Col, Container, Row, Spinner } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getLand } from '../../redux/lands'

const LandPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { isLoading, land } = useSelector(state => state.lands)

    useEffect(() => {
        if (id) dispatch(getLand(id))
    }, [id])

    if (isLoading) {
        return (
            <Container className='mt-3'>
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            </Container>
        )
    }

    return (
        <Container>
            {!isLoading && (
                <Row>
                    <Col md='8'>
                        <Swiper
                            navigation={true}
                            loop
                            modules={[Navigation, Pagination]}
                            className='mySwiper w-100'
                        >
                            {[...new Array(5)].map((_, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src='https://www.shutterstock.com/image-photo/random-coastal-farming-land-fleurieu-260nw-673320442.jpg'
                                        className='w-100'
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                    <Col md='4'>
                        <div className='mt-5'>
                            <Button as='a' href={`tel:+998${land.phone}`} className='w-100'>
                                <i className='fa-solid fa-phone me-1' />
                                Yer egasiga telefon qilish
                            </Button>
                        </div>
                    </Col>
                </Row>
            )}
        </Container>
    )
}

export default LandPage
