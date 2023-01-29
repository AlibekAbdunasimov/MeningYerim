import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useEffect } from 'react'
import { getLand, getLands } from '../../redux/lands'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-creative'

// import required modules
import { EffectCreative } from 'swiper'

const Lands = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading, lands } = useSelector(state => state.lands)

    useEffect(() => {
        dispatch(getLands())
    }, [dispatch])

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
        <Container className='mt-3'>
            <h2>Yerlar</h2>
            <Row>
                {!isLoading &&
                    lands.map(land => (
                        <Col md='4' key={land._id}>
                            <Card className='p-2'>
                                <Swiper
                                    grabCursor={true}
                                    effect={'creative'}
                                    loop
                                    creativeEffect={{
                                        prev: { shadow: true, translate: [0, 0, -400] },
                                        next: { translate: ['100%', 0, 0] },
                                    }}
                                    modules={[EffectCreative]}
                                    className='mySwiper w-100'
                                >
                                    {[...new Array(5)].map((_, index) => (
                                        <SwiperSlide key={index}>
                                            <img src='https://www.shutterstock.com/image-photo/random-coastal-farming-land-fleurieu-260nw-673320442.jpg' />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <h4 className='text-capitalize'>{land.name}</h4>
                                <p>
                                    <b>Yer maydoni:</b> {land.landSize} sotix
                                </p>
                                <p>
                                    <b>Yer narxi:</b> ${land.landPrice}
                                </p>
                                <Button
                                    variant='light'
                                    onClick={() => navigate(`/land/${land._id}`)}
                                    className='w-100'
                                >
                                    Batafsil
                                </Button>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </Container>
    )
}

export default Lands
